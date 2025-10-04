<script>
	import SEO from '$components/SEO.svelte';
	import { t } from 'svelte-i18n';
	import Markdown from '$components/Markdown.svelte';
	import { onMount } from 'svelte';

	$: description = $t('about.description');
	$: title = `About | Vincent Charlebois`;

	let aboutText = '';

	onMount(() => {
		aboutText = $t('about');

		// Shadow content
		console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #ffffff; font-weight: bold;');
		console.log('%cPart 2: About Vincent', 'color: #ffffff; font-size: 18px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;');
		console.log('%cBiography, Education, and Formative Experiences', 'color: #ffffff; font-size: 14px; font-style: italic; margin-bottom: 10px;');
		console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #ffffff; font-weight: bold;');
		console.log('%c\nVincent Charlebois\'s unique artistic perspective is the product of a biography defined by a dynamic interplay between formal academic training in both art and science, and a profound, long-term commitment to physical labor within the very ecological systems his work interrogates.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c2.1 Academic Foundations: A Dual Focus', 'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;');
		console.log('%c\nCharlebois\'s educational trajectory reveals a deliberate effort to build expertise in two distinct yet complementary fields. His foundational training is a Bachelor of Fine Arts (BFA) in Intermedia/Cyberarts from Concordia University in Montreal. This degree provided him with the critical and technical skills in media art, software, performance, and installation that form the bedrock of his artistic practice. The focus on "cyberarts" points to an early engagement with the relationship between digital technology and artistic expression.\n\nYears later, he significantly expanded his intellectual toolkit by pursuing a Master\'s in Advanced Ecological Buildings and Biocities. He was part of the first cohort of this program at Valldaura Labs, the Institute for Advanced Architecture of Catalonia\'s (IAAC) sustainability campus located in Barcelona\'s Collserola park. This advanced degree marks a critical turn towards a scientific and systemic understanding of ecology, regenerative design, and sustainable architecture. It equipped him with a rigorous, data-driven perspective on environmental systems that complements and deepens the conceptual inquiries of his artistic training. This dual academic foundation is rare and positions him to navigate conversations in both art and ecological science with genuine authority.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c2.2 The Physical and the Digital: A Decade in the Forest', 'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;');
		console.log('%c\nPerhaps the most defining experience in Charlebois\'s biography is one that took place far from any university or studio. For over a decade—described variably as "over a decade" and "twelve seasons"—he worked at "building physical forests," during which time he personally planted over one million trees. This was not a short-term project but a sustained, physically demanding engagement with large-scale landscape regeneration and the realities of the Canadian forestry industry.\n\nThis period should be understood as a form of deep, embodied research that predates and profoundly informs his technology-focused art. The direct, tactile experience of working on clear-cut lands provides a non-abstract, visceral understanding of concepts like "degradation" and "regeneration." This physical labor is the raw, experiential material that grounds the authority and authenticity of his later digital works. The photographs he took of these "devastated landscapes" would become the essential data set for his artificial intelligence projects, creating a direct and powerful link between his physical past and his digital present. His career is thus defined by a fundamental dialectic between this intense physical labor and the high-level digital abstraction of his art, a synthesis that gives his work its unique power. The credibility of his digital art about forests is inextricably linked to the fact that he has physically built them.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c2.3 Civic Engagement: Technology as a Tool for Mutual Aid', 'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;');
		console.log('%c\nCharlebois\'s career demonstrates a consistent ethos that extends beyond the gallery and into direct civic action. During the first year of the COVID-19 pandemic, he applied his technical and organizational skills to a critical community need, managing the local production of thousands of 3D-printed medical protective shields. Crucially, this effort was based on open-source designs, highlighting a commitment to collaborative, non-proprietary solutions to urgent social problems.\n\nThis experience is a vital data point in understanding his worldview. It showcases an application of technology not for artistic expression or commercial gain, but for mutual aid and rapid, decentralized manufacturing in a time of crisis. This commitment to open, collaborative, and community-oriented principles is not an isolated choice but a consistent ethical thread that runs through his career. It is visible in his use of open-source designs for the COVID shields, his focus on teaching with "open-source tools and coding strategies" in his workshops, and his eventual formalization of this ethos through his membership in the Hypha worker co-operative, which is itself dedicated to open-source and decentralized governance principles.\n', 'color: #ffffff; line-height: 1.6;');
		console.log('%c2.4 Global Engagement: Networks and Residencies', 'color: #ffffff; font-size: 16px; font-weight: bold; margin-top: 15px;');
		console.log('%c\nCharlebois\'s practice, while rooted in his Montreal origins and his experiences in the Canadian landscape, is international in scope. His work has been exhibited on three continents, with presentations in cities including Montreal, Berlin, and Milan, indicating his participation in a global contemporary art conversation.\n\nA significant aspect of his global engagement is his participation in The Eternal Internet Brotherhood\'s international residencies. He has taken part in these events—described as cooperative camps for artists, curators, and writers—in locations as diverse as Greece, Mexico, and the Dead Sea. While the available materials do not provide a detailed overview of this organization, his repeated participation points to an active engagement with a global network of net artists and a commitment to a nomadic, collaborative, and situation-based mode of creation that extends beyond the traditional studio or gallery context.\n', 'color: #ffffff; line-height: 1.6;');
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
