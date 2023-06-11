<script lang="ts">
	const votes: [
		string,
		[number, number, number],
		[string, [number, number, number]][]
	][] = [
		[
			"Dew",
			[11, 218, 234],
			[
				["Water", [90, 142, 254]],
				["Air", [231, 231, 231]],
			],
		],
		[
			"Gravel",
			[255, 253, 100],
			[
				["Earth", [220, 183, 136]],
				["Stone", [142, 61, 15]],
			],
		],
	]
</script>

<div class="all">
	<section>
		<div class="search">
			<input type="text" placeholder="Search Element" />
		</div>
	</section>

	<section class="itemsection">
		<div class="items">
			{#each votes as vote}
				{@const colour =
					(vote[1][0] + vote[1][1] + vote[1][2]) / 3 > 127
						? "black"
						: "white"}
				<div class="votecontainer">
					<div class="vote" style="background: rgb({vote[1]})">
						<p class="voteheader" style="color: {colour}">
							{vote[0]}
						</p>
						<span class="elements">
							{#each vote[2] as element}
								<span
									class="element"
									style="background: rgb({element[1]})">
									<small
										style="color: {(element[1][0] +
											element[1][1] +
											element[1][2]) /
											3 >
										127
											? 'black'
											: 'white'}">
										{element[0]}
									</small>
								</span>
							{/each}
						</span>
					</div>
					<span class="buttons">
						<button class="upvote">▲</button>
						<button class="downvote">▼</button>
					</span>
				</div>
			{/each}
		</div>
	</section>
</div>

<style lang="sass">
	.all
		padding-top: 0.3rem
		display: flex

		justify-content: flex-end
		flex-direction: column
		height: 99%

	section
		padding-bottom: 0.7rem
		> div
			display: flex
			flex-direction: column
			overflow-y: auto
			border-radius: 0.7rem
			background: #515151
			padding: 0.4rem

	.vote
		padding: 0.3rem
		width: 100%
		border-radius: 0.7rem 0 0 0.7rem
		
	.elements
		display: grid
		grid-template-columns: 1fr 1fr
		grid-gap: 0 1.5rem

	.voteheader
		font-weight: bold
		text-align: center
		margin: 0

	.element
		border-radius: 0.7rem
		padding: 0.2rem
		margin: 0.2rem
		text-align: center
		word-wrap: break-word

	.votecontainer
		padding-bottom: 0.5rem
		display: flex
	.buttons
		width: 2rem
		button
			width: 100%
			height: 50%
		
	.upvote
		border-radius: 0 0.7rem 0 0
		border: none
		background: #70aa70
		color: white
		padding: 0.2rem
		margin: 0
		transition: background 0.2s
		&:hover
			background: #39a839
	
	.downvote
		border-radius: 0 0 0.7rem 0
		border: none
		background: #aa7070
		color: white
		padding: 0.2rem
		margin: 0
		transition: background 0.2s
		&:hover
			background: #a83939

	.itemsection, .items
		height: 99%

	input
		width: 96%
		background: none
		border: none
		color: white
		padding-bottom: 0.2rem
		margin: 0.3rem
		
		border-bottom: 1px solid #a6a6a6
		transition: border-bottom 0.2s

		&:focus
			outline: none
			border-bottom: 1px solid #d81b60
</style>
