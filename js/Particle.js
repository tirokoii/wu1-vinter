class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.dy = (1 + Math.random() * 3) * speed / 5;
    this.dx = (-1 + Math.random() * 2) * speed / 5;
    this.color = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${Math.random()})`;
    this.size = 2 + Math.floor(Math.random() * 30);  
    this.toDelete = false;
  }

  draw() {
    ctx.beginPath();
    ctx.drawImage(image, this.x, this.y , this.size, this.size)
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.y += this.dy;
    this.x += this.dx;
    if (this.y > canvas.height || this.x < 0 || this.x > canvas.width) {
      this.toDelete = true;
    }
  }
}