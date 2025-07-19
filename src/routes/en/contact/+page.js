export function load({ url }) {
	const title = 'Contact Vincent Charlebois';
	const description =
		'Get in touch with Vincent Charlebois. Find links to social media profiles, his CV and portfolio.';

	return {
		seo: {
			title,
			description,
			currentUrl: `https://vincentcharlebois.com${url.pathname}`
		}
	};
}
