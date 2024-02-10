import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { pagefind } from 'vite-plugin-pagefind';

export default defineConfig({
		
	plugins: [sveltekit(), pagefind({ publicDir: 'static', buildDir: 'build' })],
	server: {
		fs: {
		  // OBLIGATOIRE POUR POUVOIR ACCEDER AU  Tina's type-safe client for data-fetching, -> Allows serving files project root
		  allow: ['..'],
		},
	  },
});
