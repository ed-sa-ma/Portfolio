<script>
	import { getContext } from 'svelte';
	import Grid from '$lib/grid.svelte';
	import SectionLayout from '$lib/section-layout.svelte';
	import SkillTile from '$lib/skill-tile.svelte';

	let data = getContext('content');
	let { skills } = $data;
</script>

<SectionLayout
	title={skills.title}
	description={skills.description}
	button={{ text: skills['button_text'], link: '#portfolio' }}
	note={skills.note}
>
	{#if skills.items.length}
		<Grid>
			{#each skills.items as skill (skill['inline_icon'])}
				<SkillTile
					inlineIcon={skill['inline_icon']}
					title={skill['skill_title']}
					description={skill['skill_description']}
				/>
			{/each}
		</Grid>
	{/if}
</SectionLayout>
