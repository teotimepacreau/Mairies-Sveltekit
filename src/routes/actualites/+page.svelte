<script>
  import Nav from "@components/Nav.svelte";

  import ItemActu from "@components/ItemActu.svelte";

  import Breadcrumb from "@components/Breadcrumb.svelte";
</script>

<svelte:head>
  <title>Actualités</title>
</svelte:head>

<Nav />
<main class="p-8 | w-full">
  <Breadcrumb />
  <section class="mt-10">
    <h1 class="text-4xl font-bold">Actualités</h1>
    <ItemActu />
  </section>
</main>
