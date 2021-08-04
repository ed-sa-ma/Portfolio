<div class="loader">
	<div class="ball first" />
	<div class="ball second" />
	<div class="ball third" />
</div>

<style lang="scss">
	.loader {
		--ball-size: 0.25rem;

		position: absolute;
		inset: 0;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: calc(var(--ball-size) * 3);
	}

	.ball {
		width: var(--ball-size);
		height: var(--ball-size);
		border-radius: 50%;
		background-color: var(--main-white);
		animation: 1s ease-in-out 0s infinite alternate none running grow;

		@keyframes grow {
			0% {
				transform: scale(1);
			}
			100% {
				transform: scale(3);
			}
		}

		&.second {
			animation-delay: 0.3s;
		}

		&.third {
			animation-delay: 0.6s;
		}
	}
</style>
