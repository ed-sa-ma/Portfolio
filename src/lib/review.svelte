<script>
	import { collapse } from '$lib/actions.js';
	import RichText from '$lib/rich-text.svelte';

	export let name;
	export let role;
	export let review;
	export let linkedin;

	let collapsed = true;
</script>

<div class="review">
	<a class="header" href={linkedin} target="_blank" rel="noopener">
		<RichText text={name} />
	</a>
	<RichText text={role} />
	<div class="expandable">
		<div class="expandable-text" class:collapsed use:collapse>
			<RichText text={review} />
		</div>
		<!-- Replica which keeps the same text inside to set height on parent to avoid sudden collapsing -->
		<div>
			<RichText text={review} />
		</div>
	</div>
	<!-- svelte-ignore a11y-missing-attribute -->
	<button class="expand-link link" href="/" on:click|preventDefault={() => (collapsed = !collapsed)}
		>{collapsed ? 'See more' : 'See less'}</button
	>
</div>

<style lang="scss">
	.review {
		background: #fff;
		box-shadow: inset 0 0 0 1px rgb(0 0 0 / 15%), 0 2px 3px 0 rgb(0 0 0 / 10%);
		padding: 2em 1.5em;
		text-align: start;
	}

	.collapsed {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

	.expandable {
		position: relative;
		overflow: hidden;
	}

	.expandable-text {
		position: absolute;
		top: 0;
	}

	a.header {
		text-decoration: none;
		// Regular headline color.
		color: var(--bold-grey);
	}

	a.header:hover {
		color: var(--main-blue);
	}

	:global(.review a h3) {
		color: inherit;
	}

	.expand-link {
		display: inline-block;
		margin-top: 0.8em;
	}
</style>
