<script lang="ts">
	import { env } from '$env/dynamic/public';

	let formError: 'captcha' | 'submission' | null = $state(null);
	let submitted = $state(false);

	function handleSubmit(event: Event) {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		const hcaptcha = formData.get('h-captcha-response');

		if (!hcaptcha) {
			formError = 'captcha';
			return;
		}

		fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: formData
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					formError = null;
				} else {
					formError = 'submission';
					throw Error('Form submission failed');
				}
			})
			.catch((e) => {
				formError = 'submission';
				throw e;
			})
			.finally(() => {
				submitted = true;
				form.reset();
			});
	}
</script>

<svelte:head>
	<script src="https://web3forms.com/client/script.js" async defer></script>
</svelte:head>

{#snippet inputwithlabel(
	label: string,
	name: string,
	type: string = 'text',
	required: boolean = false
)}
	<div class="mb-4">
		<label for={name}>{label}:</label>
		<input {name} id={name} {type} {required} />
	</div>
{/snippet}

{#if submitted}
	<div class="p-4">
		{#if formError === 'submission'}
			<span class="text-red-700">
				Error: Please try refreshing the page and try submitting again.
			</span>
		{:else}
			<span class="text-green-700">
				Your message has been sent! I will get back to you as soon as possible.
			</span>
		{/if}
	</div>
{:else}
	<form onsubmit={handleSubmit} class="p-8">
		<h2 class="mb-8 text-3xl font-bold">Send me a message</h2>
		<input type="hidden" name="access_key" value={env.PUBLIC_WEB3FORMS_ACCESS_KEY} />

		{@render inputwithlabel('Name', 'name', 'text', true)}
		{@render inputwithlabel('Email', 'email', 'email', true)}
		<label for="message">Message</label>
		<textarea
			name="message"
			id="message"
			required
			class="mb-2 min-h-3xl w-full p-0 border-0 border-b size-fit"></textarea>

		<div class="mb-2 flex flex-col gap-2">
			{#if formError === 'captcha'}
				<span class="grow text-red-700">Please complete the captcha</span>
			{/if}
			<div class="h-captcha" data-captcha="true"></div>
		</div>
		<button type="submit" class="cursor-pointer hover:border-b my-2">Send Message</button>
	</form>
{/if}
