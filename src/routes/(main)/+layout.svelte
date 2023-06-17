<script lang="ts">
	import { fly } from "svelte/transition"

	const nav = [
		["/leaderboard", "₂1₃"],
		["/log", "☰"],
		["/home", "⌂"],
		["/vote", "˄˅"],
		["/settings", "⚙"],
	]

	let main: HTMLElement

	export let data

	$: pageNumber = nav.indexOf(
		nav.find(item => item[0] == data.currentPath) || []
	)
	let previousPageNumber =
		nav.indexOf(nav.find(item => item[0] == data.currentPath) || []) - 1 // - 1?
</script>

<div class="all">
	<nav>
		<a href="/">j</a>
		{#each nav as item}
			<a
				on:click={() => (previousPageNumber = pageNumber)}
				href={item[0]}
				class:current={data.currentPath == item[0]}>
				{item[1]}
			</a>
		{/each}
	</nav>

	<!-- Update whenever path changes -->
	{#key data.currentPath}
		<main
			bind:this={main}
			in:fly|local={{
				// Change direction of fly based previous page and current page
				x:
					pageNumber > previousPageNumber
						? window.innerWidth
						: -window.innerWidth,
				duration: 500,
				delay: 100,
				opacity: 1,
			}}
			out:fly|local={{
				x:
					pageNumber < previousPageNumber
						? window.innerWidth
						: -window.innerWidth,
				duration: 500,
				opacity: 1,
			}}
			on:outrostart={() => (main.style.position = "absolute")}
			on:introstart={() => (main.style.position = "absolute")}
			on:introend={() => (main.style.position = "block")}>
			<slot />
		</main>
	{/key}
</div>

<style lang="sass">
	main
		display: flex
		flex-direction: column
		height: calc(100vh - 2.3rem)
		padding: 0 0.3rem 0 0.3rem
		width: calc(100vw - 0.6rem)

	nav
		display: flex
		justify-content: center
		a
			padding: 0.5rem 0.3rem 0.3rem 0.3rem
			width: 2rem
			color: #666
			text-align: center
			text-decoration: none
			transition: filter 0.2s
			&:hover
				filter: brightness(2)

		.current
			color: #5050aa
			border-bottom: 2px solid #5050aa
</style>
