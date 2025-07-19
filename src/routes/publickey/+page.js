export function load({ url }) {
	const title = 'PGP Public Key Vincent Charlebois';
	const description = "Vincent Charlebois's PGP public key for secure communication.";

	return {
		seo: {
			title,
			description,
			currentUrl: `https://vincentcharlebois.com${url.pathname}`
		}
	};
}
