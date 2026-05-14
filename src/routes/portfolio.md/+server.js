import portfolio from '$lib/content/portfolio.md?raw';

export const prerender = true;

export function GET() {
	return new Response(portfolio, {
		headers: {
			'content-type': 'text/markdown; charset=utf-8'
		}
	});
}
