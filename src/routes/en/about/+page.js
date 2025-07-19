export function load({ url }) {
	const title = 'About Vincent Charlebois';
	const description =
		'About Vincent Charlebois - Artist, creative technologist, and member of Hypha Worker Co-operative.';

	return {
		seo: {
			title,
			description,
			currentUrl: `https://vincentcharlebois.com${url.pathname}`
		}
	};
}
