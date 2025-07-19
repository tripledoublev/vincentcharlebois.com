<script>
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	import DOMPurify from 'dompurify';

	export let content = '';
	export let className = '';

	let htmlContent = '';

	onMount(() => {
		console.log('Markdown content:', content); // Debug log

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
			htmlContent = DOMPurify.sanitize(rawHtml);
			console.log('Rendered HTML:', htmlContent); // Debug log
		} catch (error) {
			console.error('Error rendering markdown:', error);
			htmlContent = content; // Fallback to raw content
		}
	});

	// Update content when it changes
	$: if (content) {
		try {
			const rawHtml = marked(content);
			htmlContent = DOMPurify.sanitize(rawHtml);
		} catch (error) {
			console.error('Error rendering markdown:', error);
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
		text-decoration: underline;
		color: inherit;
	}
	:global(.markdown a:hover) {
		font-weight: bold;
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
</style>
