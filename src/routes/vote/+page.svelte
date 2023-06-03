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
				<div class="vote" style="background: rgb({vote[1]})">
					<p
						class="voteheader"
						style="color: {(vote[1][0] + vote[1][1] + vote[1][2]) /
							3 >
						127
							? 'black'
							: 'white'}">
						{vote[0]}
					</p>
					<span class="elements">
						{#each vote[2] as element}
							<span
								class="element"
								style="background: rgb({element[1]})">
								<span
									style="color: {(element[1][0] +
										element[1][1] +
										element[1][2]) /
										3 >
									127
										? 'black'
										: 'white'}">
									{element[0]}
								</span>
							</span>
						{/each}
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
		margin: 0.2rem
		border-radius: 0.7rem
		padding: 0.4rem
		
	.elements
		display: flex

	.voteheader
		font-weight: bold
		text-align: center
		margin: 0

	.element
		width: 50%
		border-radius: 0.7rem
		padding: 0.4rem
		margin: 0.2rem
		color: black
		text-align: center
		font-weight: bold
		border: none
		word-wrap: break-word

		span
			background-color: #0000

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
