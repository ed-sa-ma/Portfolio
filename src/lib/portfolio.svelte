<script>
	import { getContext } from 'svelte';
	import Grid from '$lib/grid.svelte';
	import ProjectTile from '$lib/project-tile.svelte';
	import SectionLayout from '$lib/section-layout.svelte';

	let data = getContext('content');
	let { projects } = $data;
</script>

<SectionLayout
	button={{ text: projects['button_text'], link: '#reviews' }}
	description={projects.description}
	note={projects.note}
	title={projects.title}
>
	{#if projects.items.length}
		<Grid --max-width="400px">
			{#each projects.items as project (project['project_image'].url)}
				<ProjectTile
					title={project['project_title']}
					description={project['project_description']}
					image={project['project_image']}
					link={project['project_link']}
				/>
			{/each}
		</Grid>
	{/if}
</SectionLayout>
