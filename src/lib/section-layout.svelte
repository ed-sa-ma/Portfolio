<script>
	import RichText from '$lib/rich-text.svelte';

	export let title;
	export let description;
	export let note = null;
	export let button = null;
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

{#if note && note.length}
	<div class="note">
		<RichText text={note} />
	</div>
{/if}

{#if button}
	<a href={button.link} class="button large">{button.text}</a>
{/if}

<style lang="scss">
	@import '../styles/breakpoints.scss';

	:global(.layout h1, .layout h2, .layout h3, .layout h4, .layout h5, .layout h6) {
		margin: 0;
	}

	.description,
	.note {
		font-size: 1.25em;
	}
	.description {
		margin-top: 0.8em;
	}

	.note {
		margin-top: 1em;
	}

	.content {
		margin-top: 1em;
	}

	.button {
		margin-top: 2em;
	}

	@include for-tablet-portrait-up {
		.description {
			margin-top: 1em;
		}

		.content {
			margin-top: 2em;
		}

		.note {
			margin-top: 2em;
		}
	}
</style>
