import { buildBreadcrumbSchema } from '$lib/seo.js';

export function load({ url }) {
	const title = 'À propos de Vincent Charlebois';
	const description =
		"À propos de Vincent Charlebois : développeur logiciel qui construit des ordinateurs pour agents, artiste de protocoles, planteur d'arbres à la retraite.";

	return {
		seo: {
			title,
			description,
			currentUrl: `https://www.vincentcharlebois.com${url.pathname}`,
			schema: [
				buildBreadcrumbSchema([
					{ name: 'Accueil', path: '/fr' },
					{ name: 'À propos', path: '/fr/a-propos' }
				])
			]
		}
	};
}
