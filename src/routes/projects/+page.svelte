<script>
	import { t } from 'svelte-i18n';
</script>

<svelte:head>
	<title>
		{$t('linkprojects')} \Vincent Charlebois
	</title>
</svelte:head>

<main class="flex flex-col place-items-center justify-center min-h-[75vh]">
	<p class="m-1 my-2 px-4 md:m-6 md:px-8 text-left">
		{$t('projects_A')}
	</p>
	<p class="m-1 my-2 px-4 md:m-6 md:px-8 text-left">
		{$t('projects_B')}
		<a class="italic font-extrabold hover:underline" href="https://ffforests.xyz"
			>fabricating future forests</a
		>{$t('projects_ext')}
	</p>
	<p class="m-1 my-2 px-4 md:m-6 md:px-8 text-left">
		{$t('projects_ext1')}
		<a
			class="italic font-extrabold hover:underline"
			href="https://vincentcharlebois.net//nodes.html">nodes</a
		>{$t('projects_ext2')}
	</p>
	<p class="m-1 my-2 px-4 md:m-6 md:px-8 text-left">
		{$t('projects_now')}
	</p>
</main>
