
# "Site de Mairie" : my fullstack project with SvelteKit frontend + Fastify backend

# 🛠️
Frontend : HTML, CSS, Tailwind, JS, SvelteKit
Backend: TinaCMS, Pagefind, Fastify

# What I learned :
- using Svelte and SvelteKit
- implement a headless CMS in order to allow non tech users to admin the website
- querying a GraphQL API
- splitting recursive elements in Svelte components
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

## Allowing non-tech admins to manage the whole website easily
I wanted to allow non-tech admins to create/update/delete articles but also be capable to create/update/delete all pages of the website.
I choosed a headless Git based CMS in order to don't have the hussle to manage a Database and prioritize simplicity : TinaCMS.
`/frontend/tina/config.js`

1. First defining a schema for the data with 2 collections : article (for news) and pages (for general page content), then defining each field with data types and requirements.
```
schema: {
    collections: [
      {
        name: "article",
        label: "Articles",
        path: "src/articles",
        fields: [
          {
            type: "string",
            name: "titre",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "desc",
            label: "Description",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "string",
            name: "imagealt",
            label: "Description de l'image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Corps de texte",
            isBody: true, //⚠️ bien penser à mettre isBody: true au champ dont on souhaite qu’il souhaite render non pas en frontmatter mais bien en corps de texte markdown
          },
        ],
      },
      {
        name: "pages",
        label: "Pages",
        path: "src/pages",
        fields: [
          {
            type: "string",
            name: "titre",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            label: "Catégorie",
            name: "categorie",
            list: true,
            required: true,
            options: [
              {
                label: "Mairie",
                value: "mairie",
              },
              {
                label: "Vie Locale",
                value: "vie locale",
              },
              {
                label: "Démarches",
                value: "demarches",
              }
            ],
          },
          {
            type: "string",
            label: "Icône",
            name: "emoji",
            description: "Emoji qui servira d'icône dans le menu de navigation",
            required: true,
          },
          {
            type: "rich-text",
            name: "contenu",
            label: "Contenu",
            required: true,
            isBody: true, //bien penser à mettre isBody: true au champ dont on souhaite qu’il souhaite render non pas en frontmatter mais bien en corps de texte markdown
          },
        ],
      },
    ],
  },
```

Result is having a dedicated admin page :


2. Querying the generated GraphQL API in Svelte files in order to get data
```
import { client } from "@tina/__generated__/client";
async function fillArrayOfNavLinks() {
    const result = await client.queries.pagesConnection();
    try {
      const {
        data: {
          pagesConnection: { edges },
        },
      } = result;
      arrayOfNavLinks = edges;
      return arrayOfNavLinks;
    } catch (e) {
      console.error(500, "Could not find articles on the server");
    }
  }
```

## Articles generation
1. Markdown files are processed through MDSVEX in order to generate HTML pages. 
2. Accessing articles through the SvelteKit `load` native function in `/frontend/src/routes/(content)/actualites/[slug]/+page.js` : if the slug matches then content and metadata of the articles are passed to the `+page.svelte` through `data` variable. Then capturing `data.meta.titre`, `data.meta.image`... and rendering body of the article with `<svelte:component this={data.content} />`

## Inner search function

## Contact form & email notification
Toast notification confirms if form is successully sent and received by the server. If form is not successfully received server-side, a toast notification informs the user.