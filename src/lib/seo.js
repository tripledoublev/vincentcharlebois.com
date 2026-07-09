export const siteUrl = 'https://www.vincentcharlebois.com';
export const portraitImageUrl = `${siteUrl}/vincent-charlebois-portrait.jpg`;
export const schemaDateModified = '2026-07-09T00:00:00-04:00';

export const personSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	'@id': `${siteUrl}/#vincent-charlebois`,
	name: 'Vincent Charlebois',
	url: siteUrl,
	image: {
		'@type': 'ImageObject',
		'@id': `${portraitImageUrl}#image`,
		url: portraitImageUrl,
		contentUrl: portraitImageUrl,
		name: 'Vincent Charlebois official portrait',
		caption: 'Portrait of Vincent Charlebois'
	},
	email: 'mailto:vincent@charlebois.info',
	jobTitle: ['AI Systems Engineer', 'Software Engineer', 'Artist', 'Agentic Interaction Designer'],
	description:
		'Montreal-based software engineer, artist, and agentic interaction designer building deployable AI systems, distributed architectures, product-minded infrastructure, and browser-native artworks.',
	sameAs: [
		'https://github.com/tripledoublev',
		'https://www.linkedin.com/in/vincent-charlebois/',
		'https://x.com/vincencharleboi',
		'https://chateau.social/@v',
		'https://bsky.app/profile/charlebois.info',
		'https://www.are.na/vincent-charlebois',
		'https://www.instagram.com/ffforests/',
		'https://www.charlebois.info/',
		'https://vincent.charlebois.info',
		'https://www.vincentcharlebois.net/'
	],
	identifier: [
		{
			'@type': 'PropertyValue',
			propertyID: 'AT Protocol DID',
			value: 'did:plc:y3lae7hmqiwyq7w2v3bcb2c2'
		},
		{
			'@type': 'PropertyValue',
			propertyID: 'AT Protocol handle',
			value: 'charlebois.info',
			url: 'https://bsky.app/profile/charlebois.info'
		}
	],
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
		'Agentic AI',
		'Agentic AI Systems',
		'Agentic Interaction Design',
		'LLM orchestration',
		'Transactional Aesthetics',
		'AT Protocol',
		'Decentralized Identity',
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
		'Personal website and portfolio for Vincent Charlebois, covering agentic AI systems, software engineering, distributed infrastructure, product-minded technology, and web art.',
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
	const isProfilePage = type === 'ProfilePage';

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
		...(isProfilePage
			? {
					mainEntity: {
						'@id': `${siteUrl}/#vincent-charlebois`
					}
				}
			: {
					author: {
						'@id': `${siteUrl}/#vincent-charlebois`
					}
				}),
		dateModified: schemaDateModified
	};
}
