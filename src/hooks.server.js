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
			'Montreal-based software developer and artist-researcher. Core storage, computers for agents, and protocol art in the browser.',
		image: defaultImage,
		type: 'ProfilePage'
	},
	'/en': {
		lang: 'en',
		title: 'Vincent Charlebois - Ecologies, technologies;',
		description:
			'Software developer and artist-researcher in Montreal. Core storage, computers for agents, and protocol art in the browser.',
		image: englishImage,
		type: 'ProfilePage'
	},
	'/fr': {
		lang: 'fr',
		title: 'Vincent Charlebois - Écologies, technologies;',
		description:
			'Développeur logiciel et artiste-chercheur à Montréal. Systèmes de stockage, ordinateurs pour agents et art de protocole dans le navigateur.',
		image: frenchImage,
		type: 'ProfilePage'
	},
	'/about': {
		lang: 'en',
		title: 'About - Vincent Charlebois',
		description:
			'About Vincent Charlebois: software developer building computers for agents, protocol artist, retired tree planter.',
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
			'About Vincent Charlebois: software developer building computers for agents, protocol artist, retired tree planter.',
		image: englishImage,
		breadcrumbs: [
			{ name: 'Home', path: '/en' },
			{ name: 'About', path: '/en/about' }
		]
	},
	'/fr/a-propos': {
		lang: 'fr',
		title: 'À propos - Vincent Charlebois',
		description:
			"À propos de Vincent Charlebois : développeur logiciel qui construit des ordinateurs pour agents, artiste de protocoles, planteur d'arbres à la retraite.",
		image: frenchImage,
		breadcrumbs: [
			{ name: 'Accueil', path: '/fr' },
			{ name: 'À propos', path: '/fr/a-propos' }
		]
	},
	'/projects': {
		lang: 'en',
		title: 'Projects - Vincent Charlebois',
		description:
			'Storage for computers that agents live in, and protocol art: browser-native works where systems and protocols become environments.',
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
			'Storage for computers that agents live in, and protocol art: browser-native works where systems and protocols become environments.',
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
			"Du stockage pour les ordinateurs qu'habitent des agents, et de l'art de protocole : des œuvres web où systèmes et protocoles deviennent des milieux.",
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
			'Selected work by Vincent Charlebois across protocol art, web art, and agentic interaction design.',
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
		description: 'Get in touch with Vincent Charlebois, software developer and artist-researcher.',
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
		description: 'Get in touch with Vincent Charlebois, software developer and artist-researcher.',
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
		description: 'Contactez Vincent Charlebois, développeur logiciel et artiste-chercheur.',
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
		['Vision', 'https://vision.xx-c.art'],
		['Zero', 'https://zero.xx-c.art'],
		['Mimesis', 'https://mimesis.xx-c.art'],
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
					? 'Développeur logiciel et artiste-chercheur. Systèmes de stockage, ordinateurs pour agents et art de protocole.'
					: 'Software developer and artist-researcher. Core storage, computers for agents, and protocol art.',
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
			<link rel="alternate" type="text/markdown" hreflang="fr" href="${siteUrl}/portfolio-fr.md" title="Portfolio lisible par machine" />
			<link rel="me" href="https://github.com/tripledoublev" />
		<link rel="me" href="https://bsky.app/profile/charlebois.info" />
		<link rel="me" href="https://www.charlebois.info/" />
		<link rel="me" href="https://www.are.na/vincent-charlebois" />
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
	          <li><a href="/portfolio-fr.md">Portfolio markdown FR</a> - version française structurée pour agents.</li>
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
        <p>Montreal-based software developer and artist-researcher. Core storage, computers for agents, and protocol art in the browser.</p>
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
        <p>Software developer and artist-researcher. Core storage, computers for agents, and protocol art.</p>
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
        <p>Développeur logiciel et artiste-chercheur. Systèmes de stockage, ordinateurs pour agents et art de protocole.</p>
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
        <p>I'm a software developer and artist-researcher based in Montreal. I build computers for agents: machines that autonomous software can inhabit for a long time. My part is core storage, the state that has to survive for that to work.</p>
        <p>I also make protocol art. I treat systems and protocols as environments: the work is a set of rules, and the art is whatever keeps happening once people and machines start following them. Before all this, I planted over a million trees.</p>
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
        <p>Je suis développeur logiciel et artiste-chercheur, basé à Montréal. Je construis des ordinateurs pour agents : des machines que des logiciels autonomes peuvent habiter longtemps. Ma part, c'est le stockage : l'état qui doit survivre pour que ça fonctionne.</p>
        <p>Je fais aussi de l'art de protocole. Je traite les systèmes et les protocoles comme des milieux : l'œuvre est un ensemble de règles, et l'art est ce qui continue de se produire une fois que des personnes et des machines se mettent à les suivre. Avant tout ça, j'ai planté plus d'un million d'arbres.</p>
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
        <p>I build computers for agents, working on the storage underneath them. I also make protocol art: browser-native works about artificial intelligence where the rules are the medium.</p>
        <p>Go to <a href="https://vincentcharlebois.net">vincentcharlebois.net</a> for earlier research-driven work; tell your AI agent to read <code>portfolio.md</code> for a short selection of current projects.</p>
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
        <p>Je construis des ordinateurs pour agents, en travaillant sur le stockage en dessous. Je fais aussi de l'art de protocole : des œuvres natives du navigateur sur l'intelligence artificielle, où les règles sont le médium.</p>
        <p>Consultez <a href="https://vincentcharlebois.net">vincentcharlebois.net</a> pour les travaux issus de la recherche-création; dites à votre agent IA de lire <code>portfolio.md</code> pour une courte sélection de projets actuels.</p>
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
          <a href="mailto:vincent@charlebois.info">email</a>
          <a href="/publickey">pgp</a>
          <a href="https://github.com/tripledoublev" target="_blank" rel="me">github</a>
          <a href="https://www.linkedin.com/in/vincent-charlebois/" target="_blank">linkedin</a>
          <a href="https://chateau.social/@v" target="_blank" rel="me">mastodon</a>
          <a href="https://bsky.app/profile/charlebois.info" target="_blank" rel="me">bluesky</a>
          <a href="https://www.are.na/vincent-charlebois" target="_blank" rel="me">are.na</a>
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
          <a href="mailto:vincent@charlebois.info">email</a>
          <a href="/publickey">pgp</a>
          <a href="https://github.com/tripledoublev" target="_blank" rel="me">github</a>
          <a href="https://www.linkedin.com/in/vincent-charlebois/" target="_blank">linkedin</a>
          <a href="https://chateau.social/@v" target="_blank" rel="me">mastodon</a>
          <a href="https://bsky.app/profile/charlebois.info" target="_blank" rel="me">bluesky</a>
          <a href="https://www.are.na/vincent-charlebois" target="_blank" rel="me">are.na</a>
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
        <p>I'm a software developer and artist-researcher based in Montreal. I build computers for agents: machines that autonomous software can inhabit for a long time. My part is core storage, the state that has to survive for that to work.</p>
        <p>I also make protocol art. I treat systems and protocols as environments: the work is a set of rules, and the art is whatever keeps happening once people and machines start following them. Before all this, I planted over a million trees.</p>
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
        <p>I build computers for agents, working on the storage underneath them. I also make protocol art: browser-native works about artificial intelligence where the rules are the medium.</p>
        <p>Go to <a href="https://vincentcharlebois.net">vincentcharlebois.net</a> for earlier research-driven work; tell your AI agent to read <code>portfolio.md</code> for a short selection of current projects.</p>
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
          <a href="mailto:vincent@charlebois.info">email</a>
          <a href="https://github.com/tripledoublev" target="_blank" rel="me">github</a>
          <a href="https://www.linkedin.com/in/vincent-charlebois/" target="_blank">linkedin</a>
          <a href="https://www.charlebois.info/" target="_blank" rel="me">.info</a>
          <a href="https://www.vincentcharlebois.net/" target="_blank" rel="me">.net</a>
          <a href="https://bsky.app/profile/charlebois.info" target="_blank" rel="me">bluesky</a>
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
				? 'Développeur logiciel et artiste-chercheur. Systèmes de stockage, ordinateurs pour agents et art de protocole.'
				: 'Software developer and artist-researcher. Core storage, computers for agents, and protocol art.';

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
