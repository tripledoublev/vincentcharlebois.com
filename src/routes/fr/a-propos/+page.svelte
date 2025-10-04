<script>
	import SEO from '$components/SEO.svelte';
	import { t } from 'svelte-i18n';
	import Markdown from '$components/Markdown.svelte';
	import { onMount } from 'svelte';
	export let data;

	let aboutText = '';

	onMount(() => {
		aboutText = $t('about');
	});

	$: if ($t('about')) {
		aboutText = $t('about');
	}
</script>

<SEO {...data.seo} />

<main id="main-content" class="flex flex-col place-items-center justify-center min-h-[75vh]">
	<Markdown content={aboutText} className="m-2 px-4 md:m-6 md:px-8 text-left markdown" />
</main>
