import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from 'mdsvex'

import path from 'node:path'

const mdsvexOptions = {
	extensions: ['.md'],//permet de preprocess e Markdown pour qu'il soit rendu dans les pages

}

const config = {
	extensions: ['.svelte', '.md'],//permet de traiter les Markdown files en tant que Components
	
	onwarn: (warning, handler) => {
        if (warning.code.startsWith('a11y-')) return;
        handler(warning);
    },
	kit: {
		alias: {
			'@articles': path.resolve('./src/articles'),
			'@tina': path.resolve('./tina')
		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
	},
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)]
};

export default config;
