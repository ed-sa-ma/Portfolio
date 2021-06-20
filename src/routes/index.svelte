<script context="module">
	import { getMainPageProps } from '$lib/helpers.js';

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

<article id="top" class="wrapper style1">
	<Heading />
</article>
<article id="skills" class="wrapper style2">
	<Skills />
</article>
<article id="portfolio" class="wrapper style3">
	<Portfolio />
</article>
<article id="reviews" class="wrapper style4">
	<Reviews />
</article>
<article id="contact" class="wrapper style5">
	<Contact />
</article>

<style>
	.wrapper {
		align-items: center;
		background-image: url('/images/granular_bg.png');
		box-shadow: inset 0 1px 0 0 rgb(0 0 0 / 5%), inset 0 2px 3px 0 rgb(0 0 0 / 10%);
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: calc(100vh - var(--nav-height));
		min-width: 100vw;
		padding: 3em 1em;
		text-align: center;
	}

	.style1 {
		background-color: var(--main-red);
		background-image: linear-gradient(var(--main-red), var(--main-red-dark));
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

	:global(.style5 h2, .style5 h3) {
		color: var(--main-white);
	}
</style>
