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
    
    // Common CSS for all no-JS fallbacks
    const fallbackCSS = `
      <style>
        .no-js-fallback {
          display: block;
          font-family: monospace, sans-serif;
          text-align: center;
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
          color: #121212;
        }
        .no-js-fallback h1 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }
        .no-js-fallback h2 {
          font-style: italic;
          margin-bottom: 2rem;
          margin: 4rem;
        }
        .no-js-fallback p {
          margin-bottom: 1.5rem;
          text-align: center;
          margin: 3rem;
        }
        .no-js-fallback a {
          display: inline-block;
          padding: 0.5rem 1rem;
          margin: 0 0.5rem;
          border: 1px solid #121212;
          text-decoration: none;
          color: #121212;
        }
        .no-js-fallback a:hover {
          background-color: #121212;
          color: white;
        }
        .no-js-fallback .contact-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 2rem;
          margin: 5rem;
        }
        .no-js-fallback .back-link {
          margin-top: 2rem;
        }
        .no-js-fallback .language-toggle {
          position: absolute;
          top: 1rem;
          right: 1rem;
        }
      </style>
    `;
    
    // Generate no-JS fallback content based on path
    let noJsContent = '';
    
    // Root path (language selection)
    if (path === '/' || path === '') {
      noJsContent = `
      ${fallbackCSS}
      <div class="no-js-fallback">
        <h1>vincent charlebois</h1>

         <p>Please select your language / Veuillez choisir votre langue</p>
        <div>
          <a href="/en">English</a>
          <a href="/fr">Français</a>
        </div>

        <h2>This is a minimal website without JavaScript. <br>To see the full version, please enable JavaScript.</h2>
        <h2>Ceci est un site web minimaliste sans JavaScript. <br>Pour voir la version complète, veuillez activer JavaScript.</h2>
       
      </div>
      `;
    }
    // English home page
    else if (path === '/en' || path === '/en/') {
      noJsContent = `
      ${fallbackCSS}
      <div class="no-js-fallback">
        <div class="language-toggle"><a href="/fr">fr</a></div>
        <h1>vincent charlebois</h1>
        <h2>Ecologies, technologies;</h2>
        <p>Environmental data perceptualization and regenerative interactions</p>
        <div>
          <a href="/en/about">About</a>
          <a href="/en/projects">Projects</a>
          <a href="/en/contact">Contact</a>
        </div>
      </div>
      `;
    }
    // French home page
    else if (path === '/fr' || path === '/fr/') {
      noJsContent = `
      ${fallbackCSS}
      <div class="no-js-fallback">
        <div class="language-toggle"><a href="/en">en</a></div>
        <h1>vincent charlebois</h1>
        <h2>Écologies, technologies;</h2>
        <p>Perceptualisations environnementales et interactions régénératives</p>
        <div>
          <a href="/fr/a-propos">À propos</a>
          <a href="/fr/projets">Projets</a>
          <a href="/fr/contact">Contact</a>
        </div>
      </div>
      `;
    }
    // About page (English)
    else if (path.includes('/en/about')) {
      noJsContent = `
      ${fallbackCSS}
      <div class="no-js-fallback">
        <div class="language-toggle"><a href="/fr/a-propos">fr</a></div>
        <h1>about vincent charlebois</h1>
        <p>Vincent Charlebois is an intermedia artist, software developer and member of Hypha Worker Co-operative.</p>
        <div class="back-link">
          <a href="/en">Back to home</a>
        </div>
      </div>
      `;
    }
    // About page (French)
    else if (path.includes('/fr/a-propos')) {
      noJsContent = `
      ${fallbackCSS}
      <div class="no-js-fallback">
        <div class="language-toggle"><a href="/en/about">en</a></div>
        <h1>à propos de vincent charlebois</h1>
        <p>Vincent Charlebois est un artiste intermédia, développeur logiciel et membre de la coopérative de travailleurs Hypha.</p>
        <div class="back-link">
          <a href="/fr">Retour à l'accueil</a>
        </div>
      </div>
      `;
    }
    // Projects page (English)
    else if (path.includes('/en/projects')) {
      noJsContent = `
      ${fallbackCSS}
      <div class="no-js-fallback">
        <div class="language-toggle"><a href="/fr/projets">fr</a></div>
        <h1>projects by vincent charlebois</h1>
        <p>Explore Vincent's work on environmental data perceptualization and regenerative interactions.</p>
         <a href="https://vincent.charlebois.info/en">dot info</a>
        <div class="back-link">
          <a href="/en">Back to home</a>
        </div>
      </div>
      `;
    }
    // Projects page (French)
    else if (path.includes('/fr/projets')) {
      noJsContent = `
      ${fallbackCSS}
      <div class="no-js-fallback">
        <div class="language-toggle"><a href="/en/projects">en</a></div>
        <h1>projets de vincent charlebois</h1>
        <p>Explorez le travail de Vincent sur les perceptualisations de données environnementales et les interactions régénératives.</p>
        <a href="https://vincent.charlebois.info/fr">point info</a>

        <div class="back-link">
          <a href="/fr">Retour à l'accueil</a>
        </div>
      </div>
      `;
    }
    // Contact page (English)
    else if (path.includes('/en/contact')) {
      noJsContent = `
      ${fallbackCSS}
      <div class="no-js-fallback">
        <div class="language-toggle"><a href="/fr/contact">fr</a></div>
        <h1>contact vincent charlebois</h1>
        <p>Get in touch:</p>
        <div class="contact-links">
          <a href="https://hypha.coop/" target="_blank">hypha</a>
          <a href="mailto:vincent@charlebois.info">email</a>
          <a href="/publickey">pgp</a>
          <a href="https://github.com/tripledoublev" target="_blank">github</a>
          <a href="https://www.linkedin.com/in/vincent-charlebois/" target="_blank">linkedin</a>
          <a href="https://chateau.social/@v" target="_blank">mastodon</a>
          <a href="https://bsky.app/profile/charlebois.info" target="_blank">bluesky</a>
          <a href="https://www.are.na/vincent-charlebois" target="_blank">are.na</a>
        </div>
        <div class="back-link">
          <a href="/en">Back to home</a>
        </div>
      </div>
      `;
    }
    // Contact page (French)
    else if (path.includes('/fr/contact')) {
      noJsContent = `
      ${fallbackCSS}
      <div class="no-js-fallback">
        <div class="language-toggle"><a href="/en/contact">en</a></div>
        <h1>contactez vincent charlebois</h1>
        <p>Prenez contact:</p>
        <div class="contact-links">
          <a href="https://hypha.coop/" target="_blank">hypha</a>
          <a href="mailto:vincent@charlebois.info">email</a>
          <a href="/publickey">pgp</a>
          <a href="https://github.com/tripledoublev" target="_blank">github</a>
          <a href="https://www.linkedin.com/in/vincent-charlebois/" target="_blank">linkedin</a>
          <a href="https://chateau.social/@v" target="_blank">mastodon</a>
          <a href="https://bsky.app/profile/charlebois.info" target="_blank">bluesky</a>
          <a href="https://www.are.na/vincent-charlebois" target="_blank">are.na</a>
        </div>
        <div class="back-link">
          <a href="/fr">Retour à l'accueil</a>
        </div>
      </div>
      `;
    }
    // Fallback for any other pages
    else if (noJsContent === '') {
      const homePath = lang === 'fr' ? '/fr' : '/en';
      const homeText = lang === 'fr' ? 'Retour à l\'accueil' : 'Back to home';
      
      noJsContent = `
      ${fallbackCSS}
      <div class="no-js-fallback">
        <h1>Vincent Charlebois</h1>
        <p>${description}</p>
        <div class="back-link">
          <a href="${homePath}">${homeText}</a>
        </div>
      </div>
      `;
    }
    
    // Get the page response using transformPageChunk
    return resolve(event, {
      transformPageChunk: ({ html }) => {
        // Replace the language attribute
        let modifiedHtml = html.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);
        
        // Insert meta tags after head opening tag if it's the initial chunk
        if (modifiedHtml.includes('<head>')) {
          modifiedHtml = modifiedHtml.replace('<head>', '<head>' + metaTags);
          
          // Add special style to fix content visibility
          modifiedHtml = modifiedHtml.replace('</head>', `
          <style>
            /* Fix for content visibility without JavaScript */
            html:not(:has(script[data-sveltekit-hydrate])) body > div[style*="display: contents"] {
              display: block !important;
            }
            noscript {
              display: block !important;
            }
          </style>
          </head>`);
        }
        
        // Insert no-JS fallback content for all paths
        modifiedHtml = modifiedHtml.replace('<div style="display: contents">', 
          `<div style="display: contents">
          <noscript>${noJsContent}</noscript>`);
        
        return modifiedHtml;
      }
    });
}