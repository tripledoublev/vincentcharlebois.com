<script>
	import { onMount } from 'svelte';
	import SEO from '$components/SEO.svelte';

	const seo = {
		title: 'Contact | Vincent Charlebois',
		description: 'Get in touch with Vincent Charlebois - intermedia artist, creative technologist, and member of Hypha Worker Co-operative.'
	};

	onMount(() => {
		// Shadow content
		console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #ffffff; font-weight: bold;');
		console.log('%cPart 4: Vincent Online', 'color: #ffffff; font-size: 18px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;');
		console.log('%cDigital Presence and Networks', 'color: #ffffff; font-size: 14px; font-style: italic; margin-bottom: 10px;');
		console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #ffffff; font-weight: bold;');
		console.log('%c\nVincent Charlebois maintains an extensive and deliberately curated digital footprint that functions as a distributed extension of his artistic practice. His online presence is a carefully constructed, multi-faceted architecture that performs the very themes of networks, systems, and dematerialized exchange central to his work.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c4.1 The Digital Studio: A Network of Websites', 'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;');
		console.log('%c\nInstead of a single monolithic website, Charlebois employs a network of personal domains: vincentcharlebois.com (portfolio), vincentcharlebois.net (artist statement), vincent.charlebois.info (biographical), and charlebois.solutions (central hub). This multi-domain strategy suggests deliberate compartmentalization and curation of his online identity.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c4.2 Social and Professional Networks: A Web2/Web3 Bridge', 'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;');
		console.log('%c\nHis presence spans conventional platforms (LinkedIn, Instagram @ffforests, X for "words" @vincencharleboi and "images" @vncntxyz) and decentralized Web3 networks (Bluesky, Mastodon, Pixelfed, Farcaster). This dual presence is an active practice of engaging with different technological and ideological systems of communication, directly reflecting themes of decentralization.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c4.3 Archival Presence and Digital Art Platforms', 'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;');
		console.log('%c\nHis works are archived in the prestigious Rhizome ArtBase (New Museum, NY), ensuring long-term preservation and historical contextualization of his born-digital work. He engages with digital art economies through Sedition Art and Foundation (NFTs), exploring novel economic models and community structures emerging around blockchain technology.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c━━━ Conclusion ━━━', 'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 20px; text-align: center;');
		console.log('%c\nVincent Charlebois emerges as a significant contemporary artist whose work is born from a deep, lived engagement with both nature and technology. By bridging cyberarts and ecological science, and grounding his technological explorations in physical labor and a cooperative ethos, he has forged a unique practice that speaks directly to the challenges and possibilities of the 21st century.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #ffffff; font-weight: bold;');
	});
</script>

<SEO {...seo} />

