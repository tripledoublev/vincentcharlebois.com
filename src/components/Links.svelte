<script>
	import { t } from 'svelte-i18n';
	import { page } from '$app/stores';
</script>

<div class="flex justify-end">
	<div class="md:flex flex-grow items-center justify-center lg:justify-end z-50">
		<ul class="flex md:flex-row list-none">
			<a
				href="/about"
				class="px-1 flex flex-grow items-center text-xl lowercase font-bold leading-snug hover:font-black"
				class:active={$page.url.pathname === '/about'}
			>
				<li class="nav-item flex-auto">
					{$t('linkabout')}
				</li>
			</a>

			<a
				href="/projects"
				class="px-1 flex items-center text-xl lowercase font-bold leading-snug hover:font-black"
				class:active={$page.url.pathname === '/projects'}
			>
				<li class="nav-item flex-auto">
					{$t('linkprojects')}
				</li>
			</a>

			<a
				href="/contact"
				class="px-1 flex items-center text-xl lowercase font-bold leading-snug hover:font-black"
				class:active={$page.url.pathname === '/contact'}
			>
				<li class="nav-item flex-auto">Contact</li>
			</a>
		</ul>
	</div>
</div>

<style>
	li {
		padding: 0.25rem 0.86rem;
		padding-bottom: 0.35rem;
	}
	.active {
		text-decoration: underline;
	}
</style>
