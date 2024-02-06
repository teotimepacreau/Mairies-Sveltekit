<script>
  export let data; //attraper le data passé par +page.server.js
  console.log(data);

  import Nav from "@components/Nav.svelte";
  import Breadcrumb from "@components/Breadcrumb.svelte";
  import ViewTransition from '@components/Navigation.svelte'
</script>

<svelte:head>
  <title>{data.meta.titre}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.titre} />
  <meta property="og:description" content={data.meta.desc} />
</svelte:head>

<Nav />
<main id="blog-post-container" class="p-8 | w-full">
    <ViewTransition />
  <Breadcrumb pageTitle={data.meta.titre} />
  <article class="pt-8">
    <!-- Title -->
    <header>
      <div id="hero-img-container">
        <img id="hero-img" src={data.meta.image} alt="" />
      </div>
      <h1 class="text-4xl font-bold tracking-tight | pt-8">{data.meta.titre}</h1>
      <time class="block | pt-4 | text-slate-500 text-sm">Publié le {new Date(data.meta.date).toLocaleDateString("fr")}</time>
    </header>
    <main class="pt-8">
      <!-- OBLIGE D'IMPORTER LE CORPS DE TEXTE MARKDOWN en svelte:component COMME CA POUR QU'IL S'AFFICHE -->
      <svelte:component this={data.content} />
    </main>
  </article>
</main>

<style>
  #hero-img-container {
    display: flex;
  }
  #hero-img {
    flex: 1;
    width: 100%;
    object-fit: cover;
    object-view-box: inset(-20% 0% 0% 0%);
    max-height: 35dvh;
  }
    :global(article > main > * + *)  {
    @apply mt-2
  }
</style>
