class Krypto {
    constructor(x) {
      // properties
      this.x = x;
      this.y = -10;
      this.width = 40;
      this.height = 50;
      this.directionY = 1;
      this.velocityY = 3;
      this.img = document.getElementById("kripto")
    }
  
  
    // 1. Draw
    drawKrypto = (ctx) => {
      // console.log("IMAGE",this.img)
      ctx.drawImage(this.img, this.x, this.y,this.width, this.height);
    };
    
    movementKriptonita = () => {
      this.y = this.y + this.velocityY;
    }
    
  }