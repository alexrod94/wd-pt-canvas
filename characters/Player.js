class Player {
  constructor(x, y, color, ctx) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.color = color;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveUp() {
    this.y -= 1;
  }

  moveDown() {
    this.y += 1;
  }
}

export default Player;
