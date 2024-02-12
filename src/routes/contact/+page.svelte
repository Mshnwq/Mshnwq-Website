<script lang="ts">
  import type { SupportedSocials, UserSocial } from '$src/types/Socials';
  import { socialNetworks } from '$src/helpers/constants';
  import { config } from '$src/store/Config';

  import SocialLink from '$src/components/SocialLink.svelte';
  import Heading from '$src/components/Heading.svelte';
  import EmailForm from '$src/components/EmailForm.svelte';
  import PGPKeys from '$src/components/PgpKeys.svelte';

  // Dynamically fetched data (social metrics)
  export let data;

  // Append usernames, and (if available) metrics to available socials
  let socials: UserSocial[] = socialNetworks.map((social, index) => {
    const network: typeof SupportedSocials[number] = social.name;
    const metrics =
      data?.props[social.name.toLowerCase().replace(/\W/g, '')] || [];
    return { ...social, user: config.contact.socials[network], metrics };
  });

  // Limit number of socials to display
  let numSocialsToDisplay = config.contact.socialButtonLimit || 4;

  // Show / hide more socials
  const toggleSocialLimit = () => {
    const defLimit = config.contact.socialButtonLimit;
    numSocialsToDisplay =
      numSocialsToDisplay === defLimit ? socials.length : defLimit;
  };
</script>

<section class="main">
  <div class="social-wrapper">
    <Heading level="h2" color="var(--accent)">lets_connect</Heading>
    <!-- Links to social media profiles -->
    <div class="social-buttons">
      {#each socials.slice(0, numSocialsToDisplay) as social}
        <SocialLink {...social} />
      {/each}
    </div>
    <!-- Show more/ less button -->
    {#if socials.length > config.contact.socialButtonLimit}
      <button class="toggle-limit" on:click={toggleSocialLimit}>
        {numSocialsToDisplay > config.contact.socialButtonLimit
          ? 'Show Less'
          : 'Show More'}
      </button>
    {/if}
  </div>
  <EmailForm />
  <PGPKeys />
</section>

<style lang="scss">
  section.main {
    width: 90vw;
    margin: 2rem auto 1rem auto;
    text-align: left;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    h2 {
      font-size: 2rem;
      margin: 1rem 0;
      color: var(--accent);
    }
    .social-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      min-width: 500px;
    }
    .social-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      transition: all ease-in-out 0.25s;
    }
    button.toggle-limit {
      background: none;
      border: none;
      border-radius: var(--curve-factor);
      color: var(--foreground);
      font-family: FiraCode, monospace;
      width: fit-content;
      cursor: pointer;
      opacity: 0.5;
      transition: all ease-in-out 0.1s;
      &:hover {
        color: var(--accent);
      }
    }
  }
</style>