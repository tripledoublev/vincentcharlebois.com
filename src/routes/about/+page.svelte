<script>
	import { t } from 'svelte-i18n';
	import SEO from '$components/SEO.svelte';

	$: description = $t('about.description');
	$: title = `{$t('linkabout')} \Vincent Charlebois`
</script>

<SEO title={title} description={description} />

<main class="flex flex-col place-items-center justify-center min-h-[75vh]">
	<p class="m-2 px-4 md:m-6 md:px-8 text-left">
		{$t('about')}
		<a class="font-extrabold hover:underline rounder-md" href="https://hypha.coop">Hypha</a>
	</p>
</main>
