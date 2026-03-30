<script>
	// Import page store for current URL
	import { page } from '$app/stores';

	export let image = '';
	export let title = '';
	export let description = '';
	export let currentUrl = '';
	export let schema = [];

	// Determine the current URL and appropriate image based on language
	$: currentUrl = currentUrl || `https://vincentcharlebois.com${$page.url.pathname}`;
	$: {
		if (!image) {
			if ($page.url.pathname.startsWith('/en/')) {
				image = 'https://vincentcharlebois.com/vincent-charlebois-point-com-en.png';
			} else if ($page.url.pathname.startsWith('/fr/')) {
				image = 'https://vincentcharlebois.com/vincent-charlebois-point-com-fr.png';
			} else {
				image = 'https://vincentcharlebois.com/vincent-charlebois-point-com.jpg';
			}
		}
	}
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
	const base = 'https://vincentcharlebois.com';
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
	<meta property="og:url" content={currentUrl} />
	<meta property="og:image" content={image} />

	<!-- Twitter -->
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={currentUrl} />
	<meta property="twitter:image" content={image} />

	<!-- Canonical URL -->
	<link rel="canonical" href={currentUrl} />

	<!-- hreflang for bilingual structure -->
	{#if isEn}
		<link rel="alternate" hreflang="en" href={currentUrl} />
		{#if altLang}<link rel="alternate" hreflang="fr" href="{base}{altLang}" />{/if}
		<link rel="alternate" hreflang="x-default" href={currentUrl} />
	{:else if isFr}
		<link rel="alternate" hreflang="fr" href={currentUrl} />
		{#if altLang}<link rel="alternate" hreflang="en" href="{base}{altLang}" />{/if}
		<link rel="alternate" hreflang="x-default" href="{base}{altLang ?? '/en/'}" />
	{/if}

	{#each schemas as schemaEntry}
		<script type="application/ld+json">
			{JSON.stringify(schemaEntry)}
		</script>
	{/each}
</svelte:head>
