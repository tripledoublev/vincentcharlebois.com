<script>
	import { page } from '$app/stores';
	import ColorSwitcher from './ColorSwitcher.svelte';
	import Switch from './LangSwitch.svelte';
	import Links from './Links.svelte';
</script>

<nav class="w-full px-2 py-3">
	<div
		class="container mx-auto flex flex-wrap items-center justify-around md:justify-between px-2 relative"
	>
		<div class="order-1 flex items-center lg:ml-12 z-20">
			<a href="/" class:active={$page.url.pathname === '/'}>
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
		<div class="relative lg:absolute order-3 inset-0 flex justify-center items-center">
			<Links />
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
