<script>
    import Nav from "../components/Nav.svelte";
    import Actualites from "../components/Actualites.svelte";
</script>

<div class="content-wrapper | px-8 pb-8 | mx-auto | flex">
<Nav />
<main style="width: inherit;">
    <header>
        <img class="hero-img" src="header-commune-2.jpg" alt="">
    </header>
    <main class="px-14 pt-6 | max-w-read">
        <h1 class="text-4xl font-bold tracking-tight">Bienvenue sur le site de la mairie de Vue</h1>
        <p class="text-slate-700 | mt-3">Vous y trouverez des pages sur les démarches administratives, les missions de la mairie ainsi que les informations essentielles sur l’activité de la commune.</p>
        
        <hr class="mt-10">

        <Actualites />
    </main>
</main>
</div>

<style>
    .content-wrapper {
            width: 70dvw;
        }
    .hero-img{
        object-fit: cover;
        object-view-box: inset(30% 0% 0% 0%);
        max-height: 35dvh;
        width: 100%;
    }
</style>