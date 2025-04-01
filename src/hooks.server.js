/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    // Determine the language from the URL path
    const path = event.url.pathname;
    let lang = 'en'; // Default language
    
    // Check for language in path or use a heuristic based on known paths
    if (path.includes('/fr/') || path.startsWith('/fr')) {
      lang = 'fr';
    }
    
    // Default metadata (fallback)
    let title = 'Vincent Charlebois';
    let description = lang === 'fr' 
      ? 'Vincent Charlebois; artiste intermédia, développeur logiciel et membre de la coopérative de travailleurs Hypha.'
      : 'Vincent Charlebois; intermedia artist, software developer and member of Hypha Worker Co-operative.';
    let imageUrl = 'https://vincentcharlebois.com/vincentcharlebois-com.png';
    let currentUrl = `https://vincentcharlebois.com${event.url.pathname}`;
    
    // Route-specific metadata based on language and path
    if (path === '/' || path === '' || path === '/fr/' || path === '/fr') {
      title = lang === 'fr' 
        ? 'Vincent Charlebois — Écologies, technologies;'
        : 'Vincent Charlebois — Ecologies, technologies;';
    } 
    else if (path.includes('/about') || path.includes('/a-propos')) {
      title = lang === 'fr' 
        ? 'À propos de Vincent Charlebois'
        : 'About Vincent Charlebois';
      description = lang === 'fr'
        ? 'À propos de Vincent Charlebois - Artiste, technologue créatif et membre de la coopérative de travailleurs Hypha.'
        : 'About Vincent Charlebois - Artist, creative technologist, and member of Hypha Worker Co-operative.';
    }
    else if (path.includes('/projects') || path.includes('/projets')) {
      title = lang === 'fr' 
        ? 'Projets de Vincent Charlebois'
        : 'Projects by Vincent Charlebois';
      description = lang === 'fr'
        ? 'Explorez les projets de Vincent Charlebois et son travail au sein de la coopérative de travailleurs Hypha.'
        : 'Explore Vincent Charlebois\'s projects and his work at Hypha Worker Co-operative.';
    }
    else if (path.includes('/contact')) {
      title = lang === 'fr' 
        ? 'Contactez Vincent Charlebois'
        : 'Contact Vincent Charlebois';
      description = lang === 'fr'
        ? 'Contactez Vincent Charlebois. Trouvez des liens vers ses réseaux sociaux, son CV et son portfolio.'
        : 'Get in touch with Vincent Charlebois. Find links to social media profiles, his CV and portfolio.';
    }
    
    // Generate meta tags with appropriate language
    const metaTags = `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${currentUrl}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:locale" content="${lang === 'fr' ? 'fr_CA' : 'en_US'}" />
    <meta property="twitter:title" content="${title}" />
    <meta property="twitter:description" content="${description}" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${currentUrl}" />
    <meta property="twitter:image" content="${imageUrl}" />
    <link rel="canonical" href="${currentUrl}" />
    <meta name="language" content="${lang}" />
    `;
    
    // Get the page response using transformPageChunk instead of modifying after
    return resolve(event, {
      transformPageChunk: ({ html }) => {
        // Replace the language attribute
        let modifiedHtml = html.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);
        
        // Insert meta tags after head opening tag if it's the initial chunk
        if (modifiedHtml.includes('<head>')) {
          modifiedHtml = modifiedHtml.replace('<head>', '<head>' + metaTags);
        }
        
        return modifiedHtml;
      }
    });
  }