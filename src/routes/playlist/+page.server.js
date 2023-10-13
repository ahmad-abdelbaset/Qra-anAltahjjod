import { playlists } from './controllers.js';

export function load() {
	return {
		summaries: playlists.map((playlist) => ({
			slug: playlist.id,
			title: playlist.title
		}))
	};
}
