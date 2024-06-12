<script>
	import { locale, t } from 'svelte-i18n';

	function switchLanguage() {
		locale.update((current) => (current === 'fr' ? 'en' : 'fr'));
		console.log($locale);
	}
</script>

<button
	class="text-lg lg:text-2xl font-bold hover:font-black"
	type="button"
	on:click={switchLanguage}
>
	{$t('other_language')}
</button>

<style>
	button:hover {
		text-decoration: underline;
	}
</style>
