export const siteUrl = 'https://vincentcharlebois.com';

export const personSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Vincent Charlebois',
	url: siteUrl,
	jobTitle: 'AI Systems Engineer',
	description:
		'Agentic AI systems, distributed architectures, and product-driven technical execution for complex and large-scale systems',
	sameAs: [
		'https://github.com/tripledoublev',
		'https://www.linkedin.com/in/vincent-charlebois/',
		'https://x.com/vincencharleboi',
		'https://bsky.app/profile/charlebois.info',
		'https://www.instagram.com/ffforests/'
	],
	worksFor: {
		'@type': 'Organization',
		name: 'Hypha Worker Co-operative',
		url: 'https://hypha.coop'
	},
	knowsLanguage: ['English', 'French'],
	knowsAbout: [
		'Agentic AI Systems',
		'Distributed Architectures',
		'Software Engineering',
		'Product Development',
		'Research-to-Product Translation',
		'Cooperative Technology',
		'Ecological Systems'
	],
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Montreal',
		addressCountry: 'CA'
	}
};

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
