<script>
	import { page } from '$app/stores';
	import ColorSwitcher from './ColorSwitcher.svelte';
	import Switch from './LangSwitch.svelte';
	import Links from './Links.svelte';
</script>

<nav class="w-full flex-row flex-wrap items-center px-2 py-3">
	<div
		class="flex md:flex-row container justify-between px-2 mx-auto flex-wrap items-center content-around"
	>
		<div class="order-3 my-1 lg:mx-[5vw] items-center">
			<Switch />
		</div>
		<div class="order-1 my-1 lg:mx-[5vw] items-center">
			<ColorSwitcher />
		</div>
		<div
			class="order-4 lg:order-2 w-full lg:mx-[5vw] lg:mr-12 relative flex lg:w-auto lg:static lg:block lg:justify-end justify-center"
		>
			<Links />
		</div>
		<div
			class="order-2 lg:order-5 lg:mx-[5vw] lg:ml-12 relative flex lg:w-auto lg:static lg:block lg:justify-start justify-center"
		>
			<a href="/" class:active={$page.url.pathname === '/'}>
				<h1>vincent charlebois</h1>
			</a>
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
