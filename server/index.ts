const users = [
	{
		id: 1,
		name: "John",
	},
]

const db = {
	user: {
		findMany: async () => {
			return users
		},
		findById: async (id: number) => {
			return users.find(user => user.id === id)
		},
		create: async (input: { name: string }) => {
			const user = {
				id: users.length + 1,
				name: input.name,
			}
			users.push(user)
			return user
		}, 
	},
}

import { createHTTPServer } from "@trpc/server/adapters/standalone"
import { z } from "zod"
import { publicProcedure, router } from "./trpc"

const appRouter = router({
	userList: publicProcedure.query(async () => {
		// Retrieve users from a datasource, this is an imaginary database
		const users = await db.user.findMany()
		console.log("Found users", users)
		return users
	}),

	userById: publicProcedure.input(z.string()).query(async opts => {
		const { input } = opts
		// Retrieve the user with the given ID
		const user = await db.user.findById(parseInt(input))
		console.log("Found user", user)
		return user
	}),

	userCreate: publicProcedure
		.input(z.object({ name: z.string() }))
		.mutation(async opts => {
			const { input } = opts
			// Create a new user in the database
			const user = await db.user.create(input)
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
