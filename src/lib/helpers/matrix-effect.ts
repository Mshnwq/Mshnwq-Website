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
    this.matrix = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%+-/~{[|`]}ذضصثقفغعهخحجدشسيبلاتنمئءؤرىةوزظطك";
    this.font_size = 12;
    this.columns = 0;
    this.drops = [];
    this.setupCanvas();
    this.renderMatrix();
    this.watchForResize();
  }

  private setupCanvas() {
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.columns = Math.floor(this.canvas.width / this.font_size);
    this.drops = Array(this.columns).fill(1);
  }

  private drawMatrix() {
    this.context.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--matrix-effect-background');
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--matrix-effect-text');
    this.context.font = this.font_size + "px arial";

    for (let i = 0; i < this.drops.length; i++) {
      const text = this.matrix[Math.floor(Math.random() * this.matrix.length)];
      this.context.fillText(text, i * this.font_size, this.drops[i] * this.font_size);

      if (this.drops[i] * this.font_size > this.canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
  }

  private renderMatrix() {
    setInterval(() => this.drawMatrix(), 35);
  }

  private rerender() {
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.columns = Math.floor(this.canvas.width / this.font_size);
    this.drops = Array(this.columns).fill(1);
    this.drawMatrix();
  }

  private watchForResize() {
    let resizeTimer: number;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => this.rerender(), 250);
    });
  }
}
