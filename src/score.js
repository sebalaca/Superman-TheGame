class Score {
  
    constructor () {
      // properties
      this.value = 0;
      this.x = 0;
      this.y = 0;
      this.width = 100;
      this.height = 100;
    }
  
    drawScore = () => {
      ctx.font = "30px VT323";
      ctx.fillStyle= "Red"
      ctx.fillText(`SCORE: ${this.value}`, 20, 50);
    }
  
  }