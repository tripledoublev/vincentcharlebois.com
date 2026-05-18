<script>
	import { t } from 'svelte-i18n';
	import { page } from '$app/stores';

	// Accept the language prefix from the parent component
	export let langPrefix = '/en';

	// Get localized URL slugs
	$: aboutSlug = $t('url_slugs.about');
	$: projectsSlug = $t('url_slugs.projects');
	$: contactSlug = $t('url_slugs.contact');

	// Construct full paths
	$: aboutPath = `${langPrefix}/${aboutSlug}`;
	$: projectsPath = `${langPrefix}/${projectsSlug}`;
	$: contactPath = `${langPrefix}/${contactSlug}`;
</script>

<div class="flex justify-end">
	<div class="md:flex flex-grow items-center justify-center lg:justify-end z-50">
		<ul class="flex md:flex-row list-none gap-2 md:gap-6">
			<a
				href={aboutPath}
				class="nav-link link-first flex items-center lowercase leading-snug"
				class:active={$page.url.pathname.includes(aboutSlug)}
			>
				<li class="nav-item flex-auto">
					<span class="nav-item-label">{$t('linkabout')}</span>
				</li>
			</a>

			<a
				href={projectsPath}
				class="nav-link link-middle flex items-center lowercase leading-snug"
				class:active={$page.url.pathname.includes(projectsSlug)}
			>
				<li class="nav-item flex-auto">
					<span class="nav-item-label">{$t('linkprojects')}</span>
				</li>
			</a>

			<a
				href={contactPath}
				class="nav-link link-last flex items-center lowercase leading-snug"
				class:active={$page.url.pathname.includes(contactSlug)}
			>
				<li class="nav-item flex-auto">
					<span class="nav-item-label">{$t('linkcontact')}</span>
				</li>
			</a>
		</ul>
	</div>
</div>

<style>
	li {
		padding: 0.35rem 0.8rem;
		padding-bottom: 0.45rem;
		transition: all 0.2s ease;
	}

	.nav-link {
		font-size: var(--fs-sm);
	}

	.nav-item-label {
		font-weight: 500;
		letter-spacing: var(--tracking-tight);
	}

	/* Equal width for mobile alignment */
	@media (max-width: 767px) {
		a {
			flex: 1;
			justify-content: center;
			min-width: 0;
		}
		li {
			text-align: center;
			padding-left: 0.5rem;
			padding-right: 0.5rem;
			white-space: nowrap;
		}
	}

	.active {
		text-decoration-line: underline;
		text-decoration-thickness: 1px;
		text-decoration-color: var(--text-color);
		text-underline-offset: 0.4rem;
		text-decoration-skip-ink: none;
	}
	.active:hover {
		text-decoration-thickness: 2px;
	}
	a:focus-visible {
		outline: 2px dotted var(--text-color);
		outline-offset: 2px;
	}
</style>
