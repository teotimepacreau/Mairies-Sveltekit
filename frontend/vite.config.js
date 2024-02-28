import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { pagefind } from 'vite-plugin-pagefind';

export default defineConfig({
		
	plugins: [sveltekit(), pagefind({ publicDir: 'static',//Provide the directory where your static PAGEFIND asset live.
	buildDir: 'build' })],//Provide the directory where your build output lives.
	server: {
		fs: {
		  // OBLIGATOIRE POUR POUVOIR ACCEDER AU  Tina's type-safe client for data-fetching, -> Allows serving files project root
		  allow: ['..'],
		},
	  },
});
