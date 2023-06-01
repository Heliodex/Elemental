import { defineConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import { internalIpV4 } from "internal-ip"

// https://vitejs.dev/config/
export default defineConfig(async () => ({
	plugins: [sveltekit()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
	server: {
		host: "0.0.0.0", // listen on all addresses
		port: 5173,
		strictPort: true,
		hmr: {
			protocol: "ws",
			host: await internalIpV4(),
			port: 5183,
		},
	},
}))
