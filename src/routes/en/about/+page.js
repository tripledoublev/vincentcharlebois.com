import { buildBreadcrumbSchema } from '$lib/seo.js';

export function load({ url }) {
	const title = 'About Vincent Charlebois';
	const description =
		'About Vincent Charlebois: software developer building computers for agents, protocol artist, retired tree planter.';

	return {
		seo: {
			title,
			description,
			currentUrl: `https://www.vincentcharlebois.com${url.pathname}`,
			schema: [
				buildBreadcrumbSchema([
					{ name: 'Home', path: '/en' },
					{ name: 'About', path: '/en/about' }
				])
			]
		}
	};
}
