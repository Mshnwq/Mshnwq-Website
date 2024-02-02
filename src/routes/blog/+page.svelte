<nav>
  <a href="/">Home</a>
  <a href="/contact">Contact</a>
</nav>

<h1>Blog page</h1>

<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  onMount(() => console.log('Mounted blog page'))
  onDestroy(() => console.log('Unmounted blog page'))
</script>