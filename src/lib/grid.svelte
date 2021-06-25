<div class="grid-component">
	<slot />
</div>

<style>
	.grid-component {
		--spacing: 0.5em;

		margin: calc(var(--spacing) * -1);
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	:global(.grid-component > *) {
		margin: var(--spacing);
		max-width: var(--max-width, 500px);
		min-width: var(--min-width, 300px);
		flex: 1;
	}
</style>
