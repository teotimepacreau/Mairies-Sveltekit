import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import path from 'path'

export default defineConfig({
		resolve: {
			alias: {
				"@": path.resolve(__dirname),
				'@tina': path.resolve('./tina'),
				'@articles': path.resolve('./src/actualites')
			},
		},
	plugins: [sveltekit()],
	server: {
		fs: {
		  // OBLIGATOIRE POUR POUVOIR ACCEDER AU  Tina's type-safe client for data-fetching, -> Allows serving files project root
		  allow: ['..'],
		},
	  },
});
