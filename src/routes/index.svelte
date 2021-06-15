<script context="module">
	export async function load({ fetch }) {
		try {
			let res = await fetch('/cms/content').then((r) => r.json());

			return {
				status: 200,
				props: res
			};
		} catch (err) {
			console.error(err);
			return {
				status: 500,
				body: JSON.stringify({ error: err.message })
			};
		}
	}
</script>

<script>
	import Head from '$lib/head.svelte';
	import Nav from '$lib/nav.svelte';

	export let res;
</script>

<Head />
<Nav />
<pre>{JSON.stringify(res, null, 2)}</pre>
