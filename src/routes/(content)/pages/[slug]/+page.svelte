<script>
  export let data; //attraper le data passé par +page.js
</script>

<svelte:head>
  <title>{data.meta.titre}</title>
  <meta property="og:title" content={data.meta.titre} />
</svelte:head>

<section class="page-content | mt-10">
    <header>
      <h1 class="text-4xl font-bold">{data.meta.titre}</h1>
      <hr>
    </header>
    <article data-pagefind-body>
      <svelte:component this={data.content} />
    <article/>
  </section>

<style>
  .page-content > header > hr {
    @apply mt-10
  }
  .page-content > article {
    @apply mt-6
  }

  :global(.page-content > article > h2) {
    @apply text-xl font-bold mt-6
  }

  :global(.page-content li) {
    list-style-type: disc;
    list-style-position: inside;
  }

  :global(.page-content > article > h2 + *) {
    @apply mt-3
  }

  :global(.page-content ul){
    @apply my-3
  }

  :global(.page-content a) {
    @apply my-3;
    display: inline-block;
    text-decoration: underline;
  }
</style>