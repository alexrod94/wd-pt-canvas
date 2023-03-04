class Enemy {
  constructor(ctx, canvas) {
    this.x = canvas.width - 10;
    this.y = Math.random() * canvas.height;
    this.width = 30;
    this.height = 30;
    this.color = "red";
    this.ctx = ctx;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.x -= 3;
  }
}

export default Enemy;
