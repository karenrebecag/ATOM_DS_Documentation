// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
			logo: {
				light: './public/atomchat-logo.png',
				dark: './public/atomlogoinverted (1).webp',
				alt: 'AtomChat',
				replacesTitle: true,
			},
			customCss: [
				'./src/styles/custom-accent.css',
			],
			description: 'Official documentation for AtomChat DS - A monorepo design system with W3C DTCG tokens, GSAP animations, and pure CSS',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/karenrebecag/ATOM_DS'
				}
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
					],
				},
				{
					label: 'Architecture',
					items: [
						{ label: 'Overview', slug: 'architecture/overview' },
						{ label: 'Packages', slug: 'architecture/packages' },
						{ label: 'Token Layers', slug: 'architecture/token-layers' },
					],
				},
				{
					label: 'Foundations',
					items: [
						{ label: 'Design Tokens', slug: 'foundations/tokens' },
						{ label: 'Colors', slug: 'foundations/colors' },
						{ label: 'Semantic Colors', slug: 'foundations/semantic-colors' },
						{ label: 'Borders', slug: 'foundations/borders' },
						{ label: 'Breakpoints', slug: 'foundations/breakpoints' },
						{ label: 'Elevations', slug: 'foundations/elevations' },
						{ label: 'Opacity', slug: 'foundations/opacity' },
						{ label: 'Typography', slug: 'foundations/typography' },
						{ label: 'Spacing', slug: 'foundations/spacing' },
						{ label: 'Animations', slug: 'foundations/animations' },
					],
				},
				{
					label: 'Components',
					items: [
						{
							label: 'Buttons',
							autogenerate: { directory: 'components/buttons' },
						},
						{
							label: 'Selection Controls',
							autogenerate: { directory: 'components/selection-controls' },
						},
						{
							label: 'Indicators & Status',
							autogenerate: { directory: 'components/indicators-status' },
						},
						{
							label: 'Content Display',
							autogenerate: { directory: 'components/content-display' },
						},
						{
							label: 'Text',
							autogenerate: { directory: 'components/text' },
						},
						{
							label: 'Layout',
							autogenerate: { directory: 'components/layout' },
						},
						{
							label: 'Molecules',
							autogenerate: { directory: 'components/molecules' },
						},
					],
				},
				{
					label: 'Utilities',
					autogenerate: { directory: 'utilities' },
				},
			],
		}),
	],
});
