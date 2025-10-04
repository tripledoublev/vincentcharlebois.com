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
		<ul class="flex md:flex-row list-none">
			<a
				href={aboutPath}
				class="px-1 flex flex-grow items-center text-lg md:text-xl lowercase font-bold leading-snug"
				class:active={$page.url.pathname.includes(aboutSlug)}
			>
				<li class="nav-item flex-auto">
					{$t('linkabout')}
				</li>
			</a>

			<a
				href={projectsPath}
				class="px-1 flex items-center text-lg md:text-xl lowercase font-bold leading-snug"
				class:active={$page.url.pathname.includes(projectsSlug)}
			>
				<li class="nav-item flex-auto">
					{$t('linkprojects')}
				</li>
			</a>

			<a
				href={contactPath}
				class="px-1 flex items-center text-lg md:text-xl lowercase font-bold leading-snug"
				class:active={$page.url.pathname.includes(contactSlug)}
			>
				<li class="nav-item flex-auto">
					{$t('linkcontact')}
				</li>
			</a>
		</ul>
	</div>
</div>

<style>
	li {
		padding: 0.25rem 0.99rem;
		padding-bottom: 0.35rem;
	}
	.active {
		text-decoration-line: underline;
		text-decoration-thickness: 2px;
		text-decoration-color: white;
		text-underline-offset: 0.3rem;
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
</style>
