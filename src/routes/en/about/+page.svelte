<script>
	import SEO from '$components/SEO.svelte';
	export let data;
</script>

<SEO {...data.seo} />

<main class="flex flex-col place-items-center justify-center min-h-[75vh]">
	<p class="m-2 px-4 md:m-6 md:px-8 text-left">
		I am an intermedia artist and creative technologist born in Montreal, QC Canada. Following my
		BFA in Intermedia/Cyberarts at Concordia University, I built digital projects and physical
		forests for over a decade. After planting over a million trees and showing my work on 3
		continents, I furthered my education by joining the first cohort of the Master in Advanced
		Ecological Buildings and Biocities at Valldaura labs, Iaac's sustainability campus in
		Barcelona's Collserola park. During the first year of COVID, I managed the local production of
		thousands of 3d printed medical protective shields from open source designs. Since November
		2023, I have been a member-worker at
		<a class="font-extrabold hover:underline rounder-md" href="https://hypha.coop">Hypha</a>
	</p>
</main>
