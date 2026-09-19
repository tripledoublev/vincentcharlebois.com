import { buildBreadcrumbSchema } from '$lib/seo.js';

export function load({ url }) {
	const title = 'Projects Vincent Charlebois';
	const description =
		'Storage for computers that agents live in, and protocol art: browser-native works where systems and protocols become environments.';

	return {
		seo: {
			title,
			description,
			currentUrl: `https://www.vincentcharlebois.com${url.pathname}`,
			schema: [
				buildBreadcrumbSchema([
					{ name: 'Home', path: '/en' },
					{ name: 'Projects', path: '/en/projects' }
				])
			]
		}
	};
}
