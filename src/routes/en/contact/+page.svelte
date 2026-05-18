<script>
	import { onMount } from 'svelte';
	import SEO from '$components/SEO.svelte';

	const seo = {
		title: 'Contact | Vincent Charlebois',
		description:
			'Get in touch with Vincent Charlebois — AI systems architect and research-to-product translator. Find links to GitHub, LinkedIn, CV and more.'
	};

	onMount(() => {
		// Shadow content
		console.log(
			'%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
			'color: #ffffff; font-weight: bold;'
		);
		console.log(
			'%cPart 4: Vincent Online',
			'color: #ffffff; font-size: 18px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;'
		);
		console.log(
			'%cDigital Presence and Networks',
			'color: #ffffff; font-size: 14px; font-style: italic; margin-bottom: 10px;'
		);
		console.log(
			'%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
			'color: #ffffff; font-weight: bold;'
		);
		console.log(
			'%c\nVincent Charlebois maintains an extensive and deliberately curated digital footprint that functions as a distributed extension of his artistic practice. His online presence is a carefully constructed, multi-faceted architecture that performs the very themes of networks, systems, and dematerialized exchange central to his work.\n',
			'color: #ffffff; line-height: 1.6;'
		);
		console.log(
			'%c4.1 The Digital Studio: A Network of Websites',
			'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;'
		);
		console.log(
			'%c\nInstead of a single monolithic website, Charlebois employs a network of personal domains: vincentcharlebois.com (portfolio), vincentcharlebois.net (artist statement), vincent.charlebois.info (biographical), and charlebois.solutions (central hub). This multi-domain strategy suggests deliberate compartmentalization and curation of his online identity.\n',
			'color: #ffffff; line-height: 1.6;'
		);
		console.log(
			'%c4.2 Social and Professional Networks: A Web2/Web3 Bridge',
			'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;'
		);
		console.log(
			'%c\nHis presence spans conventional platforms (LinkedIn, Instagram @ffforests, X for "words" @vincencharleboi and "images" @vncntxyz) and decentralized Web3 networks (Bluesky, Mastodon, Pixelfed, Farcaster). This dual presence is an active practice of engaging with different technological and ideological systems of communication, directly reflecting themes of decentralization.\n',
			'color: #ffffff; line-height: 1.6;'
		);
		console.log(
			'%c4.3 Archival Presence and Digital Art Platforms',
			'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;'
		);
		console.log(
			'%c\nHis works are archived in the prestigious Rhizome ArtBase (New Museum, NY), ensuring long-term preservation and historical contextualization of his born-digital work. He engages with digital art economies through Sedition Art and Foundation (NFTs), exploring novel economic models and community structures emerging around blockchain technology.\n',
			'color: #ffffff; line-height: 1.6;'
		);
		console.log(
			'%c━━━ Conclusion ━━━',
			'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 20px; text-align: center;'
		);
		console.log(
			'%c\nVincent Charlebois emerges as a significant contemporary artist whose work is born from a deep, lived engagement with both nature and technology. By bridging cyberarts and ecological science, and grounding his technological explorations in physical labor and a cooperative ethos, he has forged a unique practice that speaks directly to the challenges and possibilities of the 21st century.\n',
			'color: #ffffff; line-height: 1.6;'
		);
		console.log(
			'%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
			'color: #ffffff; font-weight: bold;'
		);
	});
</script>

<SEO {...seo} />

<main id="main-content" class="flex flex-col place-items-center justify-center min-h-[75vh]">
	<div class="px-5 text-center">
		<p class="text-2xl text-left px-5 pt-7 pb-7 mb-1 w-80">Links:</p>
		<ul class="flex flex-row flex-wrap">
			<a
				class="text-sm font-medium contact-links"
				target="_blank"
				href="https://github.com/tripledoublev"
			>
				<li class="py-2">github</li>
			</a>
			<a class="text-sm font-medium contact-links" target="_blank" href="https://hypha.coop/">
				<li class="py-2">hypha.coop</li>
			</a>
			<a
				class="text-sm font-medium contact-links"
				target="_blank"
				rel="noreferrer"
				href="https://tripledoublev.github.io/CV/"
			>
				<li class="py-2">CV</li>
			</a>
			<a
				class="text-sm font-medium contact-links"
				target="_blank"
				href="mailto:vincent@charlebois.info"
			>
				<li class="py-2">email</li>
			</a>
			<a
				class="text-sm font-medium contact-links"
				target="_blank"
				href="https://www.linkedin.com/in/vincent-charlebois/"
			>
				<li class="py-2">linkedin</li>
			</a>
			<a
				class="text-sm font-medium contact-links"
				target="_blank"
				href="https://bsky.app/profile/charlebois.info"
			>
				<li class="py-2">bluesky</li>
			</a>
		</ul>
	</div>
</main>

<style>
	main {
		padding-block: clamp(3rem, 8vh, 6rem);
	}

	div {
		width: min(100%, 42rem);
	}

	p {
		font-family: var(--mono-font);
		color: var(--muted);
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	ul {
		align-items: center;
		justify-content: flex-start;
		gap: 0.7rem;
		padding: 0;
		margin: 0;
	}

	a {
		display: block;
		color: inherit;
		text-decoration: none;
	}

	a:focus-visible {
		outline: 2px dotted var(--text-color);
		outline-offset: 0.25rem;
	}

	li:not(:first-child) {
		margin-left: 0;
	}

	li {
		border: 1px solid var(--line);
		border-radius: 2px;
		margin: 0;
		padding: 0.7rem 0.95rem;
		background: var(--surface);
		font-family: var(--mono-font);
		letter-spacing: 0;
		transition:
			background-color 0.2s ease,
			border-color 0.2s ease,
			color 0.2s ease;
	}

	a:hover li,
	a:focus-visible li {
		background-color: var(--text-color);
		border-color: var(--text-color);
		color: var(--background-color);
	}
</style>
