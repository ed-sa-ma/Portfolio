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
		margin-top: 1rem;
		// In order to have a small vertical line separator using border-left when side-by-side.
		line-height: 1;
		gap: 0.8rem;
	}

	a {
		color: inherit;
	}

	@include for-tablet-portrait-up {
		.copyright {
			flex-direction: row;
			margin-top: 2rem;
			gap: 0;

			// Simulate a vertical bar separating from the element to the left.
			> * + * {
				margin-left: 1rem;
				padding-left: 1rem;
				border-left: 1px solid var(--main-grey);
			}
		}
	}
</style>
