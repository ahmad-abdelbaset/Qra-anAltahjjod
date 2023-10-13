import { sveltekit } from '@sveltejs/kit/vite';


/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],

	server: {
		// Specify the public directory where your CSS files are located
		publicDir: 'public',
	  },
};

export default config;
