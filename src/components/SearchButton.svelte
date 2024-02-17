<script>
  let openDialog
  import { onMount } from "svelte";

  onMount(() => {
    let dialog = document.querySelector("#search-dialog");
    openDialog = () => {
      dialog.showModal();
    };
  });
</script>

<button
  on:click={() => openDialog()}
  class="relative | flex shrink min-w-2 items-center justify-between gap-4 | px-4 py-2 | border-2 rounded-md"
>
  <span class="truncate | shrink grow basis-6">Rechercher</span>
  <i class="search-icon"></i>
</button>

<style>
  .search-icon {
    background-color: black;
    display: inline-block;
    mask-image: url("/search.svg");
    mask-size: 1rem 1rem;
    mask-repeat: no-repeat;
    width: 1rem;
    height: 1rem;
  }
</style>
