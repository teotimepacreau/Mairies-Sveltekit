<script>
  export let data; //attraper le data passé par +page.js

  import Nav from "@components/Nav.svelte";

  import Breadcrumb from "@components/Breadcrumb.svelte";
</script>

<svelte:head>
  <title>{data.meta.titre}</title>
  <meta property="og:title" content={data.meta.titre} />
</svelte:head>

<Nav />
<main class="px-14 py-6 | w-full">
  <Breadcrumb />
  <section data-pagefind-body class="page-content | mt-10">
    <header>
      <h1 class="text-4xl font-bold">{data.meta.titre}</h1>
      <hr>
    </header>
    <main>
      <svelte:component this={data.content} />
    </main>
  </section>
</main>

<style>
  .page-content > header > hr {
    @apply mt-10
  }
  .page-content > main {
    @apply mt-6
  }

  :global(.page-content > main > h2) {
    @apply text-xl font-bold mt-6
  }

  :global(.page-content li) {
    list-style-type: disc;
    list-style-position: inside;
  }

  :global(.page-content > main > h2 + *) {
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