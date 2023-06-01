<script lang="ts">
	const users: [string, number][] = [
		["LarsVegas", 8500],
		["aa", 8000],
		["ka", 7500],
		["aq", 7000],
		["ak", 6500],
		["ak", 6000],
		["ax", 5500],
		["ab", 5000],
		["aoe", 4500],
		["ad", 4000],
		["ahd", 3500],
		["Heliodex", 3141],
		["akx", 3000],
		["agh", 2500],
		["xxka", 2000],
		["a x b", 1500],
		["aeoui", 1000],
		["VioletStorm", 3079],
		["ba", 8000],
		["ba", 7500],
		["bq", 7000],
		["bk", 6500],
		["invisicat", 5166],
		["bk", 6000],
		["bx", 5500],
		["bb", 5000],
		["boe", 4500],
		["bd", 4000],
		["bhd", 3500],
		["bkx", 3000],
		["bgh", 2500],
		["bxka", 2000],
		["b x b", 1500],
		["beoui", 1000],
	]
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
					{#each users.sort((a, b) => b[1] - a[1]) as user, num}
						<tr>
							<td class="rank">
								{num + 1}
							</td>
							<td>
								{user[0]}
							</td>
							<td class="numElements">
								{user[1]}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>
</div>

<style lang="sass">
	#leaderboardheader
		text-align: center
		background: #303030
		padding: 0.25rem 0
		margin: 0
		color: #c1c1c1
		border-radius: 0.7rem 0.7rem 0 0

		display: flex

		span
			flex: 1

		.elements
			margin-left: 60%
			padding-right: 0.5rem

	.all
		padding: 0.3rem 0 0.3rem 0
		height: 98%

	.leaderboard
		border-radius: 0.7rem
		background: #515151
		overflow-y: auto

	section
		display: flex
		flex-direction: column
		overflow-y: scroll

		&::-webkit-scrollbar
			display: none

	section, .leaderboard
		height: 100%
		border-radius: 0 0 0.7rem 0.7rem

	table
		width: 100%
		font-size: 0.9rem
		border-spacing: 0 0.4rem
		line-height: 1rem

	// Bronze, Silver, and Gold colouring for top 3 players
	tr:nth-child(1)
		background: #ffd700
		color: black
	tr:nth-child(2)
		background: #c0c0c0
		color: black
	tr:nth-child(3)
		background: #cd7f32

	.rank
		width: 3rem
		padding-left: 0.5rem
	.numElements
		text-align: right
		padding-right: 0.5rem
</style>
