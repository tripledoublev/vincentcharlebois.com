<script>
  import { page } from '$app/stores';
  
  export let title = '';
  export let description = '';
  export let image = "https://vincentcharlebois.com/vincentcharlebois-com.png";
  export let keywords = '';
  export let type = 'website';
  export let lang = 'en';
  export let canonicalUrl = '';

  // Automatically determine the current URL if not provided
  $: currentUrl = canonicalUrl || `https://vincentcharlebois.com${$page.url.pathname}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  {#if keywords}
    <meta name="keywords" content={keywords} />
  {/if}

  <!-- OpenGraph tags -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content={type} />
  <meta property="og:url" content={currentUrl} />
  <meta property="og:image" content={image} />
  <meta property="og:locale" content={lang === 'fr' ? 'fr_CA' : 'en_CA'} />
  <meta property="og:site_name" content="Vincent Charlebois" />

  <!-- Twitter tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:url" content={currentUrl} />
  <meta name="twitter:image" content={image} />
  
  <!-- Canonical URL -->
  <link rel="canonical" href={currentUrl} />
  
  <!-- Additional metadata for better indexing -->
  <meta name="author" content="Vincent Charlebois" />
  <meta name="robots" content="index, follow" />
</svelte:head>