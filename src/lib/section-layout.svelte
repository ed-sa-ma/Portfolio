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
		font-size: 1.125rem;
	}

	.description {
		margin-top: 1rem;
	}

	.note {
		margin-top: 1rem;
	}

	.content {
		margin-top: 1.25rem;
	}

	.button {
		margin-top: 2rem;
	}

	@include for-tablet-portrait-up {
		.description {
			margin-top: 1.75rem;
		}

		.content {
			margin-top: 2rem;
		}

		.note {
			margin-top: 2rem;
		}
	}
</style>
