import { buildBreadcrumbSchema } from '$lib/seo.js';

export function load({ url }) {
	const title = 'À propos de Vincent Charlebois';
	const description =
		"Vincent Charlebois, développeur logiciel et artiste-chercheur : des ordinateurs pour des agents, de l'art de protocole, et plus d'un million d'arbres plantés.";

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
