import { buildBreadcrumbSchema } from '$lib/seo.js';

export function load({ url }) {
	const title = 'Contact Vincent Charlebois';
	const description =
		'Contactez Vincent Charlebois. Trouvez des liens vers ses réseaux sociaux, son CV et son portfolio.';

	return {
		seo: {
			title,
			description,
			currentUrl: `https://vincentcharlebois.com${url.pathname}`,
			schema: [
				buildBreadcrumbSchema([
					{ name: 'Accueil', path: '/fr' },
					{ name: 'Contact', path: '/fr/contact' }
				])
			]
		}
	};
}
