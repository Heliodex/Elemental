import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import type { AppRouter } from "../../server/index"

export default createTRPCProxyClient<AppRouter>({
	links: [
		httpBatchLink({
			url: "http://localhost:3000",
		}),
	],
})
