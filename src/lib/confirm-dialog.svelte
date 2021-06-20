<script>
	import { fade } from 'svelte/transition';

	export let isDialogOpen;
	export let onConfirm;

	function handleConfirm() {
		isDialogOpen = false;
		onConfirm();
	}
</script>

{#if isDialogOpen}
	<div class="confirm-dialog" transition:fade>
		<div class="dialog-container wrapper style2">
			<p>Are you sure you want to send the message?</p>
			<div class="actions">
				<button type="button" id="send-button" on:click={handleConfirm}>Confirm</button>
				<button
					type="button"
					id="cancel-button"
					class="alt"
					on:click={() => (isDialogOpen = false)}
				>
					Cancel
				</button>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.confirm-dialog {
		position: fixed;
		inset: 0;

		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(56, 56, 56, 0.7);
	}

	.dialog-container {
		align-items: center;
		background-image: url('/images/granular_bg.png');
		box-shadow: inset 0 1px 0 0 rgb(0 0 0 / 5%), inset 0 2px 3px 0 rgb(0 0 0 / 10%);
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 2em 2em;
		text-align: center;
		//Replicating style2 wrapper (see index.svelte)
		background-color: #fafafa;
		text-shadow: 1px 1px 0 #fff;
	}

	.actions {
		margin-top: 1em;
	}

	.actions,
	button {
		min-width: 100%;
	}

	.actions > button + button {
		margin-top: 0.8em;
	}
</style>
