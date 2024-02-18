<script>
  export let pageTitle;
  export let path;
  export let subfolders = [];

  import { onMount } from "svelte";

  onMount(() => {
    pageTitle = document.title;

    path = window.location.pathname;
    if (path) {
      subfolders = path.split("/").filter(Boolean)
      subfolders.pop();
    }
  });
</script>

<nav aria-label="Breadcrumb" class="breadcrumb">
  <ul>
    <li><a href="/">Accueil</a></li>
    {#each subfolders as subfolder}
      <li><a class="breadcrumb-item" href={`/${subfolder}`}>{subfolder}</a></li>
    {/each}
    <li aria-current="page">{pageTitle}</li>
  </ul>
</nav>

<style>
  .breadcrumb {
    padding: 0 0.5rem;
  }

  .breadcrumb ul {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .breadcrumb li:not(:first-child)::before {
    display: inline-flex;
    content: "";
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.25'%3E%3Cpolyline points='10,8 14,12 10,16'%3E%3C/polyline%3E%3C/svg%3E");
    mask-position: center;
    mask-size: cover;
    mask-repeat: no-repeat;
    vertical-align: middle;
    height: 1.5cap;
    aspect-ratio: 1;
    @apply bg-slate-500;
  }

  .breadcrumb li:not(:last-child) {
    text-underline-offset: unset;
    @apply text-slate-500 underline decoration-from-font underline-offset-2;
  }

  .breadcrumb-item:first-of-type {
    text-transform: capitalize;
  }
</style>
