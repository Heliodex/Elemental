import trpc from "$lib/trpc"

export async function load({ url }) {
	const user = await trpc.userCreate.mutate({ name: "Heliodex" })
	console.log(user)

	return {
		currentPath: url.pathname,
	}
}
