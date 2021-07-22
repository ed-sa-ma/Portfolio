<div class="grid-component">
	<slot />
</div>

<style>
	:global(.grid-component > *) {
		max-width: var(--max-width);
		width: 100%;
	}

	.grid-component {
		--gap: 2em;
		gap: var(--gap);
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
