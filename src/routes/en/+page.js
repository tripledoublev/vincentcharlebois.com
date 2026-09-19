import { personSchema } from '$lib/seo.js';

export function load({ url }) {
	const title = 'Vincent Charlebois — Ecologies, technologies;';
	const description =
		'Software developer and artist-researcher in Montreal. Core storage, computers for agents, and protocol art in the browser.';

	return {
		seo: {
			title,
			description,
			currentUrl: `https://www.vincentcharlebois.com${url.pathname}`,
			schema: [personSchema]
		}
	};
}
