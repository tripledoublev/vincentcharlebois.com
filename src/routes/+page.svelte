<script>
	import { t } from 'svelte-i18n';

	import Waves from '../components/Waves.svelte';
</script>

<svelte:head>
	<title>
		Vincent Charlebois - {$t('basic_title')}
	</title>
</svelte:head>

<main class="flex flex-col place-items-center justify-center overflow-hidden w-full min-h-[75vh]">
	<h2 class="italic">
		{$t('basic_title')}
	</h2>

	<Waves />
</main>
