<script>
    import Nav from "@components/Nav.svelte";

    import ItemActu from "@components/ItemActu.svelte";

    import Breadcrumb from '@components/Breadcrumb.svelte'
</script>

<svelte:head>
    <title>Actualités</title>
</svelte:head>

<Nav />
<main id="blog-post-container" class="p-8 | w-full">
<Breadcrumb />
<ItemActu />
</main>