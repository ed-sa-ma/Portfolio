<div class="grid-component">
	<slot />
</div>

<style>
	:global(.grid-component > *) {
		margin: var(--spacing);
		max-width: var(--max-width);
		min-width: var(--min-width);
		width: var(--width);
		flex: var(--flex);
	}

	.grid-component {
		--spacing: 0.5em;

		margin: calc(var(--spacing) * -1);
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
