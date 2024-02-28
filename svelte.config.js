// import adapter from '@sveltejs/adapter-auto';

import adapter from '@sveltejs/adapter-static'


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
		prerender: {
			crawl: true,
		},
		alias: {
			'@articles': path.resolve('./src/articles'),
			'@tina': path.resolve('./tina'),
			'@components': path.resolve('./src/components'),
			'@style': path.resolve('./src/style'),
			'@static': path.resolve('./static'),
			'@pagefind': path.resolve('./static/pagefind')
		},

		adapter:  adapter({ fallback : '404.html' }, { pages: "build" }),
	},
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)]
};

export default config;
