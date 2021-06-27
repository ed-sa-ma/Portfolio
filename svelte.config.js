import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// We disable router to let the browser handle our hash navigations, since they won't produce reloads.
		// If we don't enable it we have a weird navigation the first time the user tries to navigate because SvelteKit
		// intercepts it. See: https://kit.svelte.dev/docs#routing-pages, https://kit.svelte.dev/docs#ssr-and-javascript-router
		router: false
	},
	preprocess: preprocess()
};

export default config;
