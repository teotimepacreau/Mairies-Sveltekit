<script>
  import "@style/focus.css";
  import "@style/reset.css";
  import "@style/tailwind.css";

  import { onMount } from "svelte";

  import Navigation from '@components/Navigation.svelte'

  let dialog;

  onMount(() => {
    //onMount car sinon la sélection run avant que le composant soit rendu
    dialog = document.querySelector("#search-dialog");
  });

  const openDialog = () => {
    dialog.showModal();
  };

  const closeDialogWhenClickOutsideTheBox = (event) => {
    if (event.target == dialog) {
      //car le dialog prend tout le reste de la page, l'intérieur de la boite c'est le <search>
      dialog.close();
    }
  };
</script>

<Navigation />

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
    <span class="text-xl" style="min-width: min-content;">Commune de Vue</span>
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
  <dialog
    on:click|preventDefault={closeDialogWhenClickOutsideTheBox}
    on:keyup|preventDefault={closeDialogWhenClickOutsideTheBox}
    id="search-dialog"
    class="px-4 py-2"
  >
    <search class="flex items-center gap-4">
      <icon class="search-icon | shrink-0"></icon>
      <form>
        <label class="sr-only" for="search">Rechercher</label>
        <input
          class="w-full | bg-inherit | outline-none | text-black"
          type="text"
          name="search"
          id="search"
          placeholder="Rechercher"
        />
      </form>
    </search>
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
    background-color: white;
    width: 40dvw;
    box-shadow: 1px 1px 1px 0px var(--shadow);
    @apply border-2 border-slate-400 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
  }
</style>
