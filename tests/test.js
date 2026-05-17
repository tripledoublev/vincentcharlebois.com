import { expect, test } from '@playwright/test';

const baseUrl = 'http://localhost:4173';

test('home page has expected h1', async ({ page }) => {
	await page.goto(`${baseUrl}/`);
	await expect(page.getByRole('main').getByText('vincent charlebois')).toBeVisible();
});

test('no-js fallback exposes agent discovery links', async ({ browser }) => {
	const context = await browser.newContext({ javaScriptEnabled: false });
	const page = await context.newPage();

	await page.goto(`${baseUrl}/en/`);

	const html = await page.content();
	expect(html).toContain('Machine-readable discovery');
	expect(html).toContain('href="/llms.txt"');
	expect(html).toContain('href="/portfolio.md"');

	await context.close();
});

test('no-js portfolio renders selected work content', async ({ browser }) => {
	const context = await browser.newContext({ javaScriptEnabled: false });
	const page = await context.newPage();

	await page.goto(`${baseUrl}/portfolio/`);

	await expect(page.getByRole('heading', { name: 'Vincent Charlebois portfolio' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Doxa' })).toHaveAttribute(
		'href',
		'https://doxa.xx-c.art'
	);

	await context.close();
});
