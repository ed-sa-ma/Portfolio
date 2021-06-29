<script>
	import { blur } from 'svelte/transition';
	import { getContext, onMount } from 'svelte';
	import RichText from '$lib/rich-text.svelte';

	let data = getContext('content');
	let { header } = $data;
	let visible = false;

	onMount(() => (visible = true));
</script>

<div class="heading wrapper">
	<div class="fit">
		{#if visible}
			<img
				class="visible"
				in:blur={{ duration: 800, delay: 200 }}
				src={header.image.url}
				alt={header.image.alt}
			/>
		{/if}
		<img aria-hidden="true" class="placeholder" src={header.image.url} alt={header.image.alt} />
	</div>
	<div class="text">
		<header>
			<RichText text={header.title} />
		</header>
		<div class="description">
			<RichText text={header.description} />
		</div>
		<a href="#skills" class="button large">{header['button_text']}</a>
	</div>
</div>

<style lang="scss">
	@import '../styles/breakpoints.scss';

	:global(.heading strong, .heading a, .heading h1) {
		color: inherit;
	}

	.wrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: space-evenly;
		align-items: center;
	}

	.fit {
		width: 60%;
		max-width: 24em;
		position: relative;
	}

	.text {
		margin-top: 1em;
	}

	@include for-tablet-portrait-up {
		.text {
			margin-top: 2em;
		}
	}

	@include for-desktop-up {
		.wrapper {
			flex-direction: row;
		}

		.text {
			text-align: start;
			margin-left: 2em;
			margin-top: 0;
		}

		.fit {
			width: 70%;
		}
	}

	img {
		width: 100%;
	}

	img.visible {
		position: absolute;
	}

	img.placeholder {
		visibility: hidden;
	}

	a {
		margin-top: 1em;
	}

	@include for-tablet-portrait-up {
		.description {
			font-size: 1.5em;
			line-height: 1.75em;
		}

		a {
			margin-top: 2em;
		}
	}
</style>
