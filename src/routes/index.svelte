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
	import Head from '$lib/head.svelte';
	import Heading from '$lib/heading.svelte';
	import Skills from '$lib/skills.svelte';
	import Nav from '$lib/nav.svelte';

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

<style>
	.wrapper {
		min-height: calc(100vh - var(--nav-height));
		background-image: url('/images/granular_bg.png');
		min-width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 3em 1em;
	}

	.style1 {
		background-color: var(--main-red);
		background-image: linear-gradient(var(--main-red), var(--main-red-dark));
		color: var(--main-white);
	}

	.style2 {
		background-color: #f1f1f1;
		text-shadow: 1px 1px 0 #fff;
	}
</style>
