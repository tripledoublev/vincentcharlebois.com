export const siteUrl = 'https://www.vincentcharlebois.com';

export const personSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	'@id': `${siteUrl}/#vincent-charlebois`,
	name: 'Vincent Charlebois',
	url: siteUrl,
	image: `${siteUrl}/vincent-charlebois-point-com.jpg`,
	email: 'mailto:vincent@charlebois.info',
	jobTitle: ['AI Systems Engineer', 'Software Engineer', 'Artist', 'Agentic Interaction Designer'],
	description:
		'Montreal-based software engineer, artist, and agentic interaction designer building deployable AI systems, distributed architectures, cooperative digital infrastructure, and browser-native artworks.',
	sameAs: [
		'https://github.com/tripledoublev',
		'https://www.linkedin.com/in/vincent-charlebois/',
		'https://x.com/vincencharleboi',
		'https://chateau.social/@v',
		'https://bsky.app/profile/charlebois.info',
		'https://www.instagram.com/ffforests/',
		'https://vincent.charlebois.info',
		'https://vincentcharlebois.net'
	],
	worksFor: {
		'@type': 'Organization',
		name: 'Hypha Worker Co-operative',
		url: 'https://hypha.coop'
	},
	memberOf: {
		'@type': 'Organization',
		name: 'Hypha Worker Co-operative',
		url: 'https://hypha.coop'
	},
	alumniOf: [
		{
			'@type': 'CollegeOrUniversity',
			name: 'Institute for Advanced Architecture of Catalonia',
			url: 'https://iaac.net'
		},
		{
			'@type': 'CollegeOrUniversity',
			name: 'Concordia University',
			url: 'https://www.concordia.ca'
		}
	],
	knowsLanguage: ['English', 'French'],
	knowsAbout: [
		'Agentic AI Systems',
		'Agentic Interaction Design',
		'Distributed Architectures',
		'Software Engineering',
		'Product Development',
		'Research-to-Product Translation',
		'Cooperative Technology',
		'Ecological Systems',
		'Web Art',
		'Human-Agent Collaboration',
		'AI Observability'
	],
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Montreal',
		addressCountry: 'CA'
	}
};

export const websiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	'@id': `${siteUrl}/#website`,
	name: 'Vincent Charlebois',
	url: siteUrl,
	inLanguage: ['en', 'fr'],
	description:
		'Personal website and portfolio for Vincent Charlebois, covering agentic AI systems, software engineering, distributed infrastructure, cooperative technology, and web art.',
	author: {
		'@id': `${siteUrl}/#vincent-charlebois`
	},
	publisher: {
		'@id': `${siteUrl}/#vincent-charlebois`
	}
};

/**
 * Builds a schema.org BreadcrumbList JSON-LD object for a given page path.
 * @param {Array<{name: string, path: string}>} items - Ordered list of breadcrumb entries.
 * @returns {object} JSON-LD BreadcrumbList schema object.
 */
export function buildBreadcrumbSchema(items = []) {
	const base = siteUrl.replace(/\/$/, '');
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items
			.filter((item) => item?.name && item?.path)
			.map((item, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				name: item.name,
				item: `${base}/${item.path.replace(/^\/+/, '').replace(/\/+$/, '')}`
			}))
	};
}

/**
 * Builds a schema.org WebPage JSON-LD object for a route.
 * @param {{title: string, description: string, path: string, lang?: string, type?: string}} page
 * @returns {object} JSON-LD WebPage schema object.
 */
export function buildWebPageSchema({ title, description, path, lang = 'en', type = 'WebPage' }) {
	const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+/, '').replace(/\/+$/, '')}/`;
	const url = `${siteUrl}${normalizedPath === '/' ? '/' : normalizedPath}`;

	return {
		'@context': 'https://schema.org',
		'@type': type,
		'@id': `${url}#webpage`,
		url,
		name: title,
		headline: title,
		description,
		inLanguage: lang,
		isPartOf: {
			'@id': `${siteUrl}/#website`
		},
		about: {
			'@id': `${siteUrl}/#vincent-charlebois`
		},
		author: {
			'@id': `${siteUrl}/#vincent-charlebois`
		},
		dateModified: '2026-05-17'
	};
}
