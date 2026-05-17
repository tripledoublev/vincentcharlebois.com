import { describe, it, expect } from 'vitest';
import { buildWebPageSchema, personSchema, websiteSchema } from '$lib/seo.js';

describe('structured data', () => {
	it('anchors the website schema to the canonical person entity', () => {
		expect(personSchema['@id']).toBe('https://www.vincentcharlebois.com/#vincent-charlebois');
		expect(websiteSchema.author['@id']).toBe(personSchema['@id']);
	});

	it('builds canonical web page schema for public routes', () => {
		const schema = buildWebPageSchema({
			title: 'Portfolio - Vincent Charlebois',
			description: 'Selected work',
			path: '/portfolio',
			lang: 'en',
			type: 'CollectionPage'
		});

		expect(schema['@type']).toBe('CollectionPage');
		expect(schema.url).toBe('https://www.vincentcharlebois.com/portfolio/');
		expect(schema.about['@id']).toBe(personSchema['@id']);
	});
});
