<!--Layout for all pages, with header and footer-->
<script lang="ts">
  import { page } from "$app/stores";
  import "@fortawesome/fontawesome-free/css/all.min.css";
  let nav: HTMLDivElement;
  let showVerticalNav: boolean = false;
</script>

<link rel="stylesheet" href="/global.css" />

<body>
  <header>
    <a href="/"><img src="/logo.png" alt="Logo" class="logo" /></a>
    <div class="topnav" bind:this={nav}>
      <a href="/" class:active={$page.url.pathname === "/"}>Inicio</a>
      <a href="/proyectos" class:active={$page.url.pathname === "/proyectos"}
        >Proyectos</a
      >
      <a href="/eventos" class:active={$page.url.pathname === "/eventos"}
        >Eventos</a
      >
      <a href="/about" class:active={$page.url.pathname === "/about"}
        >Sobre nosotros</a
      >
    </div>
  </header>

  <div class="slot">
    <slot />
  </div>

  <footer>
    <div class="footer_wrap">
      <a href="/"><img src="/logo.png" alt="Logo" class="logo" /></a>
      <div class="footer_socials">
        <ul>
          <li>
            <a href="mailto:coredumped.etsisi@gmail.com">
              <i class="fa-solid fa-envelope fa-2xl" />
            </a>
          </li>
          <li>
            <a href="https://github.com/CoreDumped-ETSISI"
              ><i class="fa-brands fa-github fa-2xl" />
            </a>
          </li>
          <li>
            <a href="https://t.me/CoreDumpedUPM">
              <i class="fa-brands fa-telegram fa-2xl" />
            </a>
          </li>
          <li>
            <a href="https://discord.gg/mf67s292">
              <i class="fa-brands fa-discord fa-2xl" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/coredumpedupm/">
              <i class="fa-brands fa-square-instagram fa-2xl" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/coredumped/">
              <i class="fa-brands fa-linkedin fa-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</body>
