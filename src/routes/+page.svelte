<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import SEO from '$components/SEO.svelte';
	import Waves from '../components/Waves.svelte';

	export let data;

	onMount(() => {
		if (browser) {
			const userLang = navigator.language || navigator.userLanguage;
			if (userLang.startsWith('fr')) {
				goto('/fr');
			} else {
				goto('/en');
			}
		}
	});
</script>

<SEO 
	title="Vincent Charlebois"
	description="Vincent Charlebois; intermedia artist, software developer and member of Hypha Worker Co-operative."
	currentUrl={data.url}
/>

<main class="flex flex-col place-items-center justify-center overflow-hidden w-full min-h-[75vh] mt-12 md:mt-24"> 
	<div class="flex md:hidden items-center lg:ml-12 z-20 mb-32">
			<h1 class="text-center">vincent charlebois</h1>
	</div>

	<Waves />
</main>

<style>
	h1 {
		font-size: 1.75rem;
	}
	@media (min-width: 568px) {
		h1 {
			font-size: 2.5rem;
		}
	}
	main {
		height: 80vh;
	}
</style>