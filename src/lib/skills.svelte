<script>
	import SkillTile from './skill-tile.svelte';
	import { getContext } from 'svelte';
	import RichText from '$lib/rich-text.svelte';
	import SectionLayout from '$lib/section-layout.svelte';

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
		<div class="skill-grid">
			{#each skills.items as skill (skill['inline_icon'])}
				<div class="skill">
					<SkillTile
						inlineIcon={skill['inline_icon']}
						title={skill['skill_title']}
						description={skill['skill_description']}
					/>
				</div>
			{/each}
		</div>
	{/if}
</SectionLayout>

<style>
	.skill-grid > * + * {
		margin-top: 1em;
	}
</style>
