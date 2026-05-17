import portfolioMarkdown from '$lib/content/portfolio.md?raw';
import {
	buildBreadcrumbSchema,
	buildWebPageSchema,
	personSchema,
	siteUrl,
	websiteSchema
} from '$lib/seo.js';
import { marked } from 'marked';

const portfolioBody = portfolioMarkdown.replace(/^---[\s\S]*?---\s*/, '');
const portfolioNoJsHtml = marked.parse(portfolioBody, {
	breaks: true,
	gfm: true,
	headerIds: false,
	mangle: false
});

const defaultImage = `${siteUrl}/vincent-charlebois-point-com.jpg`;
const englishImage = `${siteUrl}/vincent-charlebois-point-com-en.png`;
const frenchImage = `${siteUrl}/vincent-charlebois-point-com-fr.png`;

const routeDetails = {
	'/': {
		lang: 'en',
		title: 'Vincent Charlebois',
		description:
			'Montreal-based software engineer, artist, and agentic interaction designer building deployable AI systems, cooperative digital infrastructure, and browser-native artworks.',
		image: defaultImage,
		type: 'ProfilePage'
	},
	'/en': {
		lang: 'en',
		title: 'Vincent Charlebois - Research to Product',
		description:
			'Research-to-product translator and AI systems architect building deployable software and infrastructure from complex technical research.',
		image: englishImage,
		type: 'ProfilePage'
	},
	'/fr': {
		lang: 'fr',
		title: 'Vincent Charlebois - Recherche vers produit',
		description:
			'Traducteur recherche-produit et architecte de systèmes IA construisant des logiciels et infrastructures déployables à partir de recherche technique complexe.',
		image: frenchImage,
		type: 'ProfilePage'
	},
	'/about': {
		lang: 'en',
		title: 'About - Vincent Charlebois',
		description:
			'About Vincent Charlebois - research-to-product translator and AI systems architect focused on shipping deployable systems.',
		image: englishImage,
		breadcrumbs: [
			{ name: 'Home', path: '/' },
			{ name: 'About', path: '/about' }
		]
	},
	'/en/about': {
		lang: 'en',
		title: 'About - Vincent Charlebois',
		description:
			'About Vincent Charlebois - research-to-product translator and AI systems architect focused on shipping deployable systems.',
		image: englishImage,
		breadcrumbs: [
			{ name: 'Home', path: '/en' },
			{ name: 'About', path: '/en/about' }
		]
	},
	'/fr/a-propos': {
		lang: 'fr',
		title: 'A propos - Vincent Charlebois',
		description:
			'A propos de Vincent Charlebois - traducteur recherche-produit et architecte de systèmes IA.',
		image: frenchImage,
		breadcrumbs: [
			{ name: 'Accueil', path: '/fr' },
			{ name: 'A propos', path: '/fr/a-propos' }
		]
	},
	'/projects': {
		lang: 'en',
		title: 'Projects - Vincent Charlebois',
		description:
			'Technical projects spanning agentic AI systems, distributed infrastructure, and experimental orchestration architectures.',
		image: englishImage,
		type: 'CollectionPage',
		breadcrumbs: [
			{ name: 'Home', path: '/' },
			{ name: 'Projects', path: '/projects' }
		]
	},
	'/en/projects': {
		lang: 'en',
		title: 'Projects - Vincent Charlebois',
		description:
			'Technical projects spanning agentic AI systems, distributed infrastructure, and experimental orchestration architectures.',
		image: englishImage,
		type: 'CollectionPage',
		breadcrumbs: [
			{ name: 'Home', path: '/en' },
			{ name: 'Projects', path: '/en/projects' }
		]
	},
	'/fr/projets': {
		lang: 'fr',
		title: 'Projets - Vincent Charlebois',
		description:
			"Projets techniques couvrant les systèmes IA agentiques, l'infrastructure distribuée et les architectures d'orchestration expérimentales.",
		image: frenchImage,
		type: 'CollectionPage',
		breadcrumbs: [
			{ name: 'Accueil', path: '/fr' },
			{ name: 'Projets', path: '/fr/projets' }
		]
	},
	'/portfolio': {
		lang: 'en',
		title: 'Portfolio - Vincent Charlebois',
		description:
			'Selected work by Vincent Charlebois across web art, UX, and agentic interaction design.',
		image: englishImage,
		type: 'CollectionPage',
		breadcrumbs: [
			{ name: 'Home', path: '/' },
			{ name: 'Portfolio', path: '/portfolio' }
		]
	},
	'/contact': {
		lang: 'en',
		title: 'Contact - Vincent Charlebois',
		description:
			'Get in touch with Vincent Charlebois - AI systems architect and research-to-product translator.',
		image: englishImage,
		type: 'ContactPage',
		breadcrumbs: [
			{ name: 'Home', path: '/' },
			{ name: 'Contact', path: '/contact' }
		]
	},
	'/en/contact': {
		lang: 'en',
		title: 'Contact - Vincent Charlebois',
		description:
			'Get in touch with Vincent Charlebois - AI systems architect and research-to-product translator.',
		image: englishImage,
		type: 'ContactPage',
		breadcrumbs: [
			{ name: 'Home', path: '/en' },
			{ name: 'Contact', path: '/en/contact' }
		]
	},
	'/fr/contact': {
		lang: 'fr',
		title: 'Contact - Vincent Charlebois',
		description:
			'Contacter Vincent Charlebois - architecte de systèmes IA et traducteur recherche-produit.',
		image: frenchImage,
		type: 'ContactPage',
		breadcrumbs: [
			{ name: 'Accueil', path: '/fr' },
			{ name: 'Contact', path: '/fr/contact' }
		]
	},
	'/portal': {
		lang: 'en',
		title: 'Portal - Vincent Charlebois',
		description: 'Art of No Likes web portal by Vincent Charlebois.',
		image: defaultImage,
		type: 'WebPage'
	},
	'/en/portal': {
		lang: 'en',
		title: 'Portal - Vincent Charlebois',
		description: 'Art of No Likes web portal by Vincent Charlebois.',
		image: englishImage,
		type: 'WebPage'
	},
	'/fr/portail': {
		lang: 'fr',
		title: 'Portail - Vincent Charlebois',
		description: 'Portail web Art of No Likes par Vincent Charlebois.',
		image: frenchImage,
		type: 'WebPage'
	},
	'/publickey': {
		lang: 'en',
		title: 'PGP Public Key - Vincent Charlebois',
		description: 'Vincent Charlebois PGP public key for secure communication.',
		image: defaultImage,
		type: 'WebPage'
	}
};

