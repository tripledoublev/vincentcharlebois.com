# vincent charlebois dot com

A bilingual personal website showcasing distributed infrastructures, protocol interfaces, and governance systems through collaborative practice.

## Features

- **Multilingual Support**: English and French with automatic language detection
- **Portal Webring**: Interactive portal constellation featuring curated websites
- **Responsive Design**: Dark theme with accessible navigation
- **Static Generation**: Optimized for performance and SEO
- **Testing**: Comprehensive unit and integration tests

## Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom CSS variables
- **Internationalization**: [svelte-i18n](https://github.com/kaisermann/svelte-i18n)
- **Markdown**: [marked](https://marked.js.org/) with [DOMPurify](https://github.com/cure53/DOMPurify)
- **Testing**: [Vitest](https://vitest.dev/) + [Playwright](https://playwright.dev/)
- **Code Quality**: ESLint + Prettier
- **Deployment**: Static site generation with SvelteKit adapter

## Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/tripledoublev/vincentcharlebois.com.git
cd vincentcharlebois.com

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check code style
npm run format       # Format code
```

## Portal Webring

The interactive portal feature showcases curated websites from the digital art community, inspired by the [Portal Constellation](https://isthisa.com/webring) webring by Sarah Friend. It includes sites from artists, researchers, and technologists working at the intersection of art, technology, and social practice.

## About

Vincent Charlebois is a software developer and artist-researcher based in Montreal. As a member of [HYPHA Worker Co-operative](https://hypha.coop), he builds distributed infrastructures, protocol interfaces, and governance systems through collaborative practice.
