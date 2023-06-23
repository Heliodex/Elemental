import { createHTTPServer } from "@trpc/server/adapters/standalone"
import { z } from "zod"
import { publicProcedure, router } from "./trpc"
import { createClient } from "edgedb"
import e from "./dbschema/edgeql-js/index"

const client = createClient()

const appRouter = router({
	userList: publicProcedure.query(async () => {
		// Retrieve users from a datasource, this is an imaginary database
		const users = await e
			.select(e.User, () => ({
				id: true,
				name: true,
			}))
			.run(client)

		console.log("Found users", users)
		return users
	}),

	userById: publicProcedure.input(z.string()).query(async opts => {
		const { input } = opts
		// Retrieve the user with the given ID
		const user = await e
			.select(e.User, user => ({
				id: true,
				name: true,
				filter_single: e.op(user.id, "=", e.uuid(input)),
			}))
			.run(client)

		console.log("Found user", user)
		return user
	}),

	userCreate: publicProcedure
		.input(z.object({ name: z.string() }))
		.mutation(async opts => {
			const { input } = opts
			// Create a new user in the database
			const user = await e
				.insert(e.User, {
					name: input.name,
				})
				.run(client)

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
