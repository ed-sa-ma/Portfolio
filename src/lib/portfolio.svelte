<script>
	import ProjectTile from '$lib/project-tile.svelte';
	import { getContext } from 'svelte';
	import SectionLayout from './section-layout.svelte';

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
		<div class="project-grid">
			{#each projects.items as project (project['project_image'].url)}
				<div class="project">
					<ProjectTile
						title={project['project_title']}
						description={project['project_description']}
						image={project['project_image']}
					/>
				</div>
			{/each}
		</div>
	{/if}
</SectionLayout>

<style lang="scss">
	.project-grid > * + * {
		margin-top: 1em;
	}
</style>
