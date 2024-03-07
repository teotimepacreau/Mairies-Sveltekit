<script>
  import { onMount } from "svelte";

  import { client } from "@tina/__generated__/client";

  import * as Pagination from "@sveltecomponents/pagination";

  let currentPage = 1//A MODIFIER
  let itemsPerPage = 3  // nécessaire pour pagination
  let arrayOfArticles = [];

  async function fillArrayOfArticles() {
    const result = await client.queries.articleConnection();
    try {
      const {
        data: {
          articleConnection: { edges },
        },
      } = result;
      arrayOfArticles = edges;
      return arrayOfArticles;
    } catch (e) {
      console.error(500, "Could not find articles on the server");
    }
  }

  // const orderArticlesByDate = async () => {
  //   arrayOfArticles = await fillArrayOfArticles();
  //   arrayOfArticles.sort((a, b) => {
  //     return new Date(b.node.date) - new Date(a.node.date);
  //   });
  // };

  
  // SOUS SET d'ARTICLES BASÉ SUR LA currentPage et perPage
  let subset = []

  async function getSubsetOfArticlesForPagination(){
    let arrayOfArticles = await fillArrayOfArticles()
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    subset = arrayOfArticles.slice(startIndex, endIndex)
    console.log('subset',subset)
    return subset
  }

  let handleClickOnPagination
onMount(async ()=>{
  await getSubsetOfArticlesForPagination()
  let allPaginationButtons = document.querySelectorAll('[data-melt-pagination-page]')
  console.log(allPaginationButtons)
  allPaginationButtons.forEach((button)=>{
    button.addEventListener('click', ()=>{
      console.log(button.dataset.value)
    })
  })
})


</script>
<div class="article-list">
  {#each subset as article}
    <article class=" border-2 rounded-md | mt-4">
      <div class="p-4 self-center flex-1 | flex flex-col">
        <time class="text-xs text-slate-600"
          >{new Date(article.node.date).toLocaleDateString("fr")}</time
        >
        <a
          href="/actualites/{article.node._sys.filename}"
          class="mt-2 |text-lg font-semibold"
        >
          {article.node.titre}
        </a>
        <p class="mt-1 | text-xs truncate | shrink">
          {article.node.desc}
        </p>
      </div>
      <div class="img-container flex-1" style="width: inherit;">
        <img src={article.node.image} alt={article.node.imagealt} />
      </div>
    </article>
  {/each}
</div>
<nav class="mt-6">
  <Pagination.Root
    count={arrayOfArticles.length}
    perPage={itemsPerPage}
    let:pages
    let:currentPage
  >
    <!-- count c'est nombre total d'item -->
    <!-- perPage c'est le nombre d'item qu'on souhaite afficher par page-->

    <Pagination.Content>
      <Pagination.Item>
        <Pagination.PrevButton />
      </Pagination.Item>
      {#each pages as page (page.key)}
        {#if page.type === "ellipsis"}
          <Pagination.Item>
            <Pagination.Ellipsis />
          </Pagination.Item>
        {:else}
          <Pagination.Item isVisible={currentPage == page.value}>
            <Pagination.Link {page} isActive={currentPage == page.value}>
              {page.value}
            </Pagination.Link>
          </Pagination.Item>
        {/if}
      {/each}
      <Pagination.Item>
        <Pagination.NextButton />
      </Pagination.Item>
    </Pagination.Content>
  </Pagination.Root>
</nav>
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
