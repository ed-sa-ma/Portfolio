<script>
	import RichText from '$lib/rich-text.svelte';

	export let title;
	export let description;
	export let note;
	export let button;
</script>

<div class="layout">
	<div class="title">
		<RichText text={title} />
	</div>
	<div class="description">
		<RichText text={description} />
	</div>
	<div class="content">
		<slot />
	</div>
</div>

{#if note}
	<div class="note">
		<RichText text={note} />
	</div>
{/if}

{#if button}
	<a href={button.link} class="button large">{button.text}</a>
{/if}

<style>
	.title {
		margin-bottom: 1em;
	}
	.description,
	.note {
		font-size: 1.25em;
		margin-bottom: 1em;
	}

	.content {
		margin-bottom: 2em;
	}
</style>
