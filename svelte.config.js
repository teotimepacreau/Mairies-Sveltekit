import adapter from '@sveltejs/adapter-auto';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from 'mdsvex'

const mdsvexOptions = {
	extensions: ['.md'],//permet de preprocess e Markdown pour qu'il soit rendu dans les pages

}

const config = {
	extensions: ['.svelte', '.md'],//permet de traiter les Markdown files en tant que Components
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		
		// ADAPTER FOR STATIC SITE GENERATION
		adapter: adapter()
	},
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)]
};

export default config;
