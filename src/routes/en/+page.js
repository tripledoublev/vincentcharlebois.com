import { personSchema } from '$lib/seo.js';

export function load({ url }) {
	const title = 'Vincent Charlebois — Ecologies, technologies;';
	const description =
		'Distributed infrastructures, protocol interfaces, and governance systems through collaborative practice';

	return {
		seo: {
			title,
			description,
			currentUrl: `https://vincentcharlebois.com${url.pathname}`,
			schema: [personSchema]
		}
	};
}
