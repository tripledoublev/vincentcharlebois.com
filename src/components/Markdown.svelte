<script>
	import { onMount } from 'svelte';

	export let content = '';
	export let className = '';

	let htmlContent = '';
	let parseMarkdown;

	onMount(async () => {
		const [{ marked }, { default: DOMPurify }] = await Promise.all([
			import('marked'),
			import('dompurify')
		]);

		parseMarkdown = (mdContent) => {
			marked.setOptions({
				breaks: true,
				gfm: true,
				headerIds: false,
				mangle: false,
				sanitize: false
			});

			try {
				const rawHtml = marked(mdContent);
				let processedHtml = rawHtml.replace(
					/<a href="([^"]*)"([^>]*)>/g,
					'<a href="$1"$2 target="_blank" rel="noopener noreferrer">'
				);
				processedHtml = processedHtml.replace(
					/<a href="https:\/\/vincentcharlebois\.net"([^>]*)>/g,
					'<a href="https://vincentcharlebois.net"$1 class="green-link">'
				);
				processedHtml = processedHtml.replace(
					/<a href="(https:\/\/hypha\.coop[^"]*)"([^>]*)>/g,
					'<a href="$1"$2 class="purple-link">'
				);
				return DOMPurify.sanitize(processedHtml, { ADD_ATTR: ['target', 'class'] });
			} catch {
				return mdContent;
			}
		};

		if (content) {
			htmlContent = parseMarkdown(content);
		}
	});

	$: if (content && parseMarkdown) {
		htmlContent = parseMarkdown(content);
	}
</script>

<div class={className}>
	{@html htmlContent}
</div>

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
	:global(.markdown a.green-link) {
		text-decoration-color: #00ff00;
	}
	:global(.markdown a.purple-link) {
		text-decoration-color: #9900fc;
	}
	:global(.markdown em) {
		font-style: italic;
		opacity: 0.9;
	}
	:global(.markdown strong) {
		font-weight: 700;
	}
	:global(.markdown p) {
		margin-bottom: 1.5rem;
	}
	:global(.markdown a:focus-visible) {
		outline: 2px dotted var(--text-color);
		outline-offset: 2px;
	}
</style>
