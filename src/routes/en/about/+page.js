import { buildBreadcrumbSchema } from '$lib/seo.js';

export function load({ url }) {
	const title = 'About Vincent Charlebois';
	const description =
		'About Vincent Charlebois - Artist, creative technologist, and member of Hypha Worker Co-operative.';

	return {
		seo: {
			title,
			description,
			currentUrl: `https://vincentcharlebois.com${url.pathname}`,
			schema: [
				buildBreadcrumbSchema([
					{ name: 'Home', path: '/en' },
					{ name: 'About', path: '/en/about' }
				])
			]
		}
	};
}
