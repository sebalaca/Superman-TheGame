class superLogo {
    constructor(x) {
      // properties
      this.x = x;
      this.y = -10;
      this.width = 40;
      this.height = 50;
      this.directionY = 1;
      this.velocityY = 3;
      this.img = document.getElementById("superLogo")
    }
  
  
    // 1. Draw
    drawsuperLogo = (ctx) => {
    //   console.log("IMAGE",this.img)
      ctx.drawImage(this.img, this.x, this.y,this.width, this.height);
    };
    
    movementsuperLogo = () => {
      this.y = this.y + this.velocityY;
    }
    
  }