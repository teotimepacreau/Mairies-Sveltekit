<script>
  // VIEW TRANSITIONS START
  import { onNavigate } from "$app/navigation";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
  // VIEW TRANSITIONS END

  import "@style/focus.css";
  import "@style/reset.css";
  import "@style/tailwind.css";

  import { onMount } from "svelte";

  // SEARCH START
  let closeDialogWhenClickOutsideTheBox;
  let openDialog
  let dialog

  onMount(() => {
    dialog = document.querySelector("#search-dialog");

    //onMount car sinon la sélection run avant que le composant soit rendu
    closeDialogWhenClickOutsideTheBox = (event) => {

      if (event.target == dialog) {
        //car le dialog prend tout le reste de la page, l'intérieur de la boite c'est le <search>
        dialog.close();
      }
    };
    openDialog = () => {
    dialog.showModal();
  };
  });

  

  // PAGEFIND
  let query = "";
  const handleSearch = async () => {
    const pagefind = await import("/pagefind/pagefind.js"); //appelle l'objet pagefind

    const r = await pagefind.search(query); //tape l'API "search" de Pagefind (on fait remonter la query de l'utilisateur en string)

    console.log(r); //donne un array avec 4 objets parmis lesquels l'objet "results"

    let numberOfResults = r.results.length;

    let resultsContainer = document.querySelector("#results");

    let dialogDrawer = document.createElement("div");
    dialogDrawer.classList.add("pagefind-ui__drawer");
    let docFrag = document.createDocumentFragment();

    // NB DE RESULTATS
    let pagefindMessage = resultsContainer.querySelector(".pagefind-message");
    if (pagefindMessage) {
      pagefindMessage.textContent = `${numberOfResults} résultats pour "${query}"`;
    } else {
      pagefindMessage = document.createElement("p");
      pagefindMessage.classList.add("pagefind-message");
      pagefindMessage.textContent = `${numberOfResults} résultats pour "${query}"`;
    }

    // LISTE DE RESULTS
    let pagefindQueryResults = document.createElement("ol");

    for (const result of r.results) {
      let data = await result.data(); //obligé d'await result.data pour bien avoir les résultats de la query
      console.log("data", data);
      pagefindQueryResults.innerHTML += `
        <li><a class="search-result" href="${data.url.replace(".html", "")}">${
          data.meta.title
        }</a></li>
        `;
    }
   
    docFrag.appendChild(pagefindMessage);
    docFrag.appendChild(pagefindQueryResults);
    resultsContainer.appendChild(docFrag);

    // FERMER LE DIALOG SI CLIC SUR UN RESULTAT DE RECHERCHE
    let allSearchResults = document.querySelectorAll('.search-result')
      console.log('allSearchResults', allSearchResults)
      allSearchResults.forEach((result)=>{
        result.addEventListener('click',() => {
          result.closest('#search-dialog').close()
        })
      })
  };

</script>

<svelte:head>
  <script src="/pagefind-ui.js"></script>
</svelte:head>

<header class="px-8 py-4 border-b-2 | flex justify-between gap-2">
  <div
    class="header-flexer | flex gap-4 items-center"
    style="max-height: inherit;"
  >
    <div class="header-img-container | shrink-0" style="max-height: inherit;">
      <a href="/">
        <img
          class="max-h-10"
          width="36.36"
          height="39.99"
          src="/vue.svg"
          alt="Blason de la commune de Vue"
        />
      </a>
    </div>
    <a href="/"
      ><span class="text-xl" style="min-width: min-content;"
        >Commune de Vue</span
      ></a
    >
  </div>
  <button
    on:click={() => openDialog()}
    class="relative | flex shrink min-w-2 items-center justify-between gap-4 | px-4 py-2 | border-2 rounded-md"
  >
    <span class="truncate | shrink grow basis-6">Rechercher</span>
    <i class="search-icon"></i>
  </button>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <dialog on:click={closeDialogWhenClickOutsideTheBox} id="search-dialog">
    <div id="inner-dialog" class="relative">
      <search
        id="search-box-open"
        class="flex items-center gap-4 | border-2 border-slate-400 rounded-md | px-4 py-2 | bg-white"
      >
        <icon class="search-icon | shrink-0"></icon>
        <form>
          <label class="sr-only" for="search">Rechercher</label>
          <input
            on:keyup={() => handleSearch()}
            bind:value={query}
            class="w-full | bg-inherit | outline-none | text-black"
            type="text"
            name="search"
            id="search"
            placeholder="Rechercher"
          />
        </form>
      </search>
      <div id="results" class="flex flex-col | bg-white | px-4 py-2"></div>
    </div>
  </dialog>
</header>

<div class="content-wrapper | px-8 pb-8 | mx-auto | flex">
  <slot />
</div>

<style>
  .content-wrapper {
    max-width: 70dvw;
  }
  .content-wrapper > * {
    flex: 1;
  }
  .search-icon {
    background-color: black;
    display: inline-block;
    mask-image: url("/search.svg");
    mask-size: 1rem 1rem;
    mask-repeat: no-repeat;
    width: 1rem;
    height: 1rem;
  }
  dialog::backdrop {
    backdrop-filter: blur(3px);
  }
  #search-dialog {
    background-color: transparent;
    width: 40dvw;
    margin-inline: auto;
    @apply pt-8;
    position: fixed;
  }

  :global(a:hover) {
    @apply text-blue-900;
    transition: 0.2s ease-out;
    text-decoration: unset;
  }

  :global(#results ol) {
    @apply py-4;
  }
</style>
