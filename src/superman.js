class Player {
  constructor(x,y) {
    // character properties

    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 150;
    this.img = new Image();
    this.img.src = "../images/superman-flying.png";
  }

  // Methods

  // 1. Draw
  drawPlayer = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  // 2. Movement
  supermanMovement = (e) => {
    if (e.key === "ArrowLeft") {
      this.x -= 5;
    }
    if (this.x < 0) {
      this.x = this.x + 5;
    }

    if (e.key === "ArrowRight") {
      this.x += 5;
    }
    if (this.x > 540) {
      this.x = 600 - 60;
    }

    if (e.key === "ArrowUp") {
      this.y -= 5;
    }
    if (this.y < 0) {
      this.y = this.y + 5;
    }

    if (e.key === "ArrowDown") {
      this.y += 5;
    }
    if (this.y > 450) {
      this.y = 600 - 150;
    }
  };
}
