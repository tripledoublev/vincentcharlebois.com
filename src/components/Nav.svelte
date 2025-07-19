<script>
	import { page } from '$app/stores';
	import { locale } from 'svelte-i18n';
	import ColorSwitcher from './ColorSwitcher.svelte';
	import Switch from './LangSwitch.svelte';
	import Links from './Links.svelte';

	// Determine the language prefix for links
	$: langPrefix = $locale === 'fr' ? '/fr' : '/en';
</script>

<nav class="w-full px-2 py-3">
	<div
		class="container mx-auto flex flex-wrap flex-col sm:flex-row items-center justify-around md:justify-between px-2 relative"
	>
		<div class="hidden md:flex order-1 items-center lg:ml-12 z-20">
			<a
				href={langPrefix}
				class:active={$page.url.pathname === langPrefix || $page.url.pathname === `${langPrefix}/`}
			>
				<h1>vincent charlebois</h1>
			</a>
		</div>
		<div class="order-3 flex items-center z-10 lg:mr-12">
			<div class="my-1 mx-3">
				<Switch />
			</div>
			<div class="my-1 mx-3">
				<ColorSwitcher />
			</div>
		</div>
		<div
			class="relative lg:absolute order-2 md-order-4 inset-0 flex flex-wrap justify-center items-center"
		>
			<Links {langPrefix} />
		</div>
	</div>
</nav>

<style>
	.active {
		text-decoration: underline;
	}
	h1 {
		padding: 0.25rem 0.86rem;
		padding-bottom: 0.35rem;
	}
</style>
