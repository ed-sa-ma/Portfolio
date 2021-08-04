<script>
	import { browser } from '$app/env';
	import { collapse } from '$lib/actions.js';
	import RichText from '$lib/rich-text.svelte';

	export let name;
	export let role;
	export let review;
	export let linkedin;

	let reducedMotion = browser && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	let collapsed = true;
</script>

<div class="review">
	<a class="header" href={linkedin} target="_blank" rel="noopener">
		<RichText text={name} />
	</a>
	<RichText text={role} />
	<div class="expandable">
		<div
			class="expandable-text"
			class:collapsed
			class:animated={!reducedMotion}
			use:collapse={{ reducedMotion }}
		>
			<RichText text={review} />
		</div>
		<!-- Replica which keeps the same text inside to set height on parent to avoid sudden collapsing -->
		{#if !reducedMotion}
			<div>
				<RichText text={review} />
			</div>
		{/if}
	</div>
	<!-- svelte-ignore a11y-missing-attribute -->
	<button class="expand-link link" href="/" on:click|preventDefault={() => (collapsed = !collapsed)}
		>{collapsed ? 'See more' : 'See less'}</button
	>
</div>

<style lang="scss">
	:global(.review a h3) {
		color: inherit;
	}

	.review {
		background: #fff;
		box-shadow: inset 0 0 0 1px rgb(0 0 0 / 15%), 0 2px 3px 0 rgb(0 0 0 / 10%);
		padding: 2rem 1.5rem;
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

	.expandable-text.animated {
		position: absolute;
		top: 0;
	}

	a.header {
		text-decoration: none;
		// Regular headline color.
		color: var(--bold-grey);

		@media (hover: hover) {
			&:hover {
				color: var(--main-blue);
			}
		}
	}

	.expand-link {
		display: inline-block;
		margin-top: 0.8rem;
	}
</style>
