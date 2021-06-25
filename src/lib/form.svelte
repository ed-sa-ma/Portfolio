<script>
	import ConfirmDialog from './confirm-dialog.svelte';
	import { scale } from 'svelte/transition';
	import Loader from './loader.svelte';

	let isDialogOpen = false;
	let formData;
	let formSubmition;

	function openDialog() {
		isDialogOpen = true;
	}

	function closeDialog() {
		isDialogOpen = false;
	}

	function handleSubmit(event) {
		let form = event.target;
		let isValid = form.checkValidity();
		formData = new FormData(form);

		if (isValid) openDialog();
	}

	function sendMessage() {
		// Submit form to Netlify: https://docs.netlify.com/forms/setup/#submit-html-forms-with-ajax
		formSubmition = fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString()
		});

		formData = null;
	}

	// Handler for dialog open. Submits with "Enter" and closes with "Escape".
	async function handleKeyDown(event) {
		if (event.key === 'Escape' || event.key === 'Enter') closeDialog();
		if (event.key === 'Enter') sendMessage();
	}

	function handleFirstFocus(event) {
		let element = event.target;

		element.classList.add('already-focused');
	}
</script>

<svelte:head>
	{#if isDialogOpen}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>
<svelte:window on:keydown={isDialogOpen ? handleKeyDown : null} />

<div class="form-wrapper">
	<form
		name="contact-form"
		class:submitted={formSubmition}
		netlify
		on:submit|preventDefault={handleSubmit}
	>
		<div class="name-email">
			<label for="name">Name*:</label>
			<input
				class="name-input"
				type="text"
				name="name"
				id="name"
				required
				on:focus|once={handleFirstFocus}
			/>
			<label class="email-label" for="email">Email*:</label>
			<input
				type="email"
				name="email"
				id="email"
				required
				title="user@emaildomain.com"
				pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$"
				on:focus|once={handleFirstFocus}
			/>
		</div>
		<label for="subject">Subject:</label>
		<input type="text" name="subject" id="subject" />
		<label for="message">Message*:</label>
		<textarea name="message" id="message" required on:focus|once={handleFirstFocus} />
		<div class="actions">
			<button type="submit">Send Message</button>
			<button type="reset" class="alt">Clear Form</button>
		</div>
		<ConfirmDialog bind:isDialogOpen onConfirm={sendMessage} />
	</form>
	{#if formSubmition}
		<div class="form-submition" in:scale={{ delay: 300 }}>
			{#await formSubmition}
				<Loader />
			{:then}
				<div class="gratitude-message">
					<h3>Thanks for your message!</h3>
				</div>
			{:catch}
				<i class="error-message">
					Something went wrong sending your message! Please let me know using the social media links
					below
				</i>
			{/await}
		</div>
	{/if}
</div>

<style lang="scss">
	@import '../styles/breakpoints.scss';

	.form-wrapper {
		position: relative;
	}

	form {
		transition: opacity 0.3s ease-in-out;

		&.submitted {
			opacity: 0;
		}
	}

	.form-submition {
		position: absolute;
		inset: 0;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	input,
	textarea {
		appearance: none;
		background-color: #282828;
		border-radius: 8px;
		border: none;
		box-shadow: inset 0 2px 3px 1px rgb(0 0 0 / 5%), 0 1px 0 0 hsl(0deg 0% 100% / 3%);
		color: var(--main-white);
		display: block;
		font-family: inherit;
		font-size: 1em;
		font-weight: 300;
		line-height: 1.85em;
		padding: 0.75em;
		transition: background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
		width: 100%;

		&:focus {
			background-color: var(--focus-black);
			box-shadow: inset 0px 2px 5px 0px rgba(0, 0, 0, 0.05),
				0px 1px 0px 0px rgba(255, 255, 255, 0.025), inset 0px 0px 2px 1px var(--active-blue);
			outline: none;
		}

		// Small hack to style inputs when navigator's autocomplete is chosen.
		&:-webkit-autofill,
		&:-webkit-autofill:focus {
			-webkit-box-shadow: 0 0 0px 1000px var(--focus-black) inset;
			box-shadow: 0 0 0px 1000px var(--focus-black) inset;
			-webkit-text-fill-color: var(--main-white);
			caret-color: var(--main-white);
			border: 1px solid var(--main-blue);
		}
	}

	// We don't want the red shadow for invalid by default. We wait until after the first focus.
	:global(input.already-focused:not(:focus):invalid, textarea.already-focused:not(:focus):invalid) {
		box-shadow: inset 0px 2px 5px 0px rgba(0, 0, 0, 0.05),
			0px 1px 0px 0px rgba(255, 255, 255, 0.025), inset 0px 0px 2px 1px var(--main-red);
		outline: none;
	}

	textarea {
		height: 15em;
	}

	label {
		color: #fff;
		font-weight: 700;
		display: block;
		text-align: start;
		margin: 0.8em 0 0.5em;
	}

	.name-email {
		display: grid;
	}

	@include for-tablet-portrait-up {
		.name-email {
			grid-template-columns: 1fr 1fr;
			column-gap: 2em;
		}

		// Re-ordering when the inputs are displayed side by side to have the labels over them.
		.name-input {
			grid-area: 2;
		}
	}

	.actions {
		display: flex;
		flex-direction: column;
		margin-top: 2em;

		> button + button {
			margin-top: 0.8em;
		}
	}

	@include for-tablet-portrait-up {
		.actions {
			flex-direction: row;
			justify-content: center;

			> button + button {
				margin-top: 0;
				margin-left: 0.8em;
			}
		}
	}

	.error-message {
		color: var(--main-red);
		margin-top: 1em;
	}
</style>
