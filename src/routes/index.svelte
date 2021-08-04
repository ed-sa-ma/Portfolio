<script context="module">
	import { getMainPageProps } from '$lib/helpers.js';

	// MAKE ALL FONT SIZES RELATIVE TO ROOT (REM)
	// TEST SCROLL SNAP POINTS
	// LOOK AT Clamp.js BEACUSE CSS LINE-CLAMP BREAKS IN SAFARI WHEN THERE ARE MULTIPLE PARAGRAPHS IN THE CLAMPED ELEMENTS.

	export async function load({ fetch }) {
		try {
			let res = await fetch('/cms/content').then((r) => r.json());

			return {
				status: 200,
				props: { data: getMainPageProps(res) }
			};
		} catch (err) {
			console.error(err);
			return {
				status: 500,
				body: { message: err.message }
			};
		}
	}
</script>

<script>
	import { readable } from 'svelte/store';
	import { setContext } from 'svelte';
	import Contact from '$lib/contact.svelte';
	import Copyright from '$lib/copyright.svelte';
	import Head from '$lib/head.svelte';
	import Heading from '$lib/heading.svelte';
	import Nav from '$lib/nav.svelte';
	import Portfolio from '$lib/portfolio.svelte';
	import Reviews from '$lib/reviews.svelte';
	import Skills from '$lib/skills.svelte';

	// Creating a readable store from the prop data and setting it as a context for child components.
	export let data;
	let store = readable(data);
	setContext('content', store);
</script>

<Head />
<Nav />

<article id="top" class="wrapper first style1">
	<div class="container">
		<Heading />
	</div>
</article>
<article id="skills" class="wrapper style2">
	<div class="container">
		<Skills />
	</div>
</article>
<article id="portfolio" class="wrapper style3">
	<div class="container">
		<Portfolio />
	</div>
</article>
<article id="reviews" class="wrapper style4">
	<div class="container">
		<Reviews />
	</div>
</article>
<article id="contact" class="wrapper style5">
	<div class="container reduced-bleed">
		<Contact />
		<footer>
			<Copyright />
		</footer>
	</div>
</article>

<style lang="scss">
	@import '../styles/breakpoints.scss';

	:global(.style5 h2, .style5 h3) {
		color: var(--main-white);
	}

	.wrapper {
		--vertical-padding: 3rem;
		--horizontal-padding: 1rem;

		align-items: center;
		background-image: url('/images/granular_bg.png');
		box-shadow: inset 0 1px 0 0 rgb(0 0 0 / 5%), inset 0 2px 3px 0 rgb(0 0 0 / 10%);
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 100vh;
		min-width: 100vw;
		padding: var(--vertical-padding) var(--horizontal-padding);
		text-align: center;
		scroll-margin-top: calc(var(--vertical-padding));
	}

	.wrapper.first {
		min-height: calc(100vh - var(--nav-height));
	}

	.container {
		max-width: 81.25rem; // 1300px
	}

	.style1 {
		background-color: var(--main-red);
		background-image: linear-gradient(var(--main-red), var(--dark-red));
		color: var(--main-white);
	}

	.style2 {
		background-color: #fafafa;
		text-shadow: 1px 1px 0 #fff;
	}

	.style3 {
		background-color: #f4f4f4;
		text-shadow: 1px 1px 0 #fff;
	}

	.style4 {
		background-color: #ececec;
		text-shadow: 1px 1px 0 #fff;
	}

	.style5 {
		background-color: #303030;
		color: #999;
		text-shadow: -1px -1px 0 #181818;
	}

	@include for-tablet-portrait-up {
		.wrapper {
			--horizontal-padding: 2rem;
			// For some reason the scroll takes us 8 pixels above the expected on no-mobile screens.
			scroll-margin-top: calc(var(--vertical-padding) + 8px);
		}

		.wrapper:last-of-type {
			padding-bottom: 5rem;
		}

		.reduced-bleed {
			// Form should get 80% of the width of the rest of the sections.
			max-width: min(80%, calc(1200px * 0.8));
		}
	}
</style>
