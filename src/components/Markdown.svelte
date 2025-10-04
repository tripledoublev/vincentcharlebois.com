<script>
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	import DOMPurify from 'dompurify';

	export let content = '';
	export let className = '';

	let htmlContent = '';

	onMount(() => {
		// Configure marked options
		marked.setOptions({
			breaks: true, // Convert line breaks to <br>
			gfm: true, // GitHub Flavored Markdown
			headerIds: false, // Don't add IDs to headers
			mangle: false, // Don't escape HTML
			sanitize: false // Allow HTML
		});

		try {
			// Convert markdown to HTML and sanitize it
			const rawHtml = marked(content);
			// Post-process to add target="_blank" to all links and class for vincentcharlebois.net
			let processedHtml = rawHtml.replace(
				/<a href="([^"]*)"([^>]*)>/g,
				'<a href="$1"$2 target="_blank" rel="noopener noreferrer">'
			);
			processedHtml = processedHtml.replace(
				/<a href="https:\/\/vincentcharlebois\.net"([^>]*)>/g,
				'<a href="https://vincentcharlebois.net"$1 class="green-link">'
			);
			htmlContent = DOMPurify.sanitize(processedHtml, { ADD_ATTR: ['target', 'class'] });
		} catch (error) {
			// Error rendering markdown
			htmlContent = content; // Fallback to raw content
		}
	});

	// Update content when it changes
	$: if (content) {
		try {
			// Configure marked options
			marked.setOptions({
				breaks: true,
				gfm: true,
				headerIds: false,
				mangle: false,
				sanitize: false
			});

			const rawHtml = marked(content);
			// Post-process to add target="_blank" to all links and class for vincentcharlebois.net
			let processedHtml = rawHtml.replace(
				/<a href="([^"]*)"([^>]*)>/g,
				'<a href="$1"$2 target="_blank" rel="noopener noreferrer">'
			);
			processedHtml = processedHtml.replace(
				/<a href="https:\/\/vincentcharlebois\.net"([^>]*)>/g,
				'<a href="https://vincentcharlebois.net"$1 class="green-link">'
			);
			htmlContent = DOMPurify.sanitize(processedHtml, { ADD_ATTR: ['target', 'class'] });
		} catch (error) {
			// Error rendering markdown
			htmlContent = content;
		}
	}
</script>

<div class={className}>
	{@html htmlContent}
</div>

<style>
	:global(.markdown) {
		line-height: 1.6;
	}
	:global(.markdown a) {
		text-decoration-line: underline;
		text-decoration-style: dashed;
		text-decoration-thickness: 2px;
		text-decoration-color: #9900fc;
		color: inherit;
		font-weight: bold;
	}
	:global(.markdown a:hover) {
		font-weight: bold;
		text-decoration-thickness: 3px;
	}
	:global(.markdown a.green-link) {
		text-decoration-color: #00ff00;
	}
	:global(.markdown em) {
		font-style: italic;
	}
	:global(.markdown strong) {
		font-weight: bold;
	}
	:global(.markdown p) {
		margin-bottom: 1em;
	}
	:global(.markdown a:focus-visible) {
		outline: 2px dotted var(--text-color);
		outline-offset: 2px;
	}
</style>
