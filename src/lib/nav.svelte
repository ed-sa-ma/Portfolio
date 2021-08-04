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
		height: var(--nav-height);
		line-height: var(--nav-height);
	}

	ul {
		margin-bottom: 0;
		list-style: none;
		padding-left: 0;
		white-space: nowrap;
		overflow-x: auto;
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
		height: 2.5rem;
		line-height: 2.5rem;
		padding: 0 1.25rem;
		transition: background-color 0.2s ease-in-out;
		@include button-focus-outline(var(--main-white));

		@media (hover: hover) {
			&:hover {
				color: var(--main-white);
				background: var(--hover-black);
			}
		}

		&:active {
			background: var(--active-black);
		}
	}

	.placeholder {
		width: 100%;
		height: var(--nav-height);
	}

	@include for-phone-only {
		nav {
			a {
				padding: 0 0.75rem;
				height: inherit;
				line-height: inherit;
				border-radius: 0;
			}
		}
	}
</style>
