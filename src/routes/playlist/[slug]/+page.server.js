import { playlists } from '../controllers.js';
import { error } from '@sveltejs/kit';
	

	export function load({ params }) {
		/*
		const result = {
			title: typeof params.slug === 'string' ? 'It is a string' : 'It is not a string',
		};
		return result;
*/

		/*	return{
		
				title: params.slug,
				
		
			}*/
			
			const playlist = playlists.find((playlist) => playlist.id.toString() === params.slug);
		
			if (!playlist) throw error(404);
		
			return {
				playlist
			};
		}
		
