<script>
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';
	import SEO from '$components/SEO.svelte';
	import Markdown from '$components/Markdown.svelte';

	const seo = {
		title: 'Contact | Vincent Charlebois',
		description:
			'Get in touch with Vincent Charlebois, software developer and artist-researcher. Find links to GitHub, CV and more.'
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
			'%c4.2 Social and Professional Networks: Platforms and Protocols',
			'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;'
		);
		console.log(
			'%c\nHis presence spans conventional platforms (Instagram @ffforests, X for "words" @vincencharleboi and "images" @vncntxyz) and open, protocol-based networks (Bluesky on the AT Protocol, Mastodon and Pixelfed on ActivityPub). This dual presence is an active practice of engaging with different technological and ideological systems of communication, directly reflecting themes of decentralization.\n',
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
	<div class="m-2 px-4 md:m-6 md:px-8 text-left">
		<Markdown content={$t('contact_A')} className="markdown" />
	</div>
</main>
