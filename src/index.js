const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "lightblue";

let supermanImage = new Image();
supermanImage.src = "../images/superman-flying.png";

let kryptoniteImage = new Image();
kryptoniteImage.src = "../images/kryptonite-png.png";

let gameOverImage = new Image();
gameOverImage.src = "../images/superman-game-over1.png";

let superman = new Objeto(250, 450, 60, 150, supermanImage, ctx);
let kryptonitesObjects = [];
let gameOver = new Objeto(0,0,600,600,gameOverImage,ctx)

const jugar = () => {
    //detecta colision de superman y Kriptonitas
    for (let kryptonite of kryptonitesObjects) {
      kryptonite.borrar();
      kryptonite.y += 5;
      kryptonite.dibujar();
      if (superman.detectarColision(kryptonite)) {
        gameOver.dibujar();
        setTimeout(() => {
            jugar
        }, 6000);

      }
    }
  };
  
  //Crea los objetos Kriptonitas aleatoriamente
  const crearkryptonites = () => {
    const randomPositionX = Math.floor(Math.random() * 280);
    const kryptonite = new Objeto(
      randomPositionX,
      10,
      40,
      50,
      kryptoniteImage,
      ctx
    );
    kryptonitesObjects.push(kryptonite);
  };

  const cargaInicial = () => {
    superman.dibujar();
    setInterval(jugar, 200);
    setInterval(crearkryptonites, 4000);
  };

  const moverSuperman = (e) => {
    superman.borrar();
    if (e.key === "ArrowLeft") {
      superman.x -= 5;
    }
    if (e.key === "ArrowRight") {
      superman.x += 5;
    }
    if (e.key === "ArrowUp") {
      superman.y -= 5;
    }
    if (e.key === "ArrowDown") {
      superman.y += 5;
    }
    
    superman.dibujar();
  };

  

window.addEventListener("load", cargaInicial);

window.addEventListener("keydown", moverSuperman);