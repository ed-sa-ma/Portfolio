<script>
	import RichText from './rich-text.svelte';

	export let title;
	export let inlineIcon;
	export let description;
</script>

<div class="skill-tile">
	{@html inlineIcon}
	<div class="title">
		<RichText text={title} />
	</div>
	<div class="description">
		<RichText text={description} />
	</div>
</div>

<style lang="scss">
	@import '../styles/breakpoints.scss';

	:global(.skill-tile svg) {
		fill: currentColor;
		color: var(--main-red);
		max-height: 6em;
	}

	.skill-tile {
		background-color: var(--main-white);
		box-shadow: inset 0 0 0 1px rgb(0 0 0 / 15%), 0 2px 3px 0 rgb(0 0 0 / 10%);
		padding: 2em;
	}

	.title {
		margin-top: 1em;
	}

	.description {
		margin-top: 0.8em;
	}

	@include for-tablet-portrait-up {
		:global(.skill-tile svg) {
			max-height: 7em;
		}

		.title {
			margin-top: 2em;
		}

		.description {
			margin-top: 1em;
		}
	}
</style>
