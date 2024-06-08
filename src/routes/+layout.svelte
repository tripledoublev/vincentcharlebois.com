<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Nav from '$components/Nav.svelte';
	import { locale } from 'svelte-i18n';
	import '../app.css';
	import { initializeI18n, loadTranslations } from '$lib/i18n.js';

	let loading = true;

	initializeI18n();
	console.log('Initializing i18n...');

	onMount(async () => {
		await loadTranslations();
		loading = false;
	});

	$: locale.set($locale || 'en');
</script>

{#if !loading}
	<div transition:fade={{ delay: 250, duration: 250 }}>
		<Nav />
		<slot />
	</div>
{/if}
