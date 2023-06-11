export const prerender = true

export const load = ({ url }) => ({
	currentPath: url.pathname,
})
