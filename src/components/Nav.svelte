<nav class="pl-4 pr-8 pt-8 | border-r-2">
    <menu>
      <li>
        <span class="eyebrow">MAIRIE</span>
        <a href="">
          <i aria-hidden="true">🏫</i>
          <span>Conseil municipal</span>
        </a>
        <a href=""
          ><i aria-hidden="true">📄</i>
          <span>Informations pratiques</span>
        </a>
      </li>
      <li>
        <span class="eyebrow">VIE LOCALE</span>
        <a href="">
          <i aria-hidden="true">🏛️</i>
          <span>Commune de Vue</span>
        </a>
        <a href="">
          <i aria-hidden="true">🎒</i>
          <span>Scolarité</span>
        </a>
        <a href="">
          <i aria-hidden="true">✝️</i>
          <span>Cimetière</span>
        </a>
      </li>
      <li>
          <span class="eyebrow">DÉMARCHES</span>
          <a href="">
            <i aria-hidden="true">🗂️</i>
            <span>État civil</span>
          </a>
          <a href="">
            <i aria-hidden="true">📊</i>
            <span>Impôts</span>
          </a>
          <a href="">
            <i aria-hidden="true">👶</i>
            <span>Enfance</span>
          </a>
          <a href="">
              <i aria-hidden="true">🏠</i>
              <span>Urbanisme</span>
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
  
    a > span {
      @apply text-xs text-slate-500 font-semibold
    }
    .eyebrow {
      @apply text-xs text-slate-500 font-semibold;
    }
  
    .eyebrow + a {
      @apply mt-2;
    }
    li:not(:first-child) .eyebrow {
      @apply mt-8
    }
  </style>
  