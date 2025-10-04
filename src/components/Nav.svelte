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

<nav class="w-full py-3">
	<div
		class="container mx-auto flex flex-wrap flex-col sm:flex-row items-center justify-around md:justify-between px-2 relative"
	>
		<!-- Desktop name link - always visible, underlined on homepage -->
		<div class="h1-container order-1 items-center lg:ml-12 z-20">
			<a
				href={langPrefix}
				on:click={handleHomeClick}
				class="home-link"
				class:active={isHomepage}
				class:fade-out={isFadingOut}
			>
				<h1>vincent charlebois</h1>
			</a>
		</div>
		<div
			class="relative lg:absolute order-2 md-order-4 inset-0 flex flex-wrap justify-center items-center"
		>
			<Links {langPrefix} />
		</div>
		<div class="order-3 flex items-center justify-center z-10 lg:mr-12" style="gap: 0.75rem;">
			<!-- Mobile V button - always visible, underlined on homepage -->
			<button
				class="mobile-home-link my-1 text-lg lg:text-2xl font-bold"
				class:active={isHomepage}
				on:click={handleHomeClick}
				aria-label="Go to homepage"
			>
				v?
			</button>
			<div class="my-1">
				<ColorSwitcher />
			</div>
			<div class="my-1">
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
	}

	.home-link.active {
		text-decoration-line: underline;
		text-decoration-thickness: 2px;
		text-decoration-color: white;
		text-decoration-skip-ink: none;
	}

	.home-link.active:hover {
		text-decoration-thickness: 3px;
		text-decoration-color: var(--text-color);
	}

	.home-link:focus-visible {
		outline: 2px dotted var(--text-color);
		outline-offset: 2px;
	}
	h1 {
		padding: 0.25rem 0.86rem;
		padding-bottom: 0.35rem;
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

	.mobile-home-link {
		height: 2rem;
		border-radius: 50%;
		background-color: var(--background-color);
		color: var(--text-color);
		border: 2px solid var(--background-color);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
		transition: all 0.3s ease;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.mobile-home-link.active {
		text-decoration: underline;
	}

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
