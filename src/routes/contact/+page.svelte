<script>
	import { t } from 'svelte-i18n';
	import { initializePortal } from '$lib/portal.js';

	initializePortal();
</script>

<svelte:head>
	<title>
		{$t('linkcontact')} \Vincent Charlebois
	</title>
</svelte:head>

<main class="flex flex-col place-items-center justify-center min-h-[75vh]">
	<p class="text-2xl text-left px-5 pt-7 pb-7 mb-1 w-80">
		{$t('links')}
		:
	</p>
	<div class="px-5 text-center">
		<ul class="flex flex-row flex-wrap">
			<a class=" text-sm font-medium contact-links" target="_blank" href="https://hypha.coop/">
				<li class="py-2">hypha</li>
			</a>
			<a
				class=" text-sm font-medium contact-links"
				target="_blank"
				href="https://tripledoublev.github.io/CV/"
			>
				<li class="py-2">CV</li>
			</a>
			<a
				class=" text-sm font-medium contact-links"
				target="_blank"
				href="mailto:vincent@charlebois.info"
			>
				<li class="py-2">email</li>
			</a>
			<a
				class=" text-sm font-medium contact-links"
				target="_blank"
				href="https://github.com/tripledoublev"
			>
				<li class="py-2">github</li>
			</a>
			<a
				class=" text-sm font-medium contact-links"
				target="_blank"
				href="https://twitter.com/vincencharleboi"
			>
				<li class="py-2">twitter</li>
			</a>
			<a
				class=" text-sm font-medium contact-links"
				target="_blank"
				href="https://instagram.com/ffforests"
			>
				<li class="py-2">instagram</li>
			</a>
			<a
				class=" text-sm font-medium contact-links"
				target="_blank"
				href="https://www.vincentcharlebois.net/"
			>
				<li class="py-2">portfolio</li>
			</a>
			<a
				class=" text-sm font-medium contact-links"
				target="_blank"
				href="https://www.warpcast.com/xxc"
			>
				<li class="py-2">farcaster</li>
			</a>
			<a
				class=" text-sm font-medium contact-links"
				target="_blank"
				href="https://vincent.charlebois.info"
			>
				<li class="py-2">.info</li>
			</a>
		</ul>
	</div>
</main>

<style>
	li:not(:first-child) {
		margin-left: 1rem;
	}
	li {
		border: 2px solid var(--text-color);
		padding: 1.75rem;
		margin: 0.45rem;
	}
</style>
