<script>
  import { onMount } from "svelte";

  // transition for articles to appear in fade-in
  import { fade } from 'svelte/transition';
  let articles = true// transition for articles to appear in fade-in

  import { client } from "@tina/__generated__/client";

  import * as Pagination from "@sveltecomponents/pagination";

  // I. RECUPERER TOUS LES ARTICLES DE L'API TINA
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
      orderArticlesByDate(); //voir fonction en dessous
      return arrayOfArticles;
    } catch (e) {
      console.error(500, "Could not find articles on the server");
    }
  }

  //II. TRIER LES ARTICLES RECUPERES PAR DATE DECROISSANTE
  function orderArticlesByDate() {
    arrayOfArticles.sort((a, b) => {
      return new Date(b.node.date) - new Date(a.node.date);
    });
  }

  // III. LIMITer A 3 ARTICLES LE NB D'ARTICLES AFFICHES POUR LA FUTURE PAGINATION
  let subset = []; //on crée un array subset (sous-set)
  let currentPage = 1;
  let itemsPerPage = 3;
  async function getSubsetOfArticlesForPagination() {
    let arrayOfArticles = await fillArrayOfArticles(); //on récupère notre array d'articles et on attend qu'elle se remplisse
    const startIndex = (currentPage - 1) * itemsPerPage; //page 1 - 1 = 0 *3, fonctionne car le 1er index d'un array est 0. 2ème exemple page 2 - 1 = 1 * 3 mettra sur la page 2 l'index de début 3
    const endIndex = startIndex + itemsPerPage; //0 + 3
    subset = arrayOfArticles.slice(startIndex, endIndex); //le sous-set se remplit du startIndex au endIndex
    return subset;
  }

  // IIII. RENDRE CHAQUE BTN DE PAGINATION INTERACTIF POUR METTRE A JOUR LA VARIABLE currentPage puis appeler la fonction getSubsetOfArticlesForPagination() pour mettre à jour le subset
  onMount(async () => {
    await getSubsetOfArticlesForPagination(); //la fonction de création du subset est appelée pour la 1ère fois ici
    // IIII.1 intéractivité des btns n° de pa&0ge
    let paginationNumberButtons = document.querySelectorAll(
      "[data-melt-pagination-page]"
    );
    paginationNumberButtons.forEach((button) => {
      button.addEventListener("click", () => {
        currentPage = button.dataset.value;
        getSubsetOfArticlesForPagination();
      });
    });

    // IIII.2 intéractivité du btn "suivant"
    let paginationNextButton = document.querySelector(
      "[data-melt-pagination-next]"
    );
    paginationNextButton.addEventListener("click", () => {
      currentPage++;
      getSubsetOfArticlesForPagination();
    });

    // IIII.3 intéractivité du btn "précédent"
    let paginationPrevButton = document.querySelector(
      "[data-melt-pagination-prev]"
    );
    paginationPrevButton.addEventListener("click", () => {
      currentPage--;
      getSubsetOfArticlesForPagination();
    });
  });
</script>

{#if articles}
<div class="article-list">
  {#each subset as article}<!--on boucle sur le sous-set d'articles-->
    <article transition:fade={{delay: 0, duration: 400}} class=" border-2 rounded-md | mt-4">
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
{/if}

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
