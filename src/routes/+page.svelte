<script>
  import Nav from "@components/Nav.svelte";
  import ListOfItemActu from "@components/ListOfItemActu.svelte";
</script>



<Nav />
<main style="width: inherit;">
  <header>
    <img
      class="hero-img"
      src="header-commune-2.jpg"
      alt="Photographie d'un cours d'eau à Vue"
    />
  </header>
  <main class="px-14 pt-6 | max-w-read">
    <h1 class="text-4xl font-bold tracking-tight">
      Bienvenue sur le site de la mairie de Vue
    </h1>
    <p class="text-slate-700 | mt-3">
      Vous y trouverez des pages sur les démarches administratives, les missions
      de la mairie ainsi que les informations essentielles sur l’activité de la
      commune.
    </p>
    <hr class="mt-10" />
    <section class="mt-10">
      <h2 id="actualites-title" class="text-xl font-bold"><a href="/actualites">Actualités</a></h2>
      <ListOfItemActu />
    </section>
  </main>
</main>

<style>
  .hero-img {
    object-fit: cover;
    object-view-box: inset(30% 0% 0% 0%);
    max-height: 35dvh;
    width: 100%;
  }

  #actualites-title::after {
    display: inline-block;
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
</style>
