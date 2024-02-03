<nav>
  <a href="/">Home</a>
  <a href="/blog">Blog</a>
  <a href="/contact">contact</a>
</nav>

<h1>Home page</h1>

<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  onMount(() => console.log('Mounted home page'))
  onDestroy(() => console.log('Unmounted home page'))
</script>