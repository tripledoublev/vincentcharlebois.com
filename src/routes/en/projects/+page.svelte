<script>
	import SEO from '$components/SEO.svelte';
	export let data;
</script>

<SEO {...data.seo} />

<main class="flex flex-col place-items-center justify-center min-h-[75vh]">
	<p class="m-1 my-2 px-4 md:m-6 md:px-8 text-left">
		Since 2007, I have contributed to a wide variety of projects in the field of art, ecology and
		technology. From climate sensing to ecological interactions, exploring relationships between
		natural and technological processes consists of my primary field of research.
	</p>
	<p class="m-1 my-2 px-4 md:m-6 md:px-8 text-left">
		One of these outputs,
		<a class="italic font-extrabold hover:underline" href="https://ffforests.xyz"
			>fabricating future forests</a
		>, was born as documentation of clear-cutting practices witnessed through my exposure to the
		forest industry's as part of my work as a Canadian tree planter. Since then, the resulting
		photographic dataset was used to train a machine learning model to generate further future
		forest imagery — machine-made images of machine-destroyed landscapes.
	</p>
	<p class="m-1 my-2 px-4 md:m-6 md:px-8 text-left">
		Since 2016, I have been developing
		<a
			class="italic font-extrabold hover:underline"
			href="https://vincentcharlebois.net//nodes.html">nodes</a
		>, a project on environmental data perceptualization. As part of this research, I have been
		recording climate conditions at multiple locations, archiving the environmental data as a
		portrait of a place in time. The resulting weather archive becomes material for subsequent
		intermedia experiences.
	</p>
	<p class="m-1 my-2 px-4 md:m-6 md:px-8 text-left">
		In addition to pursuing these artistic endeavours, I am a member of Hypha Worker Co-operative
		where, in solidarity with our global neighbours, we collaborate to imagine and create
		alternative digital futures.
	</p>
</main>
