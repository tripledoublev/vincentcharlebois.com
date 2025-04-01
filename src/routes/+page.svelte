<script>
	import { t } from 'svelte-i18n';
	import SEO from '$components/SEO.svelte';
	import Waves from '../components/Waves.svelte';

	$: title = `\Vincent Charlebois — ${$t('basic_title')}`;
	$: description = $t('meta.description');
</script>

<SEO title={title} description={description} />
<main class="flex flex-col place-items-center justify-center overflow-hidden w-full min-h-[75vh] mt-12 md:mt-24"> 
	<div class="flex md:hidden items-center lg:ml-12 z-20 mb-32">
			<h1 class="text-center">vincent charlebois</h1>
	</div>

	
	<h2 class="italic">
		{$t('basic_title')}
	</h2>

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