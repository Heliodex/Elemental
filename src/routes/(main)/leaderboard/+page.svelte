<script lang="ts">
	export let data
</script>

<div class="all">
	<section>
		<div id="leaderboardheader">
			<span>Rank</span>
			<span>Name</span>
			<span class="elements">Elements</span>
		</div>
		<div class="leaderboard">
			<table>
				<tbody>
					{#each data.users.sort((a, b) => b.currency - a.currency) as user, num}
						<tr>
							<td class="rank">
								{num + 1}
							</td>
							<td>
								{user.name}
							</td>
							<td class="numElements">
								5
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>
</div>

<style lang="stylus">
	#leaderboardheader
		display flex
		text-align center
		background #303030
		padding 0.25rem 0
		margin 0
		color #c1c1c1
		border-radius 0.7rem 0.7rem 0 0
		font-weight 600

		span
			flex 1

		.elements
			margin-left 56%
			padding-right 0.5rem

	.all
		padding 0.3rem 0 0.3rem 0
		height 98%

	.leaderboard
		border-radius 0.7rem
		background #515151
		overflow-y auto

	section
		display flex
		flex-direction column
		overflow-y scroll

		&::-webkit-scrollbar
			display none

	section
	.leaderboard
		height 100%
		border-radius 0 0 0.7rem 0.7rem

	table
		width 100%
		font-size 0.9rem
		border-spacing 0 0.4rem
		line-height 1rem

	// Bronze, Silver, and Gold colouring for top 3 players
	tr:nth-child(1)
		background #ffd700
		color black
	tr:nth-child(2)
		background #c0c0c0
		color black
	tr:nth-child(3)
		background #cd7f32

	.rank
		width 2.5rem
		padding-left 1.5rem
	.numElements
		text-align right
		padding-right 1rem
</style>
