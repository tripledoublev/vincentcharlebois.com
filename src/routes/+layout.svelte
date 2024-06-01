<script>
	import Nav from '$components/Nav.svelte';
	import { locale, init, getLocaleFromNavigator } from 'svelte-i18n';
	import '../app.css';
	import { initializeI18n } from '$lib/i18n.js';

	initializeI18n();
	console.log('Hello from src/lib/index.js!');

	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator()
	});

	$: locale.set($locale || 'en');
</script>

<Nav />
<slot />
