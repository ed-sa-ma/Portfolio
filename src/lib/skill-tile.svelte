<script>
	import RichText from './rich-text.svelte';

	export let title;
	export let inlineIcon;
	export let description;
</script>

<div class="skill-tile">
	{@html inlineIcon}
	<RichText text={title} />
	<RichText text={description} />
</div>

<style lang="scss">
	.skill-tile {
		background-color: var(--main-white);
		box-shadow: inset 0 0 0 1px rgb(0 0 0 / 15%), 0 2px 3px 0 rgb(0 0 0 / 10%);
		padding: 2em;
	}

	:global(.skill-tile svg) {
		fill: currentColor;
		color: var(--main-red);
		max-height: 6em;
	}
</style>
