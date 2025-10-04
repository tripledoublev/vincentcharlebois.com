<script>
	import { onMount } from 'svelte';
	import { initializePortal } from '$lib/portal.js';
	import SEO from '$components/SEO.svelte';

	function addNewPortal() {
		initializePortal();
	}

	onMount(() => {
		initializePortal();
	});

	const seo = {
		title: 'Portal | Vincent Charlebois',
		description: 'Art of No Likes web portal'
	};
</script>

<SEO {...seo} />

<main id="main-content" class="flex flex-col place-items-center justify-center min-h-[75vh]">
	<div class="px-5 text-center">
		<ul class="flex flex-row flex-wrap">
			<button class="portal-button" on:click={addNewPortal}>
				<li class="py-2">portal</li>
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
