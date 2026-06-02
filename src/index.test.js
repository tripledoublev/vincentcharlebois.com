import { describe, it, expect } from 'vitest';
import { buildWebPageSchema, personSchema, schemaDateModified, websiteSchema } from '$lib/seo.js';

describe('structured data', () => {
	it('anchors the website schema to the canonical person entity', () => {
		expect(personSchema['@id']).toBe('https://www.vincentcharlebois.com/#vincent-charlebois');
		expect(websiteSchema.author['@id']).toBe(personSchema['@id']);
		expect(personSchema.image['@type']).toBe('ImageObject');
		expect(personSchema.image.url).toBe(
			'https://www.vincentcharlebois.com/vincent-charlebois-portrait.jpg'
		);
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
		expect(schema.author['@id']).toBe(personSchema['@id']);
		expect(schema.dateModified).toBe(schemaDateModified);
		expect(schema.dateModified).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:\d{2})$/);
	});

	it('marks profile pages as being about the canonical person entity without unsupported author', () => {
		const schema = buildWebPageSchema({
			title: 'Vincent Charlebois',
			description: 'Personal profile',
			path: '/',
			lang: 'en',
			type: 'ProfilePage'
		});

		expect(schema.mainEntity['@id']).toBe(personSchema['@id']);
		expect(schema.author).toBeUndefined();
		expect(schema.dateModified).toBe(schemaDateModified);
		expect(schema.dateModified).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:\d{2})$/);
	});
});
