<script>
	import { t } from 'svelte-i18n';
</script>

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
