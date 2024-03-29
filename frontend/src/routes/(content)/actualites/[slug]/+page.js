// SSG
export const prerender = true

import { error } from '@sveltejs/kit'

import { client } from "@tina/__generated__/client";

//1. SSG : NECESSAIRE POUR GENERER STATIQUEMENT LES PAGES DE LA ROUTE SLUG
export async function entries() {
  try {
    const result = await client.queries.articleConnection();
    const {
      data: {
        articleConnection: { edges },
      },
    } = result;
    let data = edges.map((article) => {
      return { slug: article.node._sys.filename };
    });
    return data;
  } catch (e) {
    console.error('Error fetching articles:', e);
    return [];
  }
}



//2. SLUG : on accède à la fonction native de SvelteKit "load"
export async function load({ params }){
  try {
    const post = await import (`../../../../articles/${params.slug}.md`)
    return {
      content: post.default,//mardown article body
      meta: post.metadata //mardown article frontmatter
    }
  }
  catch(e){
    throw error(404, `Could not find ${params.slug}`)
  }
}