const selectedWorksSchema = {
	'@context': 'https://schema.org',
	'@type': 'ItemList',
	'@id': `${siteUrl}/portfolio/#selected-work`,
	name: 'Selected work by Vincent Charlebois',
	itemListElement: [
		['XX C', 'https://xx-c.art/a-z'],
		['Doxa', 'https://doxa.xx-c.art'],
		['Nego', 'https://nego.xx-c.art'],
		['v100', 'https://github.com/tripledoublev/v100'],
		['RooLLM', 'https://github.com/hyphacoop/RooLLM']
	].map(([name, url], index) => ({
		'@type': 'ListItem',
		position: index + 1,
		item: {
			'@type': 'CreativeWork',
			name,
			url,
			creator: {
				'@id': `${siteUrl}/#vincent-charlebois`
			}
		}
	}))
};

function normalizePath(path) {
	if (path === '/') return '/';
	return path.replace(/\/+$/, '');
}

function detailsForPath(path, lang) {
	const normalizedPath = normalizePath(path);
	return (
		routeDetails[normalizedPath] ?? {
			lang,
			title: 'Vincent Charlebois',
			description:
				lang === 'fr'
					? 'Systèmes IA agentiques, architectures distribuées et exécution technique orientée produit pour systèmes complexes et à grande échelle'
					: 'Agentic AI systems, distributed architectures, and product-driven technical execution for complex and large-scale systems',
			image: lang === 'fr' ? frenchImage : defaultImage,
			type: 'WebPage'
		}
	);
}

