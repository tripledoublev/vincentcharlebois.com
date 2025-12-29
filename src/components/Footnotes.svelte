<script>
	export let footnotes = [];
	export let currentFootnote = null;
</script>

{#if currentFootnote && footnotes[currentFootnote]}
	<div class="footnote-container">
		<div class="footnote-content">
			<span class="footnote-number">[{currentFootnote}]</span>
			<div class="footnote-links">
				{#each footnotes[currentFootnote] as link}
					<a href={link.url} target="_blank" rel="noopener noreferrer" class="footnote-link">
						{link.title}
					</a>
				{/each}
			</div>
		</div>
	</div>
{/if}

{#if footnotes && Object.keys(footnotes).length > 0}
	<div class="footnotes-section">
		<h3>References</h3>
		<ol class="footnotes-list">
			{#each Object.entries(footnotes) as [number, links]}
				<li id="footnote-{number}" class="footnote-item">
					<div class="footnote-links-list">
						{#each links as link}
							<a href={link.url} target="_blank" rel="noopener noreferrer" class="footnote-ref-link">
								{link.title}
							</a>
						{/each}
					</div>
				</li>
			{/each}
		</ol>
	</div>
{/if}

<style>
	.footnote-container {
		position: fixed;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		max-width: 90vw;
		width: auto;
		background: var(--bg-color, #ffffff);
		border: 1px solid var(--border-color, #e0e0e0);
		border-radius: 8px;
		padding: 1rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		z-index: 1000;
		animation: slideUp 0.3s ease-out;
	}

	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateX(-50%) translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateX(-50%) translateY(0);
		}
	}

	.footnote-content {
		display: flex;
		gap: 0.5rem;
		align-items: flex-start;
	}

	.footnote-number {
		font-weight: bold;
		color: var(--text-color, #333);
		flex-shrink: 0;
	}

	.footnote-links {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.footnote-link {
		color: var(--link-color, #0066cc);
		text-decoration: none;
		font-size: 0.9rem;
		transition: color 0.2s ease;
	}

	.footnote-link:hover {
		color: var(--link-hover-color, #004499);
		text-decoration: underline;
	}

	.footnotes-section {
		margin-top: 4rem;
		padding: 2rem;
		border-top: 2px solid var(--border-color, #e0e0e0);
	}

	.footnotes-section h3 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: var(--text-color, #333);
	}

	.footnotes-list {
		list-style-position: inside;
		padding-left: 0;
	}

	.footnote-item {
		margin-bottom: 1rem;
		line-height: 1.6;
	}

	.footnote-links-list {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		margin-top: 0.25rem;
	}

	.footnote-ref-link {
		color: var(--link-color, #0066cc);
		text-decoration: none;
		font-size: 0.9rem;
		transition: color 0.2s ease;
		display: inline-block;
	}

	.footnote-ref-link:hover {
		color: var(--link-hover-color, #004499);
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.footnote-container {
			max-width: 95vw;
			padding: 0.75rem;
		}

		.footnotes-section {
			padding: 1rem;
		}
	}
</style>
