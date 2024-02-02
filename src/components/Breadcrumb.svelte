<script>
    export let pageTitle
    export let path
    export let subfolders = []

    import { onMount } from 'svelte';

    onMount( () => {
         path = window.location.pathname
         if (path){
            subfolders = path.split('/').filter(Boolean)
        subfolders.pop()
        console.log(subfolders)
         }

    });
</script>

<nav aria-label="Breadcrumb" class="breadcrumb">
    <ul>
      <li><a href="/">Accueil</a></li>
      {#each subfolders as subfolder}
      <li><a class="breadcrumb-item" href={`/${subfolder}`}>{subfolder}</a></li>
  {/each}
      <li><a href="{path}"><span aria-current="page">{pageTitle}</span></a></li>
    </ul>
  </nav>

  <style>
    .breadcrumb {
  padding: 0 .5rem;
}

.breadcrumb ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.breadcrumb li:not(:last-child)::after {
  display: inline-block;
  margin: 0 .25rem;
  content: "→";
}

.breadcrumb-item:first-of-type {
    text-transform: capitalize;
}
  </style>