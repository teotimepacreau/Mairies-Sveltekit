import { error } from '@sveltejs/kit'

//on accède à la fonction native de SvelteKit "load"
export async function load({ params }){
  try {
    const post = await import (`../../../articles/${params.slug}.md`)
    return {
      content: post.default,//mardown article body
      meta: post.metadata //mardown article frontmatter
    }
  }
  catch(e){
    throw error(404, `Could not find ${params.slug}`)
  }
}