<script>
	import { onMount } from 'svelte';

	let darkMode = false;

	function setTheme(isDark, persist = true) {
		const value = isDark ? 'dark' : 'light';

		darkMode = isDark;
		document.documentElement.setAttribute('data-theme', value);

		if (persist) {
			localStorage.setItem('theme', value);
		}
	}

	onMount(() => {
		const currentTheme =
			localStorage.getItem('theme') ||
			document.documentElement.getAttribute('data-theme') ||
			'light';

		setTheme(currentTheme === 'dark', false);
	});

	function toggleDarkMode() {
		setTheme(!darkMode);
	}

	$: themeToggleLabel = darkMode ? 'Switch to light theme' : 'Switch to dark theme';
</script>

<button
	type="button"
	class="color-switcher"
	aria-label={themeToggleLabel}
	aria-pressed={darkMode}
	title={themeToggleLabel}
	on:click={toggleDarkMode}
>
	<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
		<circle class="ring" cx="12" cy="12" r="6.5" />
		<circle class="dot" class:visible={darkMode} cx="12" cy="12" r="2.5" />
	</svg>
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
		opacity: 0.62;
		transition:
			opacity 0.18s ease,
			color var(--theme-transition-duration) var(--theme-transition-easing);
	}

	.color-switcher:hover {
		opacity: 1;
	}

	.color-switcher:focus-visible {
		outline: 2px dotted var(--text-color);
		outline-offset: 0.3rem;
	}

	.ring {
		fill: none;
		stroke: currentColor;
		stroke-width: 1.35;
	}

	.dot {
		fill: currentColor;
		opacity: 0;
		transform: scale(0.7);
		transform-origin: center;
		transform-box: fill-box;
		transition:
			opacity 0.22s var(--theme-transition-easing),
			transform 0.22s var(--theme-transition-easing);
	}

	.dot.visible {
		opacity: 1;
		transform: scale(1);
	}
</style>
