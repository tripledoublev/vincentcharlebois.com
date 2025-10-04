<script>
	import { page } from '$app/stores';
	import { locale } from 'svelte-i18n';
	import { goto } from '$app/navigation';
	import ColorSwitcher from './ColorSwitcher.svelte';
	import Switch from './LangSwitch.svelte';
	import Links from './Links.svelte';

	// Determine the language prefix for links
	$: langPrefix = $locale === 'fr' ? '/fr' : '/en';

	let isFadingOut = false;

	function handleH1Click(event) {
		const isHomepage = $page.url.pathname === langPrefix || $page.url.pathname === `${langPrefix}/`;

		// Only intercept if we're NOT on the homepage (i.e., we need to fade out)
		if (!isHomepage) {
			event.preventDefault();
			isFadingOut = true;

			// Wait for fade-out animation to complete (500ms), then navigate
			setTimeout(() => {
				isFadingOut = false;
				goto(langPrefix);
			}, 500);
		}
	}

	// Reset when we arrive at homepage
	$: isHomepage = $page.url.pathname === langPrefix || $page.url.pathname === `${langPrefix}/`;
</script>

<nav class="w-full px-2 py-3">
	<div
		class="container mx-auto flex flex-wrap flex-col sm:flex-row items-center justify-around md:justify-between px-2 relative"
	>
		<div class="hidden md:flex order-1 items-center lg:ml-12 z-20">
			<a
				href={langPrefix}
				on:click={handleH1Click}
				class:active={isHomepage}
				class:visible={!isHomepage && !isFadingOut}
				class:invisible={isHomepage}
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
		<div class="order-3 flex items-center z-10 lg:mr-12">
			<!-- Mobile home link -->
			<button
				class="mobile-home-link my-1 mr-1"
				class:hidden={isHomepage}
				on:click={handleH1Click}
				aria-label="Go to homepage"
			>
				V
			</button>
			<div class="my-1 mx-3">
				<ColorSwitcher />
			</div>
			<div class="my-1 mx-3">
				<Switch />
			</div>
		</div>
	</div>
</nav>

<style>
	.active {
		text-decoration-line: underline;
		text-decoration-thickness: 11.9px;
		text-decoration-color: white;
		text-decoration-skip-ink: none;
	}
	.active:hover {
		text-decoration-thickness: 3px;
		text-decoration-color: var(--text-color);
	}
	a:focus-visible {
		outline: 2px dotted var(--text-color);
		outline-offset: 2px;
	}
	h1 {
		padding: 0.25rem 0.86rem;
		padding-bottom: 0.35rem;
	}

	.visible {
		opacity: 1;
		animation: fadeIn 0.5s ease-in;
	}

	.invisible {
		opacity: 0;
		pointer-events: none;
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
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background-color: var(--background-color);
		color: var(--text-color);
		border: 2px solid var(--background-color);
		font-size: 1rem;
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
