<script>
	import SEO from '$components/SEO.svelte';
	export let data;
</script>

<SEO {...data.seo} />

<main class="flex flex-col place-items-center justify-center min-h-[75vh]">
	<p class="m-1 my-2 px-4 md:m-6 md:px-8 text-left">
		Depuis 2007, j'ai participé à un large éventail de projets dans le domaine de l'art, de
		l'écologie et de la technologie. De la capture de données climatiques au balayage 3D de la
		forêt, les interactions entre processus naturels et technologiques constituent mon principal
		objet de recherche.
	</p>
	<p class="m-1 my-2 px-4 md:m-6 md:px-8 text-left">
		L'un de ces projets,
		<a class="italic font-extrabold hover:underline" href="https://ffforests.xyz"
			>fabricating future forests</a
		>, recense les pratiques de coupe à blanc de l'industrie forestière au Canada à travers la
		création d'une documentation photographique. Depuis, ces images ont été utilisées pour entraîner
		un modèle d'apprentissage automatique afin de générer une infinitude d'images de forêts futures.
	</p>
	<p class="m-1 my-2 px-4 md:m-6 md:px-8 text-left">
		Depuis 2016, je développe
		<a
			class="italic font-extrabold hover:underline"
			href="https://vincentcharlebois.net//nodes.html">nodes</a
		>; une exploration du potentiel de perceptualisation des données environnementales où les
		conditions climatiques deviennent le matériau de base d'expériences intermédiatiques.
	</p>
	<p class="m-1 my-2 px-4 md:m-6 md:px-8 text-left">
		Au-delà de ces aventures artistiques, je suis un membre de Hypha, une coopérative de
		travailleurs qui imagine et crée des futurs numériques alternatifs, solidaires et collaboratifs.
	</p>
</main>
