/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	// Determine the language from the URL path
	const path = event.url.pathname;
	let lang = 'en'; // Default language

	// Check for language in path or use a heuristic based on known paths
	if (path.includes('/fr/') || path.startsWith('/fr')) {
		lang = 'fr';
	}

	// Define meta tags for each page (server-side for social media crawlers)
	let metaTags = '';
	const currentUrl = `https://vincentcharlebois.com${path}`;

	// Page-specific meta tags
	if (path === '/en' || path === '/en/') {
		const title = 'Vincent Charlebois — Research → Product;';
		const description =
			'Vincent Charlebois works at the boundary between research and deployment, building production-grade AI systems from complex technical research.';
		const image = 'https://vincentcharlebois.com/vincent-charlebois-point-com-en.png';
		metaTags = `
			<title>${title}</title>
			<meta name="description" content="${description}" />
			<meta property="og:title" content="${title}" />
			<meta property="og:description" content="${description}" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="${currentUrl}" />
			<meta property="og:image" content="${image}" />
			<meta property="twitter:title" content="${title}" />
			<meta property="twitter:description" content="${description}" />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="${currentUrl}" />
			<meta property="twitter:image" content="${image}" />
			<link rel="canonical" href="${currentUrl}" />
		`;
	} else if (path === '/fr' || path === '/fr/') {
		const title = 'Vincent Charlebois — Recherche → Produit;';
		const description =
			"Vincent Charlebois travaille à la frontière entre recherche et déploiement, et construit des systèmes d'IA de niveau production à partir de recherche technique complexe.";
		const image = 'https://vincentcharlebois.com/vincent-charlebois-point-com-fr.png';
		metaTags = `
			<title>${title}</title>
			<meta name="description" content="${description}" />
			<meta property="og:title" content="${title}" />
			<meta property="og:description" content="${description}" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="${currentUrl}" />
			<meta property="og:image" content="${image}" />
			<meta property="twitter:title" content="${title}" />
			<meta property="twitter:description" content="${description}" />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="${currentUrl}" />
			<meta property="twitter:image" content="${image}" />
			<link rel="canonical" href="${currentUrl}" />
		`;
	} else if (path === '/about' || path === '/about/') {
		const title = 'About — Vincent Charlebois';
		const description =
			'About Vincent Charlebois — research-to-product translator and AI systems architect focused on shipping deployable systems.';
		const image = 'https://vincentcharlebois.com/vincent-charlebois-point-com-en.png';
		metaTags = `
			<title>${title}</title>
			<meta name="description" content="${description}" />
			<meta property="og:title" content="${title}" />
			<meta property="og:description" content="${description}" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="${currentUrl}" />
			<meta property="og:image" content="${image}" />
			<meta property="twitter:title" content="${title}" />
			<meta property="twitter:description" content="${description}" />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="${currentUrl}" />
			<meta property="twitter:image" content="${image}" />
			<link rel="canonical" href="${currentUrl}" />
		`;
	} else if (path === '/projects' || path === '/projects/') {
		const title = 'Projects — Vincent Charlebois';
		const description =
			'Technical projects spanning agentic AI systems, distributed infrastructure, and experimental orchestration architectures.';
		const image = 'https://vincentcharlebois.com/vincent-charlebois-point-com-en.png';
		metaTags = `
			<title>${title}</title>
			<meta name="description" content="${description}" />
			<meta property="og:title" content="${title}" />
			<meta property="og:description" content="${description}" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="${currentUrl}" />
			<meta property="og:image" content="${image}" />
			<meta property="twitter:title" content="${title}" />
			<meta property="twitter:description" content="${description}" />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="${currentUrl}" />
			<meta property="twitter:image" content="${image}" />
			<link rel="canonical" href="${currentUrl}" />
		`;
	} else if (path === '/contact' || path === '/contact/') {
		const title = 'Contact — Vincent Charlebois';
		const description =
			'Get in touch with Vincent Charlebois — AI systems architect and research-to-product translator. Find links to GitHub, LinkedIn, CV and more.';
		const image = 'https://vincentcharlebois.com/vincent-charlebois-point-com-en.png';
		metaTags = `
			<title>${title}</title>
			<meta name="description" content="${description}" />
			<meta property="og:title" content="${title}" />
			<meta property="og:description" content="${description}" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="${currentUrl}" />
			<meta property="og:image" content="${image}" />
			<meta property="twitter:title" content="${title}" />
			<meta property="twitter:description" content="${description}" />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="${currentUrl}" />
			<meta property="twitter:image" content="${image}" />
			<link rel="canonical" href="${currentUrl}" />
		`;
	} else {
		// Default meta tags for other pages
		const title = 'Vincent Charlebois';
		const description =
			lang === 'fr'
				? 'Systèmes IA agentiques, architectures distribuées et exécution technique orientée produit pour systèmes complexes et à grande échelle'
				: 'Agentic AI systems, distributed architectures, and product-driven technical execution for complex and large-scale systems';
		const image = 'https://vincentcharlebois.com/vincent-charlebois-point-com.jpg';
		metaTags = `
			<title>${title}</title>
			<meta name="description" content="${description}" />
			<meta property="og:title" content="${title}" />
			<meta property="og:description" content="${description}" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="${currentUrl}" />
			<meta property="og:image" content="${image}" />
			<meta property="twitter:title" content="${title}" />
			<meta property="twitter:description" content="${description}" />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="${currentUrl}" />
			<meta property="twitter:image" content="${image}" />
			<link rel="canonical" href="${currentUrl}" />
		`;
	}

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
        <p>Montreal-based AI systems engineer, software developer, and artist. Builds production-grade agentic AI systems, distributed architectures, and cooperative digital infrastructure. Member of Hypha Worker Co-operative.</p>
        <p>Please select your language / Veuillez choisir votre langue</p>
        <div>
          <a href="/en">English</a>
          <a href="/fr">Français</a>
        </div>
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
        <p>Agentic AI systems, distributed architectures, and product-driven technical execution for complex and large-scale systems</p>
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
        <p>Systèmes IA agentiques, architectures distribuées et exécution technique orientée produit pour systèmes complexes et à grande échelle</p>
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
        <p>I'm a research-to-product translator and AI systems architect based in Montreal. I work at the boundary between research and deployment, building production-grade systems from complex technical ideas.</p>
        <p>As a member of <a href="https://hypha.coop">Hypha Worker Co-operative</a>, I contribute to digital infrastructures that support coordination, autonomy, and collective ownership.</p>
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
        <p>Je suis un traducteur recherche-produit et architecte de systèmes IA basé à Montréal. Je travaille à la frontière entre la recherche et le déploiement, en construisant des systèmes de production à partir d'idées techniques complexes.</p>
        <p>En tant que membre de la <a href="https://hypha.coop">coopérative de travailleurs Hypha</a>, je contribue à des infrastructures numériques qui soutiennent la coordination, l'autonomie et la propriété collective.</p>
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
        <p>I design and implement AI systems and distributed infrastructures that move from concept to real-world use.</p>
        <p>See <a href="https://hypha.coop/work">hypha.coop/work</a> for cooperative projects and <a href="https://vincentcharlebois.net">vincentcharlebois.net</a> for earlier research-driven work.</p>
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
        <p>Je conçois et implémente des systèmes IA et des infrastructures distribuées qui passent du concept à l'usage réel.</p>
        <p>Voir <a href="https://hypha.coop/work">hypha.coop/work</a> pour les projets coopératifs et <a href="https://vincentcharlebois.net">vincentcharlebois.net</a> pour les travaux antérieurs de recherche.</p>
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
	// Root about page (no language prefix)
	else if (path === '/about' || path === '/about/') {
		noJsContent = `
      ${fallbackCSS}
      <div class="no-js-fallback">
        <h1>about vincent charlebois</h1>
        <p>I'm a research-to-product translator and AI systems architect based in Montreal. I work at the boundary between research and deployment, building production-grade systems from complex technical ideas.</p>
        <p>As a member of <a href="https://hypha.coop">Hypha Worker Co-operative</a>, I contribute to digital infrastructures that support coordination, autonomy, and collective ownership.</p>
        <div class="back-link">
          <a href="/en/about">Full page</a>
        </div>
      </div>
      `;
	}
	// Root projects page (no language prefix)
	else if (path === '/projects' || path === '/projects/') {
		noJsContent = `
      ${fallbackCSS}
      <div class="no-js-fallback">
        <h1>projects by vincent charlebois</h1>
        <p>I design and implement AI systems and distributed infrastructures that move from concept to real-world use.</p>
        <p>See <a href="https://hypha.coop/work">hypha.coop/work</a> for cooperative projects and <a href="https://vincentcharlebois.net">vincentcharlebois.net</a> for earlier research-driven work.</p>
        <div class="back-link">
          <a href="/en/projects">Full page</a>
        </div>
      </div>
      `;
	}
	// Root contact page (no language prefix)
	else if (path === '/contact' || path === '/contact/') {
		noJsContent = `
      ${fallbackCSS}
      <div class="no-js-fallback">
        <h1>contact vincent charlebois</h1>
        <p>Get in touch:</p>
        <div class="contact-links">
          <a href="https://hypha.coop/" target="_blank">hypha</a>
          <a href="mailto:vincent@charlebois.info">email</a>
          <a href="https://github.com/tripledoublev" target="_blank">github</a>
          <a href="https://www.linkedin.com/in/vincent-charlebois/" target="_blank">linkedin</a>
          <a href="https://bsky.app/profile/charlebois.info" target="_blank">bluesky</a>
        </div>
        <div class="back-link">
          <a href="/en/contact">Full page</a>
        </div>
      </div>
      `;
	}
	// Fallback for any other pages
	else if (noJsContent === '') {
		const homePath = lang === 'fr' ? '/fr' : '/en';
		const homeText = lang === 'fr' ? "Retour à l'accueil" : 'Back to home';
		const description =
			lang === 'fr'
				? 'Systèmes IA agentiques, architectures distribuées et exécution technique orientée produit pour systèmes complexes et à grande échelle'
				: 'Agentic AI systems, distributed architectures, and product-driven technical execution for complex and large-scale systems';

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

			// Inject meta tags and styles into head
			if (modifiedHtml.includes('<head>')) {
				modifiedHtml = modifiedHtml.replace(
					'</head>',
					`
          ${metaTags}
          <style>
            /* Fix for content visibility without JavaScript */
            html:not(:has(script[data-sveltekit-hydrate])) body > div[style*="display: contents"] {
              display: block !important;
            }
            noscript {
              display: block !important;
            }
          </style>
          </head>`
				);
			}

			// Insert no-JS fallback content for all paths
			modifiedHtml = modifiedHtml.replace(
				'<div style="display: contents">',
				`<div style="display: contents">
          <noscript>${noJsContent}</noscript>`
			);

			return modifiedHtml;
		}
	});
}
