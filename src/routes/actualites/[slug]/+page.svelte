<script>
    export let data //attraper le data passé par +page.server.js

    import Nav from '@components/Nav.svelte'
    import Breadcrumb from '@components/Breadcrumb.svelte';

    


</script>

<Nav />
<Breadcrumb pageTitle={data.meta.titre}/>

<svelte:head>
	<title>{data.meta.titre}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.titre} />
    <meta property="og:description" content={data.meta.desc} />
</svelte:head>

<article>
  <!-- Title -->
	<header>
		<h1>{data.meta.titre}</h1>
		<p>Publié le {data.meta.date}</p>
	</header>
    <main>
        <!-- OBLIGE D'IMPORTER LE CORPS DE TEXTE MARKDOWN en svelte:component COMME CA POUR QU'IL S'AFFICHE -->
        <svelte:component this={data.content} />
    </main>
</article>