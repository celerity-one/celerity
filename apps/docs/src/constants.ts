export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/seed-blocks/recastui/tree/main/apps/docs/src/content`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;

export const SidebarNavigation = [
	{
		title: 'Overview',
		links: [
			{ title: 'Introduction', href: '/docs/overview/introduction' },
			{ title: 'Getting started', href: '/docs/overview/get-started' },
			{ title: 'Theming', href: '/docs/overview/theming' },
		],
	},
	{
		title: 'Components',
		links: [
			{ title: 'Accordion', href: '/docs/components/accordion' },
			{ title: 'Button', href: '/docs/components/button' },
			{ title: 'Input', href: '/docs/components/input' },
			{ title: 'Checkbox', href: '/docs/components/checkbox' },
			{ title: 'Label', href: '/docs/components/label' },
			{ title: 'Radio', href: '/docs/components/radio' },
			// INJECT NEW COMPONENTS HERE
		],
	},
];

export type SidebarNavigationType = typeof SidebarNavigation;
