import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { siteConfig } from '../lib/content';

export const GET: APIRoute = async (context) => {
	const writings = (await getCollection('writings')).sort(
		(a, b) => b.data.date.getTime() - a.data.date.getTime(),
	);

	return rss({
		title: `${siteConfig.name} — Writings`,
		description: siteConfig.intro,
		site: context.site?.href ?? 'https://example.com',
		items: writings.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.summary,
			link: `/writings/${post.id}/`,
		})),
	});
};
