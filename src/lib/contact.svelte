<script>
	import { getContext } from 'svelte';
	import Form from '$lib/form.svelte';
	import SectionLayout from '$lib/section-layout.svelte';
	import RichText from './rich-text.svelte';

	let data = getContext('content');
	let { form } = $data;
</script>

<SectionLayout title={form.title} description={form.description}>
	<Form />
</SectionLayout>
<hr />
<div id="social" class="social">
	<RichText text={form['social_title']} />
	<ul class="social-icons">
		{#each form.items as social}
			<li>
				<a
					href={social['social_link']}
					target="_blank"
					rel="noopener noreferer"
					title={social.media}
					style="background-color: {social['logo_color']}"
				>
					{@html social['social_logo']}
				</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	@import '../styles/breakpoints.scss';

	hr {
		width: 100%;
		border: 0;
		border-top: 1px solid rgba(0, 0, 0, 0.35);
		box-shadow: 0 1px 0 0 hsl(0deg 0% 100% / 10%);
		margin-top: 2em;
	}

	.social {
		margin-top: 2em;
	}

	ul.social-icons {
		list-style: none;
		padding: 0;
		margin: 0;

		li {
			margin: 0.3em;
			display: inline-block;
		}

		a {
			position: relative;
			top: 0;

			transition: top 0.2s ease-in-out;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 48px;
			height: 48px;
			border-radius: 7px;

			&:before {
				position: absolute;
				top: 0;
				left: 0;
				content: '';
				transition: background-color 0.2s ease-in-out;
				background-color: transparent;
				display: block;
				height: 48px;
				width: 48px;
				border-radius: 6px;
			}

			&:hover {
				top: -5px;

				&:before {
					background-color: transparent;
				}
			}
		}
	}

	@media (hover: hover) {
		ul.social-icons a:before {
			background-color: #444;
		}
	}

	:global(ul.social-icons svg) {
		position: relative;
		height: 28px;
		color: #2e2e2e;
	}
</style>
