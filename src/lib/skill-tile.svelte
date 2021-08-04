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
		max-height: 6rem;
	}

	.skill-tile {
		background-color: var(--main-white);
		box-shadow: inset 0 0 0 1px rgb(0 0 0 / 15%), 0 2px 3px 0 rgb(0 0 0 / 10%);
		padding: 2rem;
	}

	.title {
		margin-top: 1rem;
	}

	.description {
		margin-top: 0.8rem;
	}

	@include for-tablet-portrait-up {
		:global(.skill-tile svg) {
			max-height: 7rem;
		}

		.title {
			margin-top: 2rem;
		}

		.description {
			margin-top: 1rem;
		}
	}
</style>
