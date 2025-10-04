<script>
	import { tick } from 'svelte';
	import SEO from '$components/SEO.svelte';

	export let data;

	let publicKey = `
-----BEGIN PGP PUBLIC KEY BLOCK-----

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
=U/CU
-----END PGP PUBLIC KEY BLOCK-----
    `;

	let showCopyMessage = false;

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(publicKey);
			showCopyMessage = true;
			await tick();
			setTimeout(() => {
				showCopyMessage = false;
			}, 2000);
		} catch (err) {
			// Could not copy text
		}
	}

	function saveAsFile() {
		const blob = new Blob([publicKey], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'vincent_charlebois_public_key.asc';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}
</script>

<SEO {...data.seo} />

<main class="flex flex-col place-items-center justify-center min-h-[75vh]">
	<div class="flex flex-col flex-wrap md:flex-row mt-2 md:mt-12">
		<button on:click={saveAsFile} class="text-sm font-medium download">Save as .asc file</button>

		<button on:click={copyToClipboard} class="text-sm font-medium download">
			{#if showCopyMessage}
				Copied to clipboard!
			{:else}
				Copy to clipboard
			{/if}
		</button>
	</div>
	<button on:click={copyToClipboard} class="text-sm font-medium mt-12">
		<pre>
            {publicKey}
        </pre>
	</button>
</main>

<style>
	button.download {
		border: 2px solid var(--text-color);
		padding: 1.75rem;
		margin: 0.45rem;
	}
	button.download:hover {
		background-color: var(--text-color);
		color: var(--background-color);
	}
</style>
