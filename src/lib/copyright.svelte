<div class="copyright">
	<div>Made by Eduardo Sanz Martín</div>
	<div>
		Design:
		<a href="http://html5up.net" rel="noopener noreferer" target="_blank">HTML5 UP</a>
	</div>
</div>

<style lang="scss">
	@import '../styles/breakpoints.scss';

	.copyright {
		display: flex;
		justify-content: center;
		flex-direction: column;
		color: var(--main-grey);
		margin-top: 1em;
		// In order to have a small vertical line separator using border-left when side-by-side.
		line-height: 1;

		> * + * {
			margin-top: 0.8em;
		}
	}

	a {
		color: inherit;
	}

	@include for-tablet-portrait-up {
		.copyright {
			flex-direction: row;
			margin-top: 2em;

			> * + * {
				margin-top: 0;
				margin-left: 1em;
				padding-left: 1em;
				border-left: 1px solid var(--main-grey);
			}
		}
	}
</style>
