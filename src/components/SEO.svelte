<script>
	// Import page store for current URL
	import { page } from '$app/stores';
	import { siteUrl } from '$lib/seo.js';

	export let image = '';
	export let title = '';
	export let description = '';
	export let currentUrl = '';
	export let schema = [];

	$: derivedUrl = currentUrl || `${siteUrl}${$page.url.pathname}`;
	$: derivedImage =
		image ||
		($page.url.pathname.startsWith('/en/')
			? `${siteUrl}/vincent-charlebois-point-com-en.png`
			: $page.url.pathname.startsWith('/fr/')
				? `${siteUrl}/vincent-charlebois-point-com-fr.png`
				: `${siteUrl}/vincent-charlebois-point-com.jpg`);
	$: schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

	const langMap = {
		'/en/': '/fr/',
		'/en/about/': '/fr/a-propos/',
		'/en/projects/': '/fr/projets/',
		'/en/contact/': '/fr/contact/',
		'/fr/': '/en/',
		'/fr/a-propos/': '/en/about/',
		'/fr/projets/': '/en/projects/',
		'/fr/contact/': '/en/contact/'
	};
	$: altLang = langMap[$page.url.pathname] ?? null;
	$: isEn = $page.url.pathname.startsWith('/en/');
	$: isFr = $page.url.pathname.startsWith('/fr/');
</script>

<svelte:head>
	<!-- Basic metadata -->
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- OpenGraph/Facebook -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={derivedUrl} />
	<meta property="og:image" content={derivedImage} />

	<!-- Twitter -->
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={derivedUrl} />
	<meta property="twitter:image" content={derivedImage} />

	<!-- Canonical URL -->
	<link rel="canonical" href={derivedUrl} />

	<!-- hreflang for bilingual structure -->
	{#if isEn}
		<link rel="alternate" hreflang="en" href={derivedUrl} />
		{#if altLang}<link rel="alternate" hreflang="fr" href="{siteUrl}{altLang}" />{/if}
		<link rel="alternate" hreflang="x-default" href={derivedUrl} />
	{:else if isFr}
		<link rel="alternate" hreflang="fr" href={derivedUrl} />
		{#if altLang}<link rel="alternate" hreflang="en" href="{siteUrl}{altLang}" />{/if}
		<link rel="alternate" hreflang="x-default" href="{siteUrl}{altLang ?? '/en/'}" />
	{/if}

	{#each schemas as schemaEntry}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html '<script type="application/ld+json">' + JSON.stringify(schemaEntry) + '<' + '/script>'}
	{/each}
</svelte:head>
