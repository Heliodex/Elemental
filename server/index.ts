import { createHTTPServer } from "@trpc/server/adapters/standalone"
import { z } from "zod"
import { publicProcedure, router } from "./trpc"
import { Surreal } from "surrealdb.js"

const db = new Surreal("http://localhost:8000/rpc")

console.log("Connecting to database")

// Signin as a namespace, database, or root user
await db.signin({
	user: "root",
	pass: "root",
})

console.log("Connected to database")

let secs = 1

const timeout = setInterval(
	() => console.log(`Been waiting ${secs++} seconds...`),
	1000,
)

// Select a specific namespace / database (currently fails)
await db.use({ ns: "test", db: "test" })

clearInterval(timeout)

console.log("Using namespace 'main' and database 'main'")

const appRouter = router({
	userList: publicProcedure.query(async () => {
		// Retrieve users from database
		const users = await db.select("user")

		console.log("Found users", users)
		return users
	}),

	userById: publicProcedure.input(z.string()).query(async ({ input }) => {
		// Retrieve the user with the given ID
		const user = await db.query("SELECT * FROM user:$id", { id: input })

		console.log("Found user", user)
		return user
	}),

	userCreate: publicProcedure
		.input(z.object({ name: z.string() }))
		.mutation(async ({ input }) => {
			// Create a new user in the database
			const user = await db.create("user", {
				name: input.name,
			})

			console.log("Created user", user)
			return user
		}),
})

const server = createHTTPServer({
	router: appRouter,
})

server.listen(3000)

console.log("Server listening on port 3000")

export type AppRouter = typeof appRouter
