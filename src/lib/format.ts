export function formatDateShort(date: Date): string {
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const year = String(date.getFullYear()).slice(-2);
	return `${month}/${day}/${year}`;
}

export function youtubeVideoId(url: string): string | null {
	try {
		const parsed = new URL(url);
		if (parsed.hostname.includes('youtu.be')) {
			return parsed.pathname.replace(/^\//, '').split('/')[0] || null;
		}
		if (parsed.hostname.includes('youtube.com')) {
			const v = parsed.searchParams.get('v');
			if (v) return v;
			const embed = parsed.pathname.match(/\/embed\/([^/]+)/);
			if (embed) return embed[1];
		}
	} catch {
		return null;
	}
	return null;
}
