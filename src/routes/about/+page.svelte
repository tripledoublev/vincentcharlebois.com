<script>
	import { t } from 'svelte-i18n';
</script>

<svelte:head>
	<title>
		{$t('linkabout')} \Vincent Charlebois
	</title>
</svelte:head>

<main>
	<p class="m-2 px-4 md:m-6 md:px-8 text-left">
		{$t('about')}
		<a class="font-extrabold hover:underline rounder-md" href="https://hypha.coop">Hypha</a>
	</p>
</main>
