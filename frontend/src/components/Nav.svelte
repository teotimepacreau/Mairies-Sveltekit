<script>
  import { client } from "@tina/__generated__/client";

  let arrayOfNavLinks = [];

  async function fillArrayOfNavLinks() {
    const result = await client.queries.pagesConnection();
    try {
      const {
        data: {
          pagesConnection: { edges },
        },
      } = result;
      arrayOfNavLinks = edges;
      return arrayOfNavLinks;
    } catch (e) {
      console.error(500, "Could not find articles on the server");
    }
  }
  fillArrayOfNavLinks();

  let navLinksOrderByCategorie = [];
  async function orderNavLinksByCategorie() {
    arrayOfNavLinks = await fillArrayOfNavLinks();

    navLinksOrderByCategorie = arrayOfNavLinks.reduce((accumulator, curr) => {
      if (!(curr.node.categorie in accumulator)) {
        accumulator[curr.node.categorie] = [];
      }
      accumulator[curr.node.categorie].push(curr);
      return accumulator;
    }, {});
    return navLinksOrderByCategorie;
  }

  $: {
    orderNavLinksByCategorie();
  }
</script>

<!-- PSEUDO CODE : je veux que chaque item de l'arrayOfNavLinks aille dans sa catégorie. Donc "pour chaque article de arrayOfNavLinks if article.Node.categorie === ... alors " -->

<nav class="pl-4 pr-8 pt-8 | border-r-2">
  <menu>
    {#each Object.entries(navLinksOrderByCategorie) as key, index}
      <li>
        <span class="eyebrow">{key[0]}</span>
        {#each Object.entries(key[1]) as insideKey}
          <a href="/pages/{insideKey[1].node._sys.filename}">
            <i aria-hidden="true">{insideKey[1].node.emoji}</i>
            <span>{insideKey[1].node.titre}</span>
          </a>
        {/each}
      </li>
    {/each}
    <li>
      <span class="eyebrow">Contact</span>
        <a href="/contact">
          <i aria-hidden="true">✉️</i>
          <span>Formulaire de contact</span>
        </a>
    </li>
  </menu>
</nav>

<style>
  menu {
    min-width: max-content;
  }
  li {
    display: flex;
    flex-direction: column;
  }

  a:hover {
    @apply bg-slate-100;
    transition: 0.2s ease-out;
  }

  a > span {
    @apply text-xs text-slate-500 font-semibold;
  }
  .eyebrow {
    @apply text-xs uppercase text-slate-500 font-semibold;
  }

  .eyebrow + a {
    @apply mt-2;
  }
  li:not(:first-child) .eyebrow {
    @apply mt-8;
  }
</style>
