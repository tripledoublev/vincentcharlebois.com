<script>
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';
	import SEO from '$components/SEO.svelte';
	import Markdown from '$components/Markdown.svelte';

	const seo = {
		title: 'Contact | Vincent Charlebois',
		description:
			'Contactez Vincent Charlebois, développeur logiciel et artiste-chercheur. Trouvez des liens vers GitHub, CV et plus.'
	};

	onMount(() => {
		// Shadow content
		console.log(
			'%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
			'color: #ffffff; font-weight: bold;'
		);
		console.log(
			'%cPartie 4 : Vincent en ligne',
			'color: #ffffff; font-size: 18px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;'
		);
		console.log(
			'%cPrésence numérique et réseaux',
			'color: #ffffff; font-size: 14px; font-style: italic; margin-bottom: 10px;'
		);
		console.log(
			'%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
			'color: #ffffff; font-weight: bold;'
		);
		console.log(
			"%c\nVincent Charlebois maintient une empreinte numérique étendue et délibérément organisée qui fonctionne comme une extension distribuée de sa pratique artistique. Sa présence en ligne est une architecture à multiples facettes, soigneusement construite, qui met en scène les thèmes mêmes des réseaux, des systèmes et de l'échange dématérialisé qui sont au cœur de son travail.\n",
			'color: #ffffff; line-height: 1.6;'
		);
		console.log(
			'%c4.1 Le studio numérique : Un réseau de sites web',
			'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;'
		);
		console.log(
			"%c\nAu lieu d'un seul site web monolithique, Charlebois emploie un réseau de domaines personnels : vincentcharlebois.com (portfolio), vincentcharlebois.net (déclaration d'artiste), vincent.charlebois.info (biographique), et charlebois.solutions (hub central). Cette stratégie multi-domaines suggère une compartimentation et une curation délibérées de son identité en ligne.\n",
			'color: #ffffff; line-height: 1.6;'
		);
		console.log(
			'%c4.2 Réseaux sociaux et professionnels : Plateformes et protocoles',
			'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;'
		);
		console.log(
			'%c\nSa présence s\'étend des plateformes conventionnelles (Instagram @ffforests, X pour les "mots" @vincencharleboi et "images" @vncntxyz) aux réseaux ouverts fondés sur des protocoles (Bluesky sur le protocole AT, Mastodon et Pixelfed sur ActivityPub). Cette double présence est une pratique active d\'engagement avec différents systèmes technologiques et idéologiques de communication, reflétant directement les thèmes de la décentralisation.\n',
			'color: #ffffff; line-height: 1.6;'
		);
		console.log(
			"%c4.3 Présence dans les archives et plateformes d'art numérique",
			'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;'
		);
		console.log(
			"%c\nSes œuvres sont archivées dans la prestigieuse Rhizome ArtBase (New Museum, NY), assurant la préservation à long terme et la contextualisation historique de son travail né-numérique. Il s'engage avec les économies de l'art numérique via Sedition Art et Foundation (NFT), explorant les nouveaux modèles économiques et structures communautaires émergeant autour de la technologie blockchain.\n",
			'color: #ffffff; line-height: 1.6;'
		);
		console.log(
			'%c━━━ Conclusion ━━━',
			'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 20px; text-align: center;'
		);
		console.log(
			"%c\nVincent Charlebois apparaît comme un artiste contemporain important dont le travail est né d'un engagement profond et vécu avec la nature et la technologie. En jetant un pont entre les cyberarts et la science écologique, et en fondant ses explorations technologiques sur une base de travail physique et un éthos coopératif, il a forgé une pratique unique qui parle directement aux défis et aux possibilités du 21e siècle.\n",
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
