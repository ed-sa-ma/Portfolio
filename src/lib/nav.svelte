<nav id="nav">
	<ul class="container">
		<li><a href="#top">Top</a></li>
		<li><a href="#skills">Skills</a></li>
		<li><a href="#portfolio">Portfolio</a></li>
		<li><a href="#reviews">Reviews</a></li>
		<li><a href="#contact">Contact</a></li>
		<li><a href="#social">Social</a></li>
	</ul>
</nav>
<div class="placeholder" />

<style lang="scss">
	@import '../styles/breakpoints.scss';
	@import '../styles/mixins.scss';

	nav {
		background-color: var(--main-black);
		text-align: center;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 10000;
		cursor: default;
		height: 3.5em;
		line-height: 3.5em;
	}

	ul {
		margin-bottom: 0;
		list-style: none;
		padding-left: 0;
	}

	li {
		display: inline-block;
		padding-left: 0;
	}

	a {
		position: relative;
		display: block;
		text-decoration: none;
		outline: 0;
		font-weight: 600;
		border-radius: 8px;
		color: var(--main-white);
		height: 2.5em;
		line-height: 2.5em;
		padding: 0 1.25em;
		transition: background-color 0.2s ease-in-out;
		@include button-focus-outline(var(--main-white));

		&:hover {
			color: var(--main-white);
			background: var(--hover-black);
		}

		&:active {
			background: var(--active-black);
		}
	}

	.placeholder {
		width: 100%;
		height: 3.5em;
	}

	@include for-phone-only {
		nav {
			height: 44px;
			line-height: 44px;

			a {
				padding: 0 0.75em;
				height: inherit;
				line-height: inherit;
				border-radius: 0;

				&:hover {
					background-color: transparent;
				}
			}
		}
	}
</style>
