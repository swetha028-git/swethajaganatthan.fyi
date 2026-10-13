import site from '../content/site.json';
import media from '../content/media.json';

export type SiteConfig = typeof site;

export type MediaType = 'podcast' | 'video' | 'talk' | 'interview';

export interface MediaItem {
	title: string;
	url: string;
	type: MediaType;
	date: string;
	note?: string;
	embedOnMediaPage?: boolean;
}

export const siteConfig: SiteConfig = site;

export const mediaItems: MediaItem[] = [...media.items].sort(
	(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
