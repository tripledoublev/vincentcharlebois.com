<script>
	import { onMount, onDestroy } from 'svelte';
	import { beforeNavigate } from '$app/navigation';
	import { initializePortal } from '$lib/portal.js';
	import SEO from '$components/SEO.svelte';

	function addNewPortal() {
		initializePortal();
	}

	function clearAllPortals() {
		// Remove all portal elements from the page
		const portals = document.querySelectorAll('body > div:not([style*="display: contents"])');
		portals.forEach(portal => {
			// Check if this div contains portal elements (iframe, img with arrow/question/close icons)
			if (portal.querySelector('iframe, img[src*="arrow"], img[src*="question"], img[src*="close"]')) {
				portal.remove();
			}
		});
	}

	onMount(() => {
		initializePortal();
	});

	beforeNavigate(() => {
		clearAllPortals();
	});

	onDestroy(() => {
		clearAllPortals();
	});

	const seo = {
		title: 'Portail | Vincent Charlebois',
		description: 'Portail Art of No Likes'
	};
</script>

<SEO {...seo} />

<main id="main-content" class="flex flex-col place-items-center justify-center min-h-[75vh]">
	<div class="px-5 text-center">
		<ul class="flex flex-row flex-wrap">
			<button class="portal-button" on:click={addNewPortal}>
				<li class="py-2">ouvrir un portail</li>
			</button>
		</ul>
	</div>
</main>

<style>
	.portal-button {
		background: transparent;
		border: none;
		padding: 0;
		margin: 0;
		cursor: pointer;
		font: inherit;
		color: inherit;
	}
	li {
		border: 2px solid var(--text-color);
		padding: 0.75rem 1rem;
		margin: 0.35rem;
	}
</style>
