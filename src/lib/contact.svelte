<script>
	import { getContext } from 'svelte';
	import Form from '$lib/form.svelte';
	import SectionLayout from '$lib/section-layout.svelte';

	let data = getContext('content');
	let { form } = $data;
</script>

<SectionLayout title={form.title} description={form.description}>
	<Form />
</SectionLayout>
