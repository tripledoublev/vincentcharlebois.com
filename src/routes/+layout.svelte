<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Nav from '$components/Nav.svelte';
	import { locale } from 'svelte-i18n';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
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

	// Determine the language prefix for links
	$: langPrefix = $locale === 'fr' ? '/fr' : '/en';
	
	// Check if we're on the homepage
	$: isHomepage = $page.url.pathname === langPrefix || $page.url.pathname === `${langPrefix}/`;

	function handleHomeClick() {
		goto(langPrefix);
	}
</script>

{#if !loading}
	<div transition:fade={{ delay: 250, duration: 250 }}>
		<a href="#main-content" class="skip-to-main">Skip to main content</a>
		<div class="nav-wrapper">
			<Nav />
		</div>
		<slot />
		
		<!-- Mobile home link - bottom left -->
		<button
			class="mobile-home-link"
			class:hidden={isHomepage}
			on:click={handleHomeClick}
			aria-label="Go to homepage"
		>
			v
		</button>
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

	.mobile-home-link {
		position: fixed;
		bottom: 1rem;
		left: 1rem;
		z-index: 50;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		background-color: var(--background-color);
		color: var(--text-color);
		border: 2px solid var(--text-color);
		font-size: 1.25rem;
		font-weight: bold;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
		transition: all 0.3s ease;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.mobile-home-link:hover {
		background-color: var(--text-color);
		color: black;
		transform: scale(1.1);
	}

	.mobile-home-link:focus-visible {
		outline: 2px dotted var(--text-color);
		outline-offset: 2px;
	}

	.hidden {
		display: none;
	}

	/* Hide on desktop */
	@media (min-width: 768px) {
		.mobile-home-link {
			display: none;
		}
	}
</style>
