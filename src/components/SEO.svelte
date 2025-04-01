<script>
    // Import page store for current URL
    import { page } from '$app/stores';
    
    export let image = "https://vincentcharlebois.com/vincentcharlebois-com.png";
    export let title = '';
    export let description = '';
    
    // Determine the current URL if not provided
    $: currentUrl = `https://vincentcharlebois.com${$page.url.pathname}`;
  </script>
  
  <svelte:head>
      <!-- Basic metadata -->
      <title>{title}</title>
      <meta name="description" content={description} />
      
      <!-- OpenGraph/Facebook -->
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image} />
      
      <!-- Twitter -->
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:image" content={image} />
      
      <!-- Canonical URL -->
      <link rel="canonical" href={currentUrl} />
  </svelte:head>