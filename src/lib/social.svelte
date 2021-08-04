<script>
	import RichText from './rich-text.svelte';

	export let title;
	export let buttons;
</script>

<div id="social" class="social">
	<RichText text={title} />
	<ul class="social-icons">
		{#each buttons as social}
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

	:global(ul.social-icons svg) {
		position: relative;
		height: 1.75rem;
		color: #2e2e2e;
	}

	.social {
		margin-top: 2rem;
	}

	ul.social-icons {
		list-style: none;
		padding: 0;
		margin: 0;

		li {
			margin: 0.3rem; // 4.8px
			display: inline-block;
		}

		a {
			--size: 3rem;
			--border-radius: 0.5rem; // 8px

			position: relative;
			top: 0;

			transition: top 0.2s ease-in-out;
			display: flex;
			justify-content: center;
			align-items: center;
			width: var(--size);
			height: var(--size);
			border-radius: var(--border-radius);

			&:before {
				position: absolute;
				top: 0;
				left: 0;
				content: '';
				transition: background-color 0.2s ease-in-out;
				background-color: transparent;
				display: block;
				align-items: center;
				width: 100%;
				height: 100%;
				// Without this px difference we see the background colors on the corners.
				border-radius: calc(var(--border-radius) - 1px);
			}

			@media (hover: hover) {
				&:hover {
					top: -0.3rem; // -4.8px

					&:before {
						background-color: transparent;
					}
				}
			}
		}
	}

	@media (hover: hover) {
		ul.social-icons a:before {
			background-color: #444;
		}
	}
</style>
