<script>
	import SEO from '$components/SEO.svelte';
	import { t } from 'svelte-i18n';
	import Markdown from '$components/Markdown.svelte';
	import { onMount } from 'svelte';

	$: description = $t('about.description');
	$: title = `À propos | Vincent Charlebois`;

	let aboutText = '';

	onMount(() => {
		aboutText = $t('about');

		// Shadow content
		console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #ffffff; font-weight: bold;');
		console.log('%cPartie 2 : À propos de Vincent', 'color: #ffffff; font-size: 18px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;');
		console.log('%cBiographie, formation et expériences formatrices', 'color: #ffffff; font-size: 14px; font-style: italic; margin-bottom: 10px;');
		console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #ffffff; font-weight: bold;');
		console.log('%c\nLa perspective artistique unique de Vincent Charlebois est le produit d\'une biographie définie par une interaction dynamique entre une formation académique formelle en art et en science, et un engagement profond et à long terme dans le travail physique au sein même des systèmes écologiques que son travail interroge.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c2.1 Fondations académiques : Une double spécialisation', 'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;');
		console.log('%c\nLe parcours éducatif de Charlebois révèle un effort délibéré pour développer une expertise dans deux domaines distincts mais complémentaires. Sa formation fondamentale est un baccalauréat en beaux-arts (BFA) en Intermédia/Cyberarts de l\'Université Concordia à Montréal. Ce diplôme lui a fourni les compétences critiques et techniques en art médiatique, en logiciels, en performance et en installation qui constituent le socle de sa pratique artistique. L\'accent mis sur les « cyberarts » témoigne d\'un engagement précoce avec la relation entre la technologie numérique et l\'expression artistique.\n\nDes années plus tard, il a considérablement élargi sa boîte à outils intellectuelle en poursuivant une maîtrise en Bâtiments Écologiques Avancés et Biocités. Il faisait partie de la première cohorte de ce programme aux Valldaura Labs, le campus de durabilité de l\'Institut d\'Architecture Avancée de Catalogne (IAAC) situé dans le parc de Collserola à Barcelone. Ce diplôme supérieur marque un tournant critique vers une compréhension scientifique et systémique de l\'écologie, du design régénératif et de l\'architecture durable.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c2.2 Le physique et le numérique : Une décennie en forêt', 'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;');
		console.log('%c\nL\'expérience la plus déterminante de la biographie de Charlebois est peut-être celle qui s\'est déroulée loin de toute université ou de tout studio. Pendant plus d\'une décennie, il a travaillé à « construire des forêts physiques », période durant laquelle il a personnellement planté plus d\'un million d\'arbres. Cette période doit être comprise comme une forme de recherche profonde et incarnée qui précède et informe profondément son art axé sur la technologie. L\'expérience directe et tactile du travail sur des terres coupées à blanc fournit une compréhension non abstraite et viscérale de concepts comme la « dégradation » et la « régénération ».\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c2.3 Engagement civique : La technologie comme outil d\'entraide', 'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;');
		console.log('%c\nLa carrière de Charlebois démontre un éthos constant qui s\'étend au-delà de la galerie et dans l\'action civique directe. Pendant la première année de la pandémie de COVID-19, il a appliqué ses compétences techniques et organisationnelles à un besoin communautaire critique, en gérant la production locale de milliers d\'écrans de protection médicale imprimés en 3D. Fait crucial, cet effort était basé sur des conceptions open-source, soulignant un engagement envers des solutions collaboratives et non propriétaires à des problèmes sociaux urgents.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c2.4 Engagement mondial : Réseaux et résidences', 'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;');
		console.log('%c\nLa pratique de Charlebois, bien qu\'enracinée dans ses origines montréalaises et ses expériences dans le paysage canadien, est de portée internationale. Son travail a été exposé sur trois continents, avec des présentations dans des villes comme Montréal, Berlin et Milan, ce qui indique sa participation à une conversation mondiale sur l\'art contemporain. Un aspect important de son engagement mondial est sa participation aux résidences internationales de The Eternal Internet Brotherhood.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #ffffff; font-weight: bold;');
	});

	$: if ($t('about')) {
		aboutText = $t('about');
	}
</script>

<SEO {title} {description} />

<main id="main-content" class="flex flex-col place-items-center justify-center min-h-[75vh]">
	<Markdown content={aboutText} className="m-2 px-4 md:m-6 md:px-8 text-left markdown" />
</main>
