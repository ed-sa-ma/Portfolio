<script>
	import { getContext } from 'svelte';
	import Form from '$lib/form.svelte';
	import SectionLayout from '$lib/section-layout.svelte';
	import Social from './social.svelte';

	let data = getContext('content');
	let { form } = $data;
</script>

<SectionLayout title={form.title} description={form.description}>
	<Form />
</SectionLayout>
<hr />
<Social title={form['social_title']} buttons={form.items} />

<style lang="scss">
	hr {
		width: 100%;
		border: 0;
		border-top: 1px solid rgba(0, 0, 0, 0.35);
		box-shadow: 0 1px 0 0 hsl(0deg 0% 100% / 10%);
		margin-top: 2rem;
	}
</style>
