<script>
	import { page } from '$app/stores';
	import { locale } from 'svelte-i18n';
	import { goto } from '$app/navigation';
	import ColorSwitcher from './ColorSwitcher.svelte';
	import Switch from './LangSwitch.svelte';
	import Links from './Links.svelte';

	// Determine the language prefix for links
	$: langPrefix = $locale === 'fr' ? '/fr' : '/en';

	// Check if we're on the homepage
	$: isHomepage = $page.url.pathname === langPrefix || $page.url.pathname === `${langPrefix}/`;

	let isFadingOut = false;

	function handleHomeClick(event) {
		// Only intercept if we're NOT on the homepage (i.e., we need to fade out)
		if (!isHomepage) {
			event.preventDefault();
			isFadingOut = true;

			// Wait for fade-out animation to complete (500ms), then navigate
			setTimeout(() => {
				isFadingOut = false;
				goto(langPrefix);
			}, 100);
		}
	}
</script>

<nav class="w-full py-6 md:py-10">
	<div
		class="container mx-auto flex flex-wrap flex-col sm:flex-row items-center justify-around md:justify-between px-6 relative"
	>
		<!-- Desktop name link - always visible, underlined on homepage -->
		<div class="h1-container order-1 items-center z-20">
			<a
				href={langPrefix}
				on:click={handleHomeClick}
				class="home-link"
				class:active={isHomepage}
				class:fade-out={isFadingOut}
			>
				<span class="site-title">vincent charlebois</span>
			</a>
		</div>
		<div
			class="relative lg:absolute order-2 md-order-4 inset-0 flex flex-wrap justify-center items-baseline"
		>
			<Links {langPrefix} />
		</div>
		<div class="order-3 flex items-center justify-center z-10" style="gap: 1.5rem;">
			<!-- Mobile V button - always visible, underlined on homepage -->
			<button
				class="mobile-home-link my-1 text-lg lg:text-2xl font-bold"
				class:active={isHomepage}
				on:click={handleHomeClick}
				aria-label="Go to homepage"
			>
				v?
			</button>
			<div class="my-1 flex items-center gap-6">
				<ColorSwitcher />
				<Switch />
			</div>
		</div>
	</div>
</nav>

<style>
	/* Home link styles */
	.home-link {
		text-decoration: none;
		color: inherit;
		transition: opacity 0.2s ease;
	}

	.home-link.active {
		text-decoration-line: underline;
		text-decoration-thickness: 1px;
		text-decoration-color: var(--text-color);
		text-underline-offset: 0.4rem;
		text-decoration-skip-ink: none;
	}

	.home-link.active:hover {
		text-decoration-thickness: 2px;
	}

	.home-link:focus-visible {
		outline: 2px dotted var(--text-color);
		outline-offset: 2px;
	}
	.site-title {
		display: block;
		padding: 0.35rem 0.5rem;
		padding-bottom: 0.45rem;
		font-weight: 700;
		font-size: 1.15rem;
		letter-spacing: -0.02em;
	}

	.fade-out {
		animation: fadeOut 0.5s ease-out forwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	.mobile-home-link.active,
	.mobile-home-link:hover {
		text-decoration: underline;
	}

	.mobile-home-link:focus-visible {
		outline: 2px dotted var(--text-color);
		outline-offset: 2px;
	}

	/* Hide on desktop, show on mobile */
	@media (min-width: 768px) {
		.mobile-home-link {
			display: none !important;
		}
	}

	/* Show on mobile, hide on desktop */
	@media (max-width: 767px) {
		.mobile-home-link {
			display: flex !important;
		}
	}
	.h1-container {
		display: flex;
	}
	@media (max-width: 767px) {
		.h1-container {
			display: none;
		}
	}
</style>
