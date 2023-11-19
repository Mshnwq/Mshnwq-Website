<nav>
  <a href="/">Home</a>
  <a href="/blog">blog</a>
  <a href="/about">blog</a>
</nav>

<h1>About page</h1>

<script>
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement | undefined;
  let context: CanvasRenderingContext2D | undefined;
  let rainDrops: number[] | undefined;
  const fontSize = 16;
  const alphabet =
    'イィキシチニヒミリヰギジヂビピウゥクスツヌフムユュ ルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴ ゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  onMount(() => {
    if (canvas) {
      const canvasElem = canvas;
      context = canvasElem.getContext('2d');

      canvasElem.width = window.innerWidth;
      canvasElem.height = window.innerHeight;

      const columns = canvasElem.width / fontSize;

      rainDrops = [];

      for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
      }

      const draw = () => {
        if (context) {
          context.fillStyle = 'rgba(0, 0, 0, 0.05)';
          context.fillRect(0, 0, canvasElem.width, canvasElem.height);

          context.fillStyle = '#0F0';
          context.font = fontSize + 'px monospace';

          for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            if (context) {
              context.fillText(text, i * fontSize, (rainDrops[i] || 0) * fontSize);

              if ((rainDrops[i] || 0) * fontSize > canvasElem.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
              }
              rainDrops[i]++;
            }
          }
        }
      };

      setInterval(draw, 30);
    }
  });
</script>

<canvas bind:this={canvas} id="Matrix"></canvas>

<!-- <style>
  /* Add any necessary styles here */
  /* Example styles */
  body,
  html {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  canvas {
    display: block;
  }
</style> -->