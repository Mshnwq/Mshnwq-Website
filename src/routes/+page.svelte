<script lang="ts">
  
  import { onDestroy, onMount } from 'svelte'
  import { config } from '$src/store/Config';
  import Loading from '$src/components/Loading.svelte';
  import Heading from '$src/components/Heading.svelte';
  import { socialNetworks } from '$src/helpers/constants';
  import Icon from '$src/components/Icon.svelte';
  import MatrixEffect from '$src/helpers/matrix-effect';
  import HomePage from './home/HomePage.svelte';

  export let data: any;

  const homePageLinks = config.routeLinks.filter((rl: { route: string; }) => rl.route !== '/');

  let showLoader = false;

  onMount(() => {
    try { new MatrixEffect(); }
    catch (e) { console.warn('MatrixEffect failed to load', e); }
  });

  onDestroy(() => {
    console.log('Unmounted home page');
  });

  const userSocials = Object.keys(config.contact.socials);
  const limit = config.contact.socialButtonLimit;

  const socialLinks = userSocials.slice(0, limit).map((social) => {
    const socialProps = socialNetworks.find((sn: { name: string; }) => sn.name === social);
    if (!socialProps) return null;
    const user = config.contact.socials[social];
    return {
      ...socialProps,
      user,
      href: socialProps.link + user,
      title: `${socialProps.noAt ? '' : '@'}${user} on ${socialProps.name}`,
    };
  });

  const findRouteColor = (route: string) => {
    return config.routeLinks?.find((r: { route: string; }) => r.route === route)?.color || 'var(--accent)';
  };
</script>

<main class="homepage">
  <div id="matrix-effect"></div>
  <div class="hero">
    <Heading
      level="h1"
      commandStyle={false}
      blinkCursor={true}
      size="4.5rem"
      color="var(--home-accent-background)"
    >
      Hayan Al-Machnouk
    </Heading>
    <div class="socials">
      {#each socialLinks as social}
        {#if social}
          <a
            href={social.href}
            class="social-link"
            title={social.title}
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              name={social.icon}
              color="var(--home-accent-background)"
              width="2.4rem"
              height="1.8rem"
              hoverColor={social.tone}
            />
          </a>
        {/if}
      {/each}
    </div>
  </div>

  {#if showLoader}
    <Loading message="Pre-fetching Posts" />
  {/if}

  {#if !showLoader}
    <!-- TODO: fix height <div id="matrix-effect"></div> -->
    <div class="tiles">
      {#each homePageLinks as navLink}
        <a
          class="tile"
          href={navLink.route}
          style={`--accent: ${findRouteColor(navLink.route)};`}
          on:click={() => {
            showLoader = true;
          }}
        >
          <Heading level="h3" size="2.5rem" color="var(--home-accent-foreground)">
            {navLink.label}
          </Heading>
          <p class="subtitle">
            {navLink.description}
          </p>
        </a>
      {/each}
    </div>
  {/if}
</main>

<!-- TODO: Landing Page  -->
<!-- <HomePage data={data} /> -->
<!-- TODO: HomePage -->

<style lang="scss">
  @import '$src/styles/media-queries.scss';
  @import '$src/styles/matrix-effect.scss';

  :global(html) {
    scroll-behavior: smooth;
  }

  *:not(canvas) {
    z-index: 1;
  }

  main.homepage {
    min-height: 99vh;
    position: relative;
  }

  .hero {
    text-align: center;
    pointer-events: none;
    // background: var(--home-tile-background);
    // border-bottom: var(--card-border);
    min-height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .socials {
      opacity: 0.9;
      pointer-events: all;
      .social-link {
        text-decoration: none;
        color: var(--home-accent-background);
      }
      &:hover {
        opacity: 1;
      }
    }
  }

  .tiles {
    display: grid;
    grid-auto-flow: dense;
    max-width: 70rem;
    margin: auto;
    padding: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1rem;
    width: 80vw;
    @include tablet-down {
      display: flex;
      flex-direction: column;
    }
    a.tile {
      color: var(--foreground);
      border: var(--card-border);
      background: var(--card-background);
      border-radius: 4px;
      text-decoration: none;
      padding: 1rem;
      border-left: 4px solid var(--accent);
      transition: all ease-in-out 0.25s, transform ease-in-out 0.3s;
      overflow: hidden;
      pointer-events: all;

      p.subtitle {
        position: absolute;
        color: var(--dimmed-text);
        margin: 0;
        transform: translateX(-20rem) translateY(2rem) scale(0.5) rotate(5deg);
        transition: all ease-in-out 0.2s;
        opacity: 0;
      }

      &:hover {
        :global(h3) {
          color: var(--accent);
          transform: translateY(-1rem);
        }
        border-left-width: 8px;
        transform: scale(1.035);
        p.subtitle {
          transform: translateX(0) translateY(-1.5rem) scale(1) rotate(0);
          opacity: 1;
        }
      }
    }
  }
</style>