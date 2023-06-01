<div class="all">
	<section class="itemsection">
		<p id="itemsheader">Your Elements (number here)</p>
		<div class="items">testing</div>
	</section>

	<section class="combinesection">
		<div class="combine">
			<p>
				Tap an element from "Your Elements" to add into combine section
			</p>
		</div>
		<button>Combine</button>
	</section>

	<section>
		<div class="search">
			<input type="text" placeholder="Search" />
		</div>
	</section>
</div>

<style lang="sass">
	#itemsheader
		text-align: center
		background: #303030
		padding: 0.25rem 0
		margin: 0
		color: #c1c1c1
		border-radius: 0.7rem 0.7rem 0 0

	.all
		padding-top: 0.3rem
		display: flex

		justify-content: flex-end
		flex-direction: column
		height: 100%

	section
		flex: 1 1 1
		padding-bottom: 0.7rem

		> div
			border-radius: 0.7rem
			background: #515151
			padding: 0.4rem

	.combine
		border-radius: 0.7rem 0 0 0.7rem
		p
			margin: 0
			border-radius: 0.7rem
			padding: 0.5rem
			color: black
			text-align: center
			font-weight: bold

			background: #8c8c8c

	.combinesection
		display: flex
		
		button
			width: 20%
			border-radius: 0 0.7rem 0.7rem 0 
			font-size: 1.1rem
			color: white
			text-align: center
			background: #5050aa
			border: none

	.itemsection, .items
		display: flex
		flex-direction: column
		height: 100%
		border-radius: 0 0 0.7rem 0.7rem

	input
		width: 97%
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
