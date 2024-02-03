<script>
  import { page } from '$app/stores';

  const emojis = {
    // TODO add the rest!
    401: '🔒',
    403: '🚫',
    404: '🧱',
    420: '🫠',
    500: '💥',
    501: '🚧',
  };
</script>

<div class="errors-as-far-as-the-eye-can-see">
  <h1>
    <span>
      {$page.status}
    </span>
    <br>
    {$page.error.message ?? 'An unexpected error occurred.'}
  </h1>
  <p>
    This is sad :'(
  </p>
  <span style="font-size: 10em">
    {emojis[$page.status] ?? emojis[500]}
  </span>
</div>

<style lang="scss">
.errors-as-far-as-the-eye-can-see {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
    span { font-size: 5rem; }
  }
  p {
    margin: 0.5rem 0;
    color: var(--dimmed-text);
  }
}
</style>