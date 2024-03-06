<script>
  import ListOfItemActu from "@components/ListOfItemActu.svelte";

  import { onMount } from "svelte";
  import { nbArticles } from "@store/stores.js"

  let numberOfArticlesForPagination

  onMount(()=>{
  function articlesLength () {
    nbArticles.subscribe(value => {
      return numberOfArticlesForPagination = value
    })
    return numberOfArticlesForPagination
  }
  articlesLength()
  })
  
  $: nbTotaldArticle = numberOfArticlesForPagination

  import * as Pagination from "@sveltecomponents/pagination";

</script>

<svelte:head>
  <title>Actualités</title>
</svelte:head>

<section class="mt-10">
  <h1 class="text-4xl font-bold">Actualités</h1>
  <ListOfItemActu/>

  <nav class="mt-6">
    
  <Pagination.Root count={nbTotaldArticle} perPage={3} let:pages let:currentPage>
    {console.log('pages', pages)}
    {console.log('currentPage', currentPage)}

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
</section>
