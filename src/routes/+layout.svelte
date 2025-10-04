<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Nav from '$components/Nav.svelte';
	import { locale } from 'svelte-i18n';
	import '../app.css';
	import { initializeI18n, loadTranslations } from '$lib/i18n.js';

	let loading = true;

	initializeI18n();

	// When locale changes, update the html lang attribute
	$: if (typeof document !== 'undefined' && $locale) {
		document.documentElement.setAttribute('lang', $locale);
	}

	onMount(async () => {
		await loadTranslations();
		loading = false;
	});

	$: locale.set($locale || 'en');
</script>

{#if !loading}
	<div transition:fade={{ delay: 250, duration: 250 }}>
		<a href="#main-content" class="skip-to-main">Skip to main content</a>
		<div class="nav-wrapper">
			<Nav />
		</div>
		<slot />
	</div>
{/if}

<style>
	.skip-to-main {
		position: fixed;
		left: -9999px;
		z-index: 9999;
		padding: 0.5em 1em;
		background-color: var(--bg-color);
		color: var(--text-color);
		text-decoration: none;
		font-weight: bold;
		border: 2px solid var(--text-color);
		transition: left 0.3s ease-in-out;
	}

	.skip-to-main:focus {
		left: 1em;
		top: 0.5em;
		outline: 2px dotted var(--text-color);
		outline-offset: 2px;
	}

	.nav-wrapper {
		margin-top: 0;
		transition: margin-top 0.3s ease-in-out;
	}

	.skip-to-main:focus ~ .nav-wrapper {
		margin-top: 3em;
	}
</style>
