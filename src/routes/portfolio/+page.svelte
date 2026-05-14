<script>
	import SEO from '$components/SEO.svelte';
	import portfolio from '$lib/content/portfolio.md?raw';
	import { buildBreadcrumbSchema } from '$lib/seo.js';
	import { marked } from 'marked';

	const title = 'Portfolio — Vincent Charlebois';
	const description =
		'Selected work by Vincent Charlebois across web art, UX, and agentic interaction design.';
	const portfolioBody = portfolio.replace(/^---[\s\S]*?---\s*/, '');
	const portfolioHtml = marked.parse(portfolioBody, {
		breaks: true,
		gfm: true,
		headerIds: false,
		mangle: false
	});
	const schema = buildBreadcrumbSchema([
		{ name: 'Home', path: '/' },
		{ name: 'Portfolio', path: '/portfolio' }
	]);
</script>

<SEO {title} {description} {schema} />

<main id="main-content" class="flex min-h-[75vh] flex-col justify-center">
	<div class="markdown m-2 px-4 text-left md:m-6 md:px-8">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html portfolioHtml}
	</div>
</main>

<style>
	:global(.markdown) {
		line-height: 1.75;
		font-size: 1.1rem;
	}
	:global(.markdown a) {
		text-decoration-line: underline;
		text-decoration-style: solid;
		text-decoration-thickness: 1px;
		text-decoration-color: color-mix(in srgb, var(--text-color) 30%, transparent);
		text-underline-offset: 0.25rem;
		color: inherit;
		font-weight: 600;
		transition: text-decoration-color 0.2s ease;
	}
	:global(.markdown a:hover) {
		text-decoration-color: var(--text-color);
		text-decoration-thickness: 3px;
	}
	:global(.markdown a:focus-visible) {
		outline: 2px dotted var(--text-color);
		outline-offset: 2px;
	}
	:global(.markdown h1),
	:global(.markdown h2),
	:global(.markdown h3) {
		font-weight: 700;
		line-height: 1.2;
		margin: 2.5rem 0 1rem;
	}
	:global(.markdown h1) {
		font-size: clamp(2rem, 8vw, 4rem);
		margin-top: 0;
	}
	:global(.markdown h2) {
		font-size: 1.65rem;
	}
	:global(.markdown h3) {
		font-size: 1.25rem;
	}
	:global(.markdown p) {
		margin-bottom: 1.5rem;
	}
	:global(.markdown ul) {
		list-style: disc;
		margin: 0 0 1.5rem 1.5rem;
	}
	:global(.markdown li) {
		padding-left: 0.25rem;
		margin-bottom: 0.35rem;
	}
	:global(.markdown strong) {
		font-weight: 700;
	}
</style>
