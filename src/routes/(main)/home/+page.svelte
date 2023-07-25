<script lang="ts">
	import { fade } from "svelte/transition"

	const elements: [string, [number, number, number]][] = [
		["Fire", [251, 163, 18]],
		["Earth", [220, 183, 136]],
		["Water", [90, 142, 254]],
		["Air", [231, 231, 231]],
		["Steam", [202, 210, 255]],
		["Lava", [249, 83, 13]],
		["Mud", [132, 91, 33]],
		["Mist", [162, 162, 216]],
		["Stone", [142, 61, 15]],
		["Obsidian", [11, 11, 11]],
	]

	const colCount = 3
	let columns: (typeof elements)[] = []

	for (let i = 0; i < colCount; i++)
		columns.push(elements.filter((_, j) => j % colCount == i))

	let combined: typeof elements = []
</script>

<div class="all">
	<section class="itemsection">
		<p id="itemsheader">
			Your Elements ({elements.length}/{elements.length})
		</p>
		<div class="items">
			{#each columns as column}
				<div class="column">
					{#each column as element}
						<button
							class="element"
							style="background: rgb({element[1]})"
							on:click={() => {
								if (combined.length > 3) return
								combined.push(element)
								combined = combined
							}}>
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
						</button>
					{/each}
				</div>
			{/each}
		</div>
	</section>

	<section class="combinesection">
		<span class="combine">
			{#if combined.length == 0}
				<p>
					Tap an element from "Your Elements" to add into combine
					section
				</p>
			{/if}
			{#each combined as element, num}
				<div in:fade>
					<button
						class="combineelement"
						style="background: rgb({element[1]})"
						on:click={() => {
							combined.splice(num, 1)
							combined = combined
						}}>
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
					</button>
				</div>
			{/each}
		</span>
		<button id="combinebutton">Combine</button>
	</section>

	<section>
		<div class="search">
			🔍 <input type="text" placeholder="Search" />
		</div>
	</section>
</div>

<style lang="stylus">
	#itemsheader
		text-align center
		background #303030
		padding 0.25rem 0
		margin 0
		color #c1c1c1
		border-radius 0.7rem 0.7rem 0 0
		font-weight 600

	.all
		padding-top 0.3rem
		display flex

		justify-content flex-end
		flex-direction column
		height 99%

	section
		padding-bottom 0.7rem
		> div
		span
			border-radius 0.7rem
			background #515151
			padding 0.4rem

	.combine
		display flex
		width 100%
		flex-direction column
		border-radius 0.7rem 0 0 0.7rem
		p
			margin 0
			border-radius 0.7rem
			padding 0.5rem
			color black
			text-align center
			font-weight bold

			background #8c8c8c

	.combinesection
		display flex
		width 100%
		#combinebutton
			border-radius 0 0.7rem 0.7rem 0 
			font-size 1.1rem
			color white
			text-align center
			background #5050aa
			border none

	.column
		display flex
		flex-direction column
		width 100%
	
	.items
		overflow-y auto
	.itemsection
		flex-direction column

	.element
	.combineelement
		border-radius 0.7rem
		padding 0.4rem
		margin 0.2rem
		color black
		text-align center
		font-weight bold
		border none
		word-wrap break-word

		span
			background-color #0000

	.combineelement
		width 100%

	.itemsection
	.items
		display flex
		border-radius 0 0 0.7rem 0.7rem
		overflow-y auto
		height 100%

	input
		width 90%
		background none
		border none
		color white
		padding-bottom 0.2rem
		margin 0.3rem
		
		border-bottom 1px solid #a6a6a6
		transition border-bottom 0.2s

		&:focus
			outline none
			border-bottom 1px solid #d81b60
</style>
