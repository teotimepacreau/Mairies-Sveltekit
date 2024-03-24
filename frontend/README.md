
# "Site de Mairie" : my fullstack project with SvelteKit frontend + Fastify backend

# 🛠️
Frontend : HTML, CSS, Tailwind, JS, SvelteKit
Backend: TinaCMS, Pagefind, Fastify

# What I learned :
- using Svelte and SvelteKit
- splitting recursive elements in components
- customizing Svelte to generate a static website, and allowing also SSR for certain parts
- applying shared layouts to pages through Svelte, escaping layouts
- knowing when to use `+page.js` rather than `+page.server.js` and contrary
- converting Markdown files to HTML through Svelte

# In-depth details of the project :
## Layouts
1. SvelteKit layout logic to apply style to all subpages with `+layout.svelte`
2. Create shared layout only within a subfolder but without affecting url thanks to `content` `/frontend/src/routes/(content)/+layout.svelte`
## View Transitions
Using View Transitions API to create seamless navigation with the native fade-in animation
## Components
Created several components from scratch :
1. Generate dynamically list of actu items by making a request to the CMS and paginate it (pagination is from Shadcn pre-made component) `/frontend/src/components/ActuItemsListAndPagination.svelte`
2. Dynamic Breadcrumbs adapting path and elements on each page `/frontend/src/components/Breadcrumb.svelte`
3.  Generating Navigation links by making a request to the CMS and ordering nav elements following their category `/frontend/src/components/Nav.svelte`
4. Search Button opening a `dialog` `/frontend/src/components/SearchButton.svelte`
5. Search Dialog allowing user to input the searched elements `/frontend/src/components/SearchDialog.svelte`

## Static Site Generation
I wanted the website to be as performant as possible so rendering the major part of the website as Static seemed important.
1. `svelte.config.js`
```
import adapter from '@sveltejs/adapter-static'
const config = {
kit: {
		prerender: {
			crawl: true,
		},
    }
}
```
2. `/frontend/src/routes/.layout.js`
```
export const prerender = true
```

## Tina CMS : a headless Git based CMS to allow non-tech admin the whole website
I wanted to allow non-tech admins to create/update/delete articles but also be capable to create/update/delete all pages of the website.

## Articles generation
1. Markdown files are processed through MDSVEX in order to generate HTML pages. 
2. Accessing articles through the SvelteKit `load` native function in `/frontend/src/routes/(content)/actualites/[slug]/+page.js` : if the slug matches then content and metadata of the articles are passed to the `+page.svelte` through `data` variable. Then capturing `data.meta.titre`, `data.meta.image`... and rendering body of the article with `<svelte:component this={data.content} />`

## Inner search function

## Contact form & email notification
Toast notification confirms if form is successully sent and received by the server. If form is not successfully received server-side, a toast notification informs the user.