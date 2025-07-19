<script>
	import SEO from '$components/SEO.svelte';
	import Waves from '../../components/Waves.svelte';

	export let data;
</script>

<SEO {...data.seo} />

<main
	class="flex flex-col place-items-center justify-center overflow-hidden w-full min-h-[75vh] mt-12 md:mt-24"
>
	<div class="flex md:hidden items-center lg:ml-12 z-20 mb-32">
		<h1 class="text-center">vincent charlebois</h1>
	</div>

	<h2 class="italic">Ecologies, technologies;</h2>

	<Waves basicText="environmental data perceptualization and regenerative interactions" />
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
