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
				in:blur={{ duration: 1000 }}
				src={header.image.url}
				alt={header.image.alt}
			/>
		{/if}
		<img aria-hidden="true" class="placeholder" src={header.image.url} alt={header.image.alt} />
	</div>
	<div>
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
</style>
