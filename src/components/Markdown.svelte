<script>
	import { onDestroy, onMount } from 'svelte';

	export let content = '';
	export let className = '';
	export let copyPortfolioLabel = 'Copy Markdown portfolio URL';
	export let copiedPortfolioLabel = 'Copied Markdown portfolio URL';
	export let copyPortfolioUrl = 'https://www.vincentcharlebois.com/portfolio.md';

	let htmlContent = '';
	let parseMarkdown;
	let copyResetTimer;

	function escapeAttribute(value) {
		return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
	}

	async function copyText(value) {
		if (navigator.clipboard?.writeText) {
			await navigator.clipboard.writeText(value);
			return;
		}

		const textarea = document.createElement('textarea');
		textarea.value = value;
		textarea.setAttribute('readonly', '');
		textarea.style.position = 'fixed';
		textarea.style.top = '-9999px';
		document.body.appendChild(textarea);
		textarea.select();
		const didCopy = document.execCommand('copy');
		document.body.removeChild(textarea);

		if (!didCopy) {
			throw new Error('Copy command failed');
		}
	}

	async function handleClick(event) {
		if (!(event.target instanceof Element)) {
			return;
		}

		const button = event.target.closest('button[data-copy-url]');

		if (!button) {
			return;
		}

		event.preventDefault();
		event.stopPropagation();

		const copyUrl = button.dataset.copyUrl;

		if (!copyUrl) {
			return;
		}

		try {
			await copyText(copyUrl);
			button.dataset.copied = 'true';
			button.setAttribute('aria-label', copiedPortfolioLabel);
			button.setAttribute('title', copiedPortfolioLabel);
			clearTimeout(copyResetTimer);
			copyResetTimer = setTimeout(() => {
				button.dataset.copied = 'false';
				button.setAttribute('aria-label', copyPortfolioLabel);
				button.setAttribute('title', copyPortfolioLabel);
			}, 1800);
		} catch {
			button.dataset.copied = 'false';
		}
	}

	function copyButtonActions(node) {
		node.addEventListener('click', handleClick);

		return {
			destroy() {
				node.removeEventListener('click', handleClick);
			}
		};
	}

	onMount(async () => {
		const [{ marked }, { default: DOMPurify }] = await Promise.all([
			import('marked'),
			import('dompurify')
		]);

		parseMarkdown = (mdContent, copyLabel = copyPortfolioLabel, copyUrl = copyPortfolioUrl) => {
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
					/(<code>portfolio\.md<\/code>)/g,
					`$1 <button type="button" class="copy-link-button" data-copy-url="${escapeAttribute(
						copyUrl
					)}" aria-label="${escapeAttribute(
						copyLabel
					)}" title="${escapeAttribute(copyLabel)}"><span class="copy-link-icon" aria-hidden="true"></span></button>`
				);
				return DOMPurify.sanitize(processedHtml, {
					ADD_TAGS: ['button', 'span'],
					ADD_ATTR: [
						'target',
						'class',
						'type',
						'data-copy-url',
						'aria-label',
						'title',
						'aria-hidden'
					]
				});
			} catch {
				return mdContent;
			}
		};

		if (content) {
			htmlContent = parseMarkdown(content, copyPortfolioLabel, copyPortfolioUrl);
		}
	});

	$: if (content && parseMarkdown) {
		htmlContent = parseMarkdown(content, copyPortfolioLabel, copyPortfolioUrl);
	}

	onDestroy(() => {
		clearTimeout(copyResetTimer);
	});
</script>

<div class={className} use:copyButtonActions>
	{@html htmlContent}
</div>

<style>
	:global(.markdown) {
		font-size: var(--fs-base);
		line-height: var(--leading-body);
		text-wrap: pretty;
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
	:global(.markdown em) {
		font-style: italic;
		opacity: 0.9;
	}
	:global(.markdown strong) {
		font-weight: 600;
	}
	:global(.markdown code) {
		font-family: var(--font-mono);
		font-size: 0.92em;
	}
	:global(.markdown p) {
		margin-bottom: 1.5rem;
		max-width: 38rem;
	}
	:global(.markdown a:focus-visible) {
		outline: 2px dotted var(--text-color);
		outline-offset: 2px;
	}
	:global(.markdown .copy-link-button) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.35rem;
		height: 1.35rem;
		margin-left: 0.18rem;
		padding: 0;
		vertical-align: -0.2rem;
		color: inherit;
		background: transparent;
		border: 0;
		cursor: pointer;
		opacity: 0.62;
		transition:
			opacity 0.18s ease,
			color 0.18s ease;
	}
	:global(.markdown .copy-link-button:hover),
	:global(.markdown .copy-link-button:focus-visible) {
		opacity: 1;
	}
	:global(.markdown .copy-link-button:focus-visible) {
		outline: 2px dotted var(--text-color);
		outline-offset: 0.2rem;
	}
	:global(.markdown .copy-link-icon) {
		position: relative;
		display: block;
		width: 0.82rem;
		height: 0.9rem;
	}
	:global(.markdown .copy-link-icon::before),
	:global(.markdown .copy-link-icon::after) {
		position: absolute;
		width: 0.48rem;
		height: 0.62rem;
		content: '';
		border: 1.5px solid currentColor;
		border-radius: 0.08rem;
	}
	:global(.markdown .copy-link-icon::before) {
		top: 0.05rem;
		left: 0.22rem;
		background-color: transparent;
	}
	:global(.markdown .copy-link-icon::after) {
		top: 0.22rem;
		left: 0.06rem;
		opacity: 0.7;
	}
	:global(.markdown .copy-link-button[data-copied='true']) {
		opacity: 1;
	}
	:global(.markdown .copy-link-button[data-copied='true'] .copy-link-icon::before) {
		top: 0;
		left: 0.28rem;
		width: 0.34rem;
		height: 0.72rem;
		background-color: transparent;
		border-top: 0;
		border-left: 0;
		border-radius: 0;
		transform: rotate(45deg);
	}
	:global(.markdown .copy-link-button[data-copied='true'] .copy-link-icon::after) {
		opacity: 0;
	}
</style>
