import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
		  // OBLIGATOIRE POUR POUVOIR ACCEDER AU  Tina's type-safe client for data-fetching, -> Allows serving files project root
		  allow: ['..'],
		},
	  },
});
