import { buildBreadcrumbSchema } from '$lib/seo.js';

export function load({ url }) {
	const title = 'Projects Vincent Charlebois';
	const description =
		"Explore Vincent Charlebois's projects across agentic AI systems, distributed infrastructure, and web art.";

	return {
		seo: {
			title,
			description,
			currentUrl: `https://www.vincentcharlebois.com${url.pathname}`,
			schema: [
				buildBreadcrumbSchema([
					{ name: 'Home', path: '/en' },
					{ name: 'Projects', path: '/en/projects' }
				])
			]
		}
	};
}
