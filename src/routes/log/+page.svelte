<script lang="ts">
	const log = [
		["Element Unlocked!", "Congratulations, you discovered x", 3],
		["Referral reward", "x referred using your referral code", 150],
		["Element Unlocked!", "Congratulations, you discovered x", 3],
		["Element Unlocked!", "Congratulations, you discovered x", 3],
		["Element Unlocked!", "Congratulations, you discovered x", 3],
		["Violation", "Your element suggestion on x got removed."],
		["New Comment", "x commented on your suggestion of y"],
		["New Comment", "x commented on your suggestion of y"],
		["New Comment", "x commented on your suggestion of y"],
		["New Comment", "x commented on your suggestion of y"],
	]
</script>

<div class="all">
	{#each log as item}
		<section class="logitem">
			<div id="logheader">
				<div class="headertext">
					{item[0]}
				</div>

				{#if item[2]}
					<span class="currency">
						+{item[2]}💵
					</span>
				{/if}
			</div>
			<p class="log">{item[1]}</p>
		</section>
	{/each}
</div>

<style lang="sass">
	#logheader
		display: flex
		background: #303030
		color: #c1c1c1
		border-radius: 0.7rem 0.7rem 0 0
		padding-left: 0.5rem

	.headertext
		padding-top: 0.25rem

	.all
		overflow-y: auto
		height: 100%

		padding-top: 0.3rem

	section
		padding-bottom: 0.4rem

	.log
		border-radius: 0.7rem
		background: #515151
		padding: 0.4rem
		margin: 0
		font-size: 0.8rem
		color: #bdbdbd
	
	.logitem
		flex-direction: column

	.logitem, .log
		display: flex
		border-radius: 0 0 0.7rem 0.7rem
		overflow-y: auto

	.currency
		padding: 0.2rem 0.5rem
		margin-left: auto
		background: #b29700
		color: white
		border-radius: 0 0.7rem 0 0

</style>
