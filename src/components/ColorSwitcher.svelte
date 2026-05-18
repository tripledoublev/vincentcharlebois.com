<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

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

	$: themeToggleLabel = $darkMode ? 'Switch to light theme' : 'Switch to dark theme';
</script>

<button
	type="button"
	class="color-switcher"
	aria-label={themeToggleLabel}
	aria-pressed={$darkMode}
	title={themeToggleLabel}
	on:click={toggleDarkMode}
>
	{$darkMode ? '●' : '○'}
</button>

<style>
	.color-switcher {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.5rem;
		height: 1.5rem;
		padding: 0;
		border: 0;
		background: transparent;
		color: var(--text-color);
		cursor: pointer;
		font: inherit;
		font-size: var(--fs-md);
		line-height: 1;
		transition:
			background-color var(--theme-transition-duration) var(--theme-transition-easing),
			color var(--theme-transition-duration) var(--theme-transition-easing);
	}

	.color-switcher:hover {
		background-color: var(--text-color);
		color: var(--background-color);
	}

	.color-switcher:focus-visible {
		outline: 2px dotted var(--text-color);
		outline-offset: 2px;
	}
</style>
