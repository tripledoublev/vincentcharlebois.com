export function load({ url }) {
	const title = 'Vincent Charlebois — Écologies, technologies;';
	const description =
		'Infrastructures distribuées, interfaces de protocole et systèmes de gouvernance à travers une pratique collaborative';

	return {
		seo: {
			title,
			description,
			currentUrl: `https://vincentcharlebois.com${url.pathname}`
		}
	};
}
