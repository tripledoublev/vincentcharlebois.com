<script>
	import { t } from 'svelte-i18n';
	import SEO from '$components/SEO.svelte';
	import Markdown from '$components/Markdown.svelte';
	import { buildBreadcrumbSchema } from '$lib/seo.js';

	$: description = $t('about.description');
	$: title = `{$t('linkabout')} Vincent Charlebois`;
	const schema = buildBreadcrumbSchema([
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' }
	]);
</script>

<SEO {title} {description} {schema} />

<main id="main-content" class="flex flex-col place-items-center justify-center min-h-[75vh]">
	<Markdown content={$t('about')} className="m-2 px-4 md:m-6 md:px-8 text-left markdown" />
</main>
