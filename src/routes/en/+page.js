export function load({ url }) {
	const title = 'Vincent Charlebois — Ecologies, technologies;';
	const description =
		'Vincent Charlebois; intermedia artist, software developer and member of Hypha Worker Co-operative.';

	return {
		seo: {
			title,
			description,
			currentUrl: `https://vincentcharlebois.com${url.pathname}`
		}
	};
}
