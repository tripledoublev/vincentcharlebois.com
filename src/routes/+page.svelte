<script>
	import { t } from 'svelte-i18n';
</script>

<svelte:head>
	<title>
		Vincent Charlebois - {$t('basic_title')}
	</title>
</svelte:head>

<main class="flex flex-col place-items-center justify-center overflow-hidden">
	<h2 class="italic">
		{$t('basic_title')}
	</h2>
	<p>
		{$t('basic')}
	</p>
</main>

<style>
	main {
		width: 100%;
		height: 75vh;
	}
</style>