function jsonLd(schema) {
	return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

function buildMetaTags(details, currentUrl) {
	return `
		<title>${details.title}</title>
		<meta name="description" content="${details.description}" />
		<meta property="og:title" content="${details.title}" />
		<meta property="og:description" content="${details.description}" />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="${currentUrl}" />
		<meta property="og:image" content="${details.image}" />
		<meta property="twitter:title" content="${details.title}" />
		<meta property="twitter:description" content="${details.description}" />
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:url" content="${currentUrl}" />
		<meta property="twitter:image" content="${details.image}" />
		<link rel="canonical" href="${currentUrl}" />
	`;
}

function buildCommonHeadTags(path, lang) {
	const details = detailsForPath(path, lang);
	const normalizedPath = normalizePath(path);
	const schemas = [
		websiteSchema,
		personSchema,
		buildWebPageSchema({
			title: details.title,
			description: details.description,
			path: normalizedPath,
			lang: details.lang,
			type: details.type ?? 'WebPage'
		})
	];

	if (details.breadcrumbs) {
		schemas.push(buildBreadcrumbSchema(details.breadcrumbs));
	}

	if (
		normalizedPath === '/portfolio' ||
		normalizedPath.endsWith('/projects') ||
		normalizedPath.endsWith('/projets')
	) {
		schemas.push(selectedWorksSchema);
	}

	return `
		<meta name="author" content="Vincent Charlebois" />
		<meta name="robots" content="index, follow" />
		<meta property="profile:first_name" content="Vincent" />
		<meta property="profile:last_name" content="Charlebois" />
		<link rel="alternate" type="text/plain" href="${siteUrl}/llms.txt" title="LLM-readable site guide" />
		<link rel="alternate" type="text/plain" href="${siteUrl}/llms-full.txt" title="Full LLM context" />
		<link rel="alternate" type="text/markdown" href="${siteUrl}/portfolio.md" title="Machine-readable portfolio" />
		<link rel="me" href="https://github.com/tripledoublev" />
		<link rel="me" href="https://bsky.app/profile/charlebois.info" />
		<link rel="me" href="https://chateau.social/@v" />
		${schemas.map(jsonLd).join('\n')}
		${details.image ? `<meta property="og:image:alt" content="${details.title}" />` : ''}
	`;
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	// Determine the language from the URL path
	const path = event.url.pathname;
	let lang = 'en'; // Default language

	// Check for language in path or use a heuristic based on known paths
	if (path.includes('/fr/') || path.startsWith('/fr')) {
		lang = 'fr';
	}

	const currentUrl = `${siteUrl}${path}`;
	const metaTags = buildMetaTags(detailsForPath(path, lang), currentUrl);
	const commonHeadTags = buildCommonHeadTags(path, lang);

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
        .no-js-portfolio {
          text-align: left;
          font-family: monospace, sans-serif;
        }
        .no-js-portfolio h1,
        .no-js-portfolio h2,
        .no-js-portfolio h3 {
          text-align: left;
          margin: 2.5rem 0 1rem;
        }
        .no-js-portfolio p {
          text-align: left;
          margin: 0 0 1.5rem;
        }
        .no-js-portfolio ul {
          margin: 0 0 1.5rem 1.5rem;
        }
        .no-js-portfolio .back-link {
          text-align: right;
          margin-bottom: 2rem;
        }
        .agent-discovery {
          border-top: 1px solid #121212;
          margin-top: 1rem;
          padding-top: 1.5rem;
        }
        .agent-discovery h2 {
          font-style: normal;
          font-size: 1.1rem;
          margin: 0 0 1rem;
          text-align: left;
        }
        .agent-discovery p,
        .agent-discovery ul {
          margin: 0 0 1rem;
          text-align: left;
        }
        .agent-discovery ul {
          list-style: disc;
          padding-left: 1.5rem;
        }
        .agent-discovery li {
          margin-bottom: 0.5rem;
        }
      </style>
    `;

	const agentDiscoveryContent = `
      <div class="no-js-fallback agent-discovery" aria-label="Machine-readable resources">
        <h2>Machine-readable discovery</h2>
        <p>This static fallback is the canonical no-JavaScript path for agents, crawlers, and text browsers.</p>
        <ul>
          <li><a href="/llms.txt">LLM guide</a> - concise site map for language models and agents.</li>
          <li><a href="/llms-full.txt">Full LLM context</a> - expanded identity, portfolio, and citation context.</li>
          <li><a href="/portfolio.md">Portfolio markdown</a> - selected work with structured frontmatter.</li>
          <li><a href="/sitemap.xml">Sitemap</a> - public URL inventory.</li>
          <li><a href="/robots.txt">Robots policy</a> - crawler access policy.</li>
        </ul>
      </div>
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
	// Root portfolio page
	else if (path === '/portfolio' || path === '/portfolio/') {
		noJsContent = `
      ${fallbackCSS}
      <div class="no-js-fallback no-js-portfolio">
        <div class="back-link">
          <a href="/portfolio.md">Machine-readable markdown</a>
        </div>
        ${portfolioNoJsHtml}
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
          ${commonHeadTags}
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
          <noscript>${noJsContent}${agentDiscoveryContent}</noscript>`
			);

			return modifiedHtml;
		}
	});
}
