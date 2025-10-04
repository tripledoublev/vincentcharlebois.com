<script>
	import { onMount } from 'svelte';
	import SEO from '$components/SEO.svelte';

	const seo = {
		title: 'Contact | Vincent Charlebois',
		description: 'Contactez Vincent Charlebois - artiste intermédiatique, technologue créatif et membre de la Hypha Worker Co-operative.'
	};

	onMount(() => {
		// Shadow content
		console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #ffffff; font-weight: bold;');
		console.log('%cPartie 4 : Vincent en ligne', 'color: #ffffff; font-size: 18px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;');
		console.log('%cPrésence numérique et réseaux', 'color: #ffffff; font-size: 14px; font-style: italic; margin-bottom: 10px;');
		console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #ffffff; font-weight: bold;');
		console.log('%c\nVincent Charlebois maintient une empreinte numérique étendue et délibérément organisée qui fonctionne comme une extension distribuée de sa pratique artistique. Sa présence en ligne est une architecture à multiples facettes, soigneusement construite, qui met en scène les thèmes mêmes des réseaux, des systèmes et de l\'échange dématérialisé qui sont au cœur de son travail.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c4.1 Le studio numérique : Un réseau de sites web', 'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;');
		console.log('%c\nAu lieu d\'un seul site web monolithique, Charlebois emploie un réseau de domaines personnels : vincentcharlebois.com (portfolio), vincentcharlebois.net (déclaration d\'artiste), vincent.charlebois.info (biographique), et charlebois.solutions (hub central). Cette stratégie multi-domaines suggère une compartimentation et une curation délibérées de son identité en ligne.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c4.2 Réseaux sociaux et professionnels : Un pont entre Web2 et Web3', 'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;');
		console.log('%c\nSa présence s\'étend des plateformes conventionnelles (LinkedIn, Instagram @ffforests, X pour les "mots" @vincencharleboi et "images" @vncntxyz) aux réseaux Web3 décentralisés (Bluesky, Mastodon, Pixelfed, Farcaster). Cette double présence est une pratique active d\'engagement avec différents systèmes technologiques et idéologiques de communication, reflétant directement les thèmes de la décentralisation.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c4.3 Présence dans les archives et plateformes d\'art numérique', 'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;');
		console.log('%c\nSes œuvres sont archivées dans la prestigieuse Rhizome ArtBase (New Museum, NY), assurant la préservation à long terme et la contextualisation historique de son travail né-numérique. Il s\'engage avec les économies de l\'art numérique via Sedition Art et Foundation (NFT), explorant les nouveaux modèles économiques et structures communautaires émergeant autour de la technologie blockchain.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c━━━ Conclusion ━━━', 'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 20px; text-align: center;');
		console.log('%c\nVincent Charlebois apparaît comme un artiste contemporain important dont le travail est né d\'un engagement profond et vécu avec la nature et la technologie. En jetant un pont entre les cyberarts et la science écologique, et en fondant ses explorations technologiques sur une base de travail physique et un éthos coopératif, il a forgé une pratique unique qui parle directement aux défis et aux possibilités du 21e siècle.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #ffffff; font-weight: bold;');
	});
</script>

<SEO {...seo} />

<main id="main-content" class="flex flex-col place-items-center justify-center min-h-[75vh]">
	<div class="px-5 text-center">
		<p class="text-2xl text-left px-5 pt-7 pb-7 mb-1 w-80">Liens:</p>
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
				href="https://tripledoublev.github.io/CV/fr"
			>
				<li class="py-2">CV</li>
			</a>
			<a class="text-sm font-medium contact-links" href="/fr/portail">
				<li class="py-2">portail</li>
			</a>
			<a
			class="text-sm font-medium contact-links"
			target="_blank"
			href="https://vincent.charlebois.info/fr/"
			>
			<li class="py-2">.info</li>
		</a>
		</ul>
		<p class="text-2xl text-left px-5 pt-7 pb-7 mt-12 mb-1 w-80">Sites web:</p>
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
