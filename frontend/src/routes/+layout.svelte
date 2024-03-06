<script>
  // VIEW TRANSITIONS START
  import { onNavigate } from "$app/navigation";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
  // VIEW TRANSITIONS END

  // STYLESHEETS
  import "@style/focus.css";
  import "@style/notif.css";
  import "@style/reset.css";
  import "@style/tailwind.css";

  // SHADCN-SVELTE
  import "@style/global.css"

    // COMPONENTS

  import SearchButton from "@components/SearchButton.svelte";
  import SearchDialog from "@components/SearchDialog.svelte";
  import Nav from "@components/Nav.svelte";
  
</script>


<header class="px-8 py-4 border-b-2 | flex justify-between gap-2">
  <div
    class="header-flexer | flex gap-4 items-center"
    style="max-height: inherit;"
  >
    <div class="header-img-container | shrink-0" style="max-height: inherit;">
      <a href="/">
        <img
          class="max-h-10"
          width="36.36"
          height="39.99"
          src="/vue.svg"
          alt="Blason de la commune de Vue"
        />
      </a>
    </div>
    <a href="/"
      ><span class="text-xl" style="min-width: min-content;"
        >Commune de Vue</span
      ></a
    >
  </div>
  <SearchButton />
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <SearchDialog />
</header>

<div class="content-wrapper | px-8 pb-8 | mx-auto | flex">
  <Nav /> 
  <slot />
</div>

<style>
  .content-wrapper {
    max-width: 70dvw;
  }
  .content-wrapper > * {
    flex: 1;
  }
  
</style>
