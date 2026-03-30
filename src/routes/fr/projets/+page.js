import { buildBreadcrumbSchema } from '$lib/seo.js';

export function load({ url }) {
	const title = 'Projets Vincent Charlebois';
	const description =
		'Explorez les projets de Vincent Charlebois, son travail au sein de la coopérative de travailleurs Hypha et ses projets artistiques.';

	return {
		seo: {
			title,
			description,
			currentUrl: `https://vincentcharlebois.com${url.pathname}`,
			schema: [
				buildBreadcrumbSchema([
					{ name: 'Accueil', path: '/fr' },
					{ name: 'Projets', path: '/fr/projets' }
				])
			]
		}
	};
}
