import { buildBreadcrumbSchema } from '$lib/seo.js';

export function load({ url }) {
	const title = 'Projets Vincent Charlebois';
	const description =
		"Du stockage pour les ordinateurs qu'habitent des agents, et de l'art de protocole : des œuvres web où systèmes et protocoles deviennent des milieux.";

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
