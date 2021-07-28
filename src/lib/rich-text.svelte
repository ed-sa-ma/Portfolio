<script>
	import PrismicDOM from 'prismic-dom';
	import { linkResolver } from '$lib/prismic';

	export let text;
	$: html = PrismicDOM.RichText.asHtml(text, linkResolver);
</script>

{@html html}