<main id="main-content" class="flex flex-col place-items-center justify-center min-h-[75vh]">
	<div class="px-5 text-center">
		<p class="text-2xl text-left px-5 pt-7 pb-7 mb-1 w-80">Links:</p>
		<ul class="flex flex-row flex-wrap">
			<a class="text-sm font-medium contact-links" target="_blank" href="https://hypha.coop/">
				<li class="py-2">hypha.coop</li>
			</a>
			<a
				class="text-sm font-medium contact-links"
				target="_blank"
				href="mailto:vincent@charlebois.info"
			>
				<li class="py-2">email</li>
			</a>
			<a class="text-sm font-medium contact-links" href="/publickey">
				<li class="py-2">pgp</li>
			</a>
			<a
				class="text-sm font-medium contact-links"
				target="_blank"
				href="https://github.com/tripledoublev"
			>
				<li class="py-2">github</li>
			</a>
			<a
				class="text-sm font-medium contact-links"
				target="_blank"
				href="https://www.linkedin.com/in/vincent-charlebois/"
			>
				<li class="py-2">linkedin</li>
			</a>
			<a class="text-sm font-medium contact-links" target="_blank" href="https://chateau.social/@v">
				<li class="py-2">mastodon</li>
			</a>
			<a
				class="text-sm font-medium contact-links"
				target="_blank"
				href="https://bsky.app/profile/charlebois.info"
			>
				<li class="py-2">bluesky</li>
			</a>
			<a
				class="text-sm font-medium contact-links"
				target="_blank"
				href="https://www.are.na/vincent-charlebois"
			>
				<li class="py-2">are.na</li>
			</a>
			<a
				class="text-sm font-medium contact-links"
				target="_blank"
				href="https://pinksky.app/profile/couleurs.bsky.social"
			>
				<li class="py-2">pinksky</li>
			</a>
			<a
				class="text-sm font-medium contact-links"
				target="_blank"
				href="https://twitter.com/vincencharleboi"
			>
				<li class="py-2">twitter</li>
			</a>
			<a
				class="text-sm font-medium contact-links"
				target="_blank"
				href="https://instagram.com/ffforests"
			>
				<li class="py-2">instagram</li>
			</a>
			<a
				class="text-sm font-medium contact-links"
				target="_blank"
				href="https://www.vincentcharlebois.net/"
			>
				<li class="py-2">portfolio</li>
			</a>
			<a
				class="text-sm font-medium contact-links"
				target="_blank"
				href="https://www.farcaster.xyz/xxc"
			>
				<li class="py-2">farcaster</li>
			</a>

			<a class="text-sm font-medium contact-links" target="_blank" href="https://vncnt.xyz">
				<li class="py-2">.xyz</li>
			</a>
			<a
				class="text-sm font-medium contact-links"
				target="_blank"
				rel="noreferrer"
				href="https://tripledoublev.github.io/CV/"
			>
				<li class="py-2">CV</li>
			</a>
			<a class="text-sm font-medium contact-links" href="/en/portal">
				<li class="py-2">portal</li>
			</a>
			<a
			class="text-sm font-medium contact-links"
			target="_blank"
			href="https://vincent.charlebois.info/en/"
			>
			<li class="py-2">.info</li>
		</a>
		</ul>
		<p class="text-2xl text-left px-5 pt-7 pb-7 mt-12 mb-1 w-80">Websites:</p>
		<ul class="flex flex-row flex-wrap">
			<a
				href="http://couleurs.tripledoublev.com"
				class="text-sm font-medium contact-links"
				target="_blank"
			>
				<li class="py-2">2025 Pbhyrhef</li>
			</a>
			<a
				href="https://tripledoublev.com/couleur"
				class="text-sm font-medium contact-links"
				target="_blank"
			>
				<li class="py-2">2024 Couleur de Montréal</li>
			</a>
			<a
				href="https://vincent.charlebois.info/consecutive-days/"
				class="text-sm font-medium contact-links"
				target="_blank"
			>
				<li class="py-2">2023 Consecutive days at the studio</li>
			</a>
			<a href="https://postvis.io" class="text-sm font-medium contact-links" target="_blank">
				<li class="py-2">2022 postvisions</li>
			</a>
			<a
				href="https://www.couvre-feu.quebec/"
				class="text-sm font-medium contact-links"
				target="_blank"
			>
				<li class="py-2">2021 Je me souviens</li>
			</a>
			<a
				href="https://vincentcharlebois.net//nodes.html"
				class="text-sm font-medium contact-links"
				target="_blank"
			>
				<li class="py-2">2018 nodes</li>
			</a>
			<a href="https://tripledoublev.net" class="text-sm font-medium contact-links" target="_blank">
				<li class="py-2">2017 MCCM;nodes</li>
			</a>
			<a
				href="https://tripledoublev.net/rhytidome"
				class="text-sm font-medium contact-links"
				target="_blank"
			>
				<li class="py-2">2016 Rhytidome</li>
			</a>
			<a
				href="https://tripledoublev.net/scroll"
				class="text-sm font-medium contact-links"
				target="_blank"
			>
				<li class="py-2">2015 if 2 words</li>
			</a>
		</ul>
	</div>
</main>

<style>
	li:not(:first-child) {
		margin-left: 1rem;
	}
	li {
		border: 2px solid var(--text-color);
		padding: 0.75rem 1rem;
		margin: 0.35rem;
	}
</style>
