class Game {
  constructor(ctx) {
    //Game properties
    this.ctx = ctx;
    this.bg = new Image();
    this.bg.src = "../images/background.jpg";
    this.player = new Player(270, 450);
    this.kryptoArr = [];
    this.superLogoArr = [];
    this.isGameOn = true;
  }

  drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  newKryptonites = () => {
    const randomPositionX = Math.floor(Math.random() * 580);
    const kryptonite = new Krypto(randomPositionX);
    this.kryptoArr.push(kryptonite);
  };

  newsuperLogo = () => {
    const randomPositionX = Math.floor(Math.random() * 580);
    const logo = new superLogo(randomPositionX);
    this.superLogoArr.push(logo);
  };

  checkPlayerkryptoCollision = (krypto) => {
    if (
      this.player.x < krypto.x + krypto.width &&
      this.player.x + this.player.width > krypto.x &&
      this.player.y < krypto.y + krypto.height &&
      this.player.height + this.player.y > krypto.y
    ) {
      this.isGameOn = false;
      canvas.style.display = "none";
      gameOverScreen.style.display = "flex";
    }
  };

  checkPlayerLogoCollision = (logo) => {
    if (
      this.player.x < logo.x + logo.width &&
      this.player.x + this.player.width > logo.x &&
      this.player.y < logo.y + logo.height &&
      this.player.height + this.player.y > logo.y
    ) {
      this.isGameOn = false;
      canvas.style.display = "none";
      gameOverScreen.style.display = "flex";
    }
  };

  init() {
    setInterval(this.newKryptonites, 3000);
    setInterval(this.newsuperLogo, 5000);
    this.gameLoop();
  }

  cleanCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // methods

  gameLoop = () => {
    // 1. Clean canvas
    this.cleanCanvas();

    // 2. move elements or other actions
    //   console.log(this.kryptoArr)
    this.kryptoArr.forEach((krypto) => {
      krypto.movementKriptonita();
      this.checkPlayerkryptoCollision(krypto);
    });

    this.superLogoArr.forEach((logo) => {
      logo.movementsuperLogo();
      this.checkPlayerLogoCollision(logo);
    });

    // 3.  Draw los elements

    this.drawBackground();

    this.kryptoArr.forEach((krypto) => {
      krypto.drawKrypto(this.ctx);
    });

    this.superLogoArr.forEach((logo) => {
      logo.drawsuperLogo(this.ctx);
    });

    this.player.drawPlayer();

    // 4. Animation recursion

    if (this.isGameOn !== false) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
