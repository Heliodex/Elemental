import trpc from "$lib/trpc"

export const load = () => ({
	users: trpc.userList.query(),
})
