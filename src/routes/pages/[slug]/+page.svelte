<script>
  export let data; //attraper le data passé par +page.js

  import Nav from "@components/Nav.svelte";

  import Breadcrumb from "@components/Breadcrumb.svelte";
  console.log(data);
</script>

<svelte:head>
  <title>{data.meta.titre}</title>
  <meta property="og:title" content={data.meta.titre} />
</svelte:head>

<Nav />
<main class="p-8 | w-full">
  <Breadcrumb />
  <section class="mt-10">
    <header>
      <h1 class="text-4xl font-bold">{data.meta.titre}</h1>
    </header>
    <main>
      <svelte:component this={data.content} />
    </main>
  </section>
</main>
