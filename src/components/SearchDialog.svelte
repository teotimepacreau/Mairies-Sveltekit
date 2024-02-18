<script>

  import { onMount } from "svelte";
  

  // SEARCH START
  let closeDialogWhenClickOutsideTheBox;

  let dialog;
  let resultsContainer;

  onMount(() => {
    dialog = document.querySelector("#search-dialog");

    //onMount car sinon la sélection run avant que le composant soit rendu
    closeDialogWhenClickOutsideTheBox = (event) => {
      if (event.target == dialog) {
        //car le dialog prend tout le reste de la page, l'intérieur de la boite c'est le <search>
        dialog.close();
      }
    };
  });

  // PAGEFIND
  let query = "";
  const handleSearch = async () => {
    const pagefind = await import("/pagefind/pagefind.js"); //appelle l'objet pagefind

    const r = await pagefind.search(query); //tape l'API "search" de Pagefind (on fait remonter la query de l'utilisateur en string) et donne un array avec 4 objets parmis lesquels l'objet "results"

    let numberOfResults = r.results.length;

    let docFrag = document.createDocumentFragment();

    if (resultsContainer) {
      resultsContainer.innerHTML = "";
    }

    // NB DE RESULTATS
    let pagefindMessage = document.querySelector(".pagefind-message");
    resultsContainer = document.querySelector(".pagefind-results");
    if (pagefindMessage) {
      pagefindMessage.textContent = `${numberOfResults} résultats pour "${query}"`;
    } else {
      let innerDialog = document.querySelector("#inner-dialog");

      // Create and append resultsContainer only if it doesn't exist
      if (!resultsContainer) {
        resultsContainer = document.createElement("div");
        resultsContainer.classList.add(
          "pagefind-results",
          "flex",
          "flex-col",
          "bg-white",
          "px-4",
          "py-2",
          "border-2",
          "border-white",
          "rounded-md"
        );
        innerDialog.appendChild(resultsContainer);
      }

      pagefindMessage = document.createElement("p");
      pagefindMessage.classList.add("pagefind-results-message");
      pagefindMessage.innerHTML += `${numberOfResults} résultats pour <em>"${query}"</em>`;
    }

    // LISTE DE RESULTS
    let pagefindQueryResults = document.createElement("ol");
    pagefindQueryResults.classList.add("pagefind-results-list");

    for (const result of r.results) {
      let data = await result.data(); //obligé d'await result.data pour bien avoir les résultats de la query
      pagefindQueryResults.innerHTML += `
      <li><a class="pagefind-result-list-link" href="${data.url.replace(
        ".html",
        ""
      )}">${data.meta.title}</a>
        <p class="pagefind-result-list-excerpt">${data.excerpt}</p>
        </li>
      `;
    }

    docFrag.appendChild(pagefindMessage);
    docFrag.appendChild(pagefindQueryResults);
    resultsContainer.appendChild(docFrag);

    // FERMER LE DIALOG SI CLIC SUR UN RESULTAT DE RECHERCHE
    let allSearchResults = document.querySelectorAll(
      ".pagefind-result-list-link"
    );
    allSearchResults.forEach((result) => {
      result.addEventListener("click", () => {
        result.closest("#search-dialog").close();
      });
    });
  };
</script>
  <dialog 
    on:click={closeDialogWhenClickOutsideTheBox}
    id="search-dialog"
  >
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
    </div>
  </dialog>

<style>
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

  :global(.pagefind-results) {
    max-height: 70dvh;
    overflow-y: scroll;
  }

  :global(.pagefind-results-message) {
    @apply py-4 text-sm text-slate-500;
  }

  :global(.pagefind-results-list li) {
    @apply py-4 border-t-2 border-slate-200;
  }

  :global(em) {
    font-weight: 700;
  }

  :global(.pagefind-result-list-link:hover) {
    text-decoration: underline;
    transition: all 0.3s ease-out;
  }
  :global(.pagefind-result-list-link) {
    @apply text-lg text-slate-600 font-semibold;
  }
  :global(.pagefind-result-list-excerpt) {
    @apply text-xs;
  }
  :global(search:focus-within) {
    border: 3px solid grey;
  }

  :global(dialog.fade) {
    transition: opacity 0.5s ease;
  }

  :global(dialog.fade.in) {
    transition: opacity 0.5s ease;
    opacity: 1;
  }

  :global(dialog.fade.out) {
    transition: opacity 0.5s ease;
    opacity: 0;
  }
</style>
