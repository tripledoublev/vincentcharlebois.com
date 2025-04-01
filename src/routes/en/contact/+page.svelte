<script>
  import { initializePortal } from '$lib/portal.js';
  import SEO from '$components/SEO.svelte';
  
  export let data;
  initializePortal();
</script>

<SEO {...data.seo} />

<main class="flex flex-col place-items-center justify-center min-h-[75vh]">
  <div class="px-5 text-center">
    <p class="text-2xl text-left px-5 pt-7 pb-7 mb-1 w-80">
      Links:
    </p>
    <ul class="flex flex-row flex-wrap">
      <a class="text-sm font-medium contact-links" target="_blank" href="https://hypha.coop/">
        <li class="py-2">hypha</li>
      </a>
      <a class="text-sm font-medium contact-links" target="_blank" href="mailto:vincent@charlebois.info">
        <li class="py-2">email</li>
      </a>
      <a class="text-sm font-medium contact-links" href="/publickey">
        <li class="py-2">pgp</li>
      </a>
      <a class="text-sm font-medium contact-links" target="_blank" href="https://github.com/tripledoublev">
        <li class="py-2">github</li>
      </a>
      <a class="text-sm font-medium contact-links" target="_blank" href="https://www.linkedin.com/in/vincent-charlebois/">
        <li class="py-2">linkedin</li>
      </a>
      <a class="text-sm font-medium contact-links" target="_blank" href="https://chateau.social/@v">
        <li class="py-2">mastodon</li>
      </a>
      <a class="text-sm font-medium contact-links" target="_blank" href="https://bsky.app/profile/charlebois.info">
        <li class="py-2">bluesky</li>
      </a>
      <a class="text-sm font-medium contact-links" target="_blank" href="https://www.are.na/vincent-charlebois">
        <li class="py-2">are.na</li>
      </a>
      <a class="text-sm font-medium contact-links" target="_blank" href="https://pinksky.app/profile/couleurs.bsky.social">
        <li class="py-2">pinksky</li>
      </a>
      <a class="text-sm font-medium contact-links" target="_blank" href="https://twitter.com/vincencharleboi">
        <li class="py-2">twitter</li>
      </a>
      <a class="text-sm font-medium contact-links" target="_blank" href="https://instagram.com/ffforests">
        <li class="py-2">instagram</li>
      </a>
      <a class="text-sm font-medium contact-links" target="_blank" href="https://www.vincentcharlebois.net/">
        <li class="py-2">portfolio</li>
      </a>
      <a class="text-sm font-medium contact-links" target="_blank" href="https://www.warpcast.com/xxc">
        <li class="py-2">warpcast</li>
      </a>
      <a class="text-sm font-medium contact-links" target="_blank" href="https://vincent.charlebois.info">
        <li class="py-2">.info</li>
      </a>
      <a class="text-sm font-medium contact-links" target="_blank" href="https://vncnt.xyz">
        <li class="py-2">.xyz</li>
      </a>
      <a class="text-sm font-medium contact-links" target="_blank" rel="noreferrer" href="https://tripledoublev.github.io/CV/">
        <li class="py-2">CV</li>
      </a>
    </ul>
    <p class="text-2xl text-left px-5 pt-7 pb-7 mt-12 mb-1 w-80">
      Websites:
    </p>
    <ul class="flex flex-row flex-wrap">
      <a href="https://tripledoublev.com/couleur" class="text-sm font-medium contact-links" target="_blank">
        <li class="py-2">2024 Couleur de Montréal</li>
      </a>
      <a href="https://vincent.charlebois.info/consecutive-days/" class="text-sm font-medium contact-links" target="_blank">
        <li class="py-2">2023 Consecutive days at the studio</li>
      </a>
      <a href="https://postvis.io" class="text-sm font-medium contact-links" target="_blank">
        <li class="py-2">2022 postvisions</li>
      </a>
      <a href="https://www.couvre-feu.quebec/" class="text-sm font-medium contact-links" target="_blank">
        <li class="py-2">2021 Je me souviens</li>
      </a>
      <a href="https://vincentcharlebois.net//nodes.html" class="text-sm font-medium contact-links" target="_blank">
        <li class="py-2">2018 nodes</li>
      </a>
      <a href="https://tripledoublev.net" class="text-sm font-medium contact-links" target="_blank">
        <li class="py-2">2017 MCCM;nodes</li>
      </a>
      <a href="https://tripledoublev.net/rhytidome" class="text-sm font-medium contact-links" target="_blank">
        <li class="py-2">2016 Rhytidome</li>
      </a>
      <a href="https://tripledoublev.net/scroll" class="text-sm font-medium contact-links" target="_blank">
        <li class="py-2">2015 if 2 words</li>
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