export default class MatrixEffect {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private matrix: string;
  private font_size: number;
  private columns: number;
  private drops: number[];

  constructor(targetContainer = '#matrix-effect') {
    this.canvas = document.createElement('canvas');
    document.querySelector(targetContainer)?.appendChild(this.canvas);
    this.context = this.canvas.getContext('2d')!;
    this.matrix = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    // this.matrix = "ضصثقفغعهخحجدشسيبلاتنمئءؤرىةوزظطك";
    this.font_size = 12;
    this.columns = 0;
    this.drops = [];
    this.setupCanvas();
    this.renderMatrix();
    this.watchForResize();
  }

  // Set up the canvas dimensions and columns based on the window size
  private setupCanvas() {
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.columns = Math.floor(this.canvas.width / this.font_size);
    this.drops = Array(this.columns).fill(1);
  }

  // Draw the matrix effect on the canvas
  private drawMatrix() {
    // Fill the canvas with the background color
    this.context.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--matrix-effect-background');
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Set the text color and font
    this.context.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--matrix-effect-text');
    this.context.font = this.font_size + "px arial";

    // Draw the matrix characters
    for (let i = 0; i < this.drops.length; i++) {
      const text = this.matrix[Math.floor(Math.random() * this.matrix.length)];
      this.context.fillText(text, i * this.font_size, this.drops[i] * this.font_size);

      // Move the character down and reset if it reaches the bottom of the canvas
      if (this.drops[i] * this.font_size > this.canvas.height && Math.random() > 0.99) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
  }

  // Start rendering the matrix effect at regular intervals
  private renderMatrix() {
    setInterval(() => this.drawMatrix(), 20);
  }

  // Rerender the matrix effect when the window is resized
  private rerender() {
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.columns = Math.floor(this.canvas.width / this.font_size);
    this.drops = Array(this.columns).fill(1);
    this.drawMatrix();
  }

  // Listen for window resize events
  private watchForResize() {
    let resizeTimer: number;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => this.rerender(), 250);
    });
  }
}