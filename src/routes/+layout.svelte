<script lang="ts">
	import { page } from "$app/stores"
	import "../global.sass"

	const nav = [
		["/leaderboard", "🥇"],
		["/log", "📃"],
		["/", "🏠"],
		["/vote", "⬆️"],
		["/settings", "⚙️"],
	]
</script>

<div class="all">
	<nav>
		{#each nav as item}
			<a href={item[0]} class:current={$page.url.pathname == item[0]}>
				{item[1]}
			</a>
		{/each}
	</nav>

	<main>
		<slot />
	</main>
</div>

<style lang="sass">
	main
		display: flex
		flex-direction: column
		height: calc(100vh - 2.3rem)
		padding: 0 0.3rem 0 0.3rem

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
				filter: brightness(0.7)

		.current
			border-bottom: 2px solid #5050aa
</style>
