<script>
	import { locale } from 'svelte-i18n';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	// URL slug mappings for translation
	const urlMappings = {
		// When switching from English to French
		en_to_fr: {
			about: 'a-propos',
			projects: 'projets',
			contact: 'contact',
			portal: 'portail'
		},
		// When switching from French to English
		fr_to_en: {
			'a-propos': 'about',
			projets: 'projects',
			contact: 'contact',
			portail: 'portal'
		}
	};

	// Determine which language we're currently using based on the URL path
	$: currentPathLang = $page.url.pathname.startsWith('/fr') ? 'fr' : 'en';

	// Make sure locale matches the path language
	$: if (currentPathLang !== $locale) {
		locale.set(currentPathLang);
	}

	function switchLanguage() {
		// Get the current path
		const currentPath = $page.url.pathname;
		let newPath;

		// Determine which language we're switching to
		const currentLang = currentPathLang;
		const newLang = currentLang === 'fr' ? 'en' : 'fr';

		// Set the new locale
		locale.set(newLang);

		// Handle the root path
		if (currentPath === '/fr' || currentPath === '/fr/') {
			newPath = '/en';
		} else if (currentPath === '/en' || currentPath === '/en/') {
			newPath = '/fr';
		} else {
			// For other paths, translate the URL segments
			const pathSegments = currentPath.split('/').filter((segment) => segment);

			// The first segment should be the language code
			if (pathSegments.length > 1) {
				const langPrefix = pathSegments[0];
				const currentSlug = pathSegments[1];

				// Determine which mapping to use based on current language
				const mapping = langPrefix === 'en' ? urlMappings.en_to_fr : urlMappings.fr_to_en;

				// Translate the slug if a mapping exists
				const newSlug = mapping[currentSlug] || currentSlug;

				// Replace the language code and slug
				pathSegments[0] = newLang;
				pathSegments[1] = newSlug;

				// Reconstruct the path
				newPath = '/' + pathSegments.join('/');
			} else {
				// Fallback to the root of the new language
				newPath = '/' + newLang;
			}
		}

		// Navigate to the new path
		goto(newPath);
	}
</script>

<button
	class="text-lg lg:text-2xl font-bold hover:font-black"
	type="button"
	on:click={switchLanguage}
>
	{currentPathLang === 'fr' ? 'en' : 'fr'}
</button>

<style>
	button:hover {
		text-decoration: underline;
	}
</style>
