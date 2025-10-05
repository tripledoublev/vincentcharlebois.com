<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import DarkModeSwitch from 'svelte-dark-mode-toggle';

	const colorTheme = writable('dark');
	const darkSide = writable(false);

	function useDarkSide() {
		onMount(() => {
			if (typeof window !== 'undefined') {
				const currentTheme = localStorage.getItem('theme') || 'light';
				colorTheme.set(currentTheme);
				darkSide.set(currentTheme === 'dark');
			}
		});

		colorTheme.subscribe((value) => {
			if (typeof window !== 'undefined') {
				localStorage.setItem('theme', value);
				document.documentElement.setAttribute('data-theme', value);
			}
		});

		return [colorTheme, darkSide];
	}

	const [theme, darkMode] = useDarkSide();

	function toggleDarkMode() {
		const isDark = !$darkMode;
		theme.set(isDark ? 'dark' : 'light');
		darkMode.set(isDark);
	}
</script>

<DarkModeSwitch
	bind:checked={$darkMode}
	on:click={toggleDarkMode}
	size={22}
	darkMode={$darkMode}
	class="pt-2 color-switcher"
/>

<style>
	:global(.color-switcher:focus-visible) {
		outline: 2px dotted var(--text-color);
		outline-offset: 2px;
	}
</style>
