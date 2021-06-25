<script>
	import RichText from './rich-text.svelte';

	export let title;
	export let description;
	export let image;
</script>

<div class="project-tile">
	<img src={image.url} alt={image.alt} />
	<div class="title">
		<RichText text={title} />
	</div>
	<div class="description">
		<RichText text={description} />
	</div>
</div>

<style lang="scss">
	@import '../styles/breakpoints.scss';

	.project-tile {
		--vertical-padding: 1.5em;
		--horizontal-padding: 1em;

		background: #fff;
		box-shadow: inset 0 0 0 1px rgb(0 0 0 / 15%), 0 2px 3px 0 rgb(0 0 0 / 10%);
		padding: var(--vertical-padding) var(--horizontal-padding);
	}

	img {
		/* We leave 1px around the image to see the box-shadow. */
		--padding: 1px;

		position: relative;
		top: calc(var(--padding) - var(--vertical-padding));
		left: calc(var(--padding) - var(--horizontal-padding));
		width: calc(100% - 2 * var(--padding) + 2 * var(--horizontal-padding));
	}

	.description {
		margin-top: 0.8em;
	}

	@include for-tablet-portrait-up {
		.project-tile {
			--vertical-padding: 2em;
			--horizontal-padding: 2em;
		}

		.description {
			margin-top: 1em;
		}
	}
</style>
