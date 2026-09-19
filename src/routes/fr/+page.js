import { personSchema } from '$lib/seo.js';

export function load({ url }) {
	const title = 'Vincent Charlebois — Écologies, technologies;';
	const description =
		'Développeur logiciel et artiste-chercheur à Montréal. Systèmes de stockage, ordinateurs pour agents et art de protocole dans le navigateur.';

	return {
		seo: {
			title,
			description,
			currentUrl: `https://www.vincentcharlebois.com${url.pathname}`,
			schema: [personSchema]
		}
	};
}
