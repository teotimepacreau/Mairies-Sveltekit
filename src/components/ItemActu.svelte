<script>
  import { client } from "@tina/__generated__/client";

  let arrayOfArticles = []

  $: (async () => {//obligé d'utiliser une reactive value ($:) car comme on utilise await ça permet à ce que la data qui arrive à la fin de l'execution de la fonction raffraichisse let arrayOfArticles
    const result = await client.queries.articleConnection();

    const {
      data: {
        articleConnection: { edges },
      },
    } = result;
    arrayOfArticles = edges;
  })();
</script>

<section class="mt-10">
  <h2 class="text-xl font-bold">Actualités</h2>
  <div class="article-list">
    {#each arrayOfArticles as article}
      <article class=" border-2 rounded-md | mt-4">
        <div class="p-4 self-center flex-1 | flex flex-col">
          <time class="text-xs text-slate-600">{new Date(article.node.date).toLocaleDateString("fr")}</time>
          <a href="/actualites/{article.node._sys.filename}" class="mt-2 |text-lg font-semibold">
            {article.node.titre}
          </a>
          <p class="mt-1 | text-xs truncate | shrink">
            {article.node.desc}
          </p>
        </div>
        <div class="img-container flex-1" style="width: inherit;">
          <img src="{article.node.image}" alt="{article.node.imagealt}" />
        </div>
      </article>
    {/each}
  </div>
</section>

<style>
  img {
    object-fit: cover;
    max-height: 20dvh;
    width: 100%;
  }
  article {
    display: flex;
  }
  article > * {
    flex: 1;
    flex-basis: 50%;
  }
  article > :first-child {
    max-width: 50%;
  }
</style>
