<script>
	import { t } from 'svelte-i18n';
	import SEO from '$components/SEO.svelte';
	import Markdown from '$components/Markdown.svelte';
	import { buildBreadcrumbSchema } from '$lib/seo.js';
	$: description = $t('projects.description');
	const title = 'Projects — Vincent Charlebois';
	const schema = buildBreadcrumbSchema([
		{ name: 'Home', path: '/' },
		{ name: 'Projects', path: '/projects' }
	]);
</script>

<SEO {title} {description} {schema} />

<main id="main-content" class="flex flex-col place-items-center justify-center min-h-[75vh]">
	<div class="m-2 px-4 md:m-6 md:px-8 text-left">
		<Markdown content={$t('projects_A')} className="markdown" />
	</div>
</main>
