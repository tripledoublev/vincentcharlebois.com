import { buildBreadcrumbSchema } from '$lib/seo.js';

export function load({ url }) {
	const title = 'Projets Vincent Charlebois';
	const description =
		"Explorez les projets de Vincent Charlebois en systèmes d'IA agentiques, infrastructures distribuées et art web.";

	return {
		seo: {
			title,
			description,
			currentUrl: `https://www.vincentcharlebois.com${url.pathname}`,
			schema: [
				buildBreadcrumbSchema([
					{ name: 'Accueil', path: '/fr' },
					{ name: 'Projets', path: '/fr/projets' }
				])
			]
		}
	};
}
