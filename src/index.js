const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "lightgray";

let supermanImage = new Image();
supermanImage.src = "../images/superman-flying.png";

let kryptoniteImage = new Image();
kryptoniteImage.src = "../images/kryptonite-png.png";

let superman = new Objeto(250, 450, 60, 150, supermanImage, ctx);
let kryptonitesObjects = [];

const jugar = () => {
    for (let kryptonite of kryptonitesObjects) {
      kryptonite.borrar();
      kryptonite.y += 5;
      kryptonite.dibujar();
      if (superman.detectarColision(kryptonite)) {
        console.warn("Has perdido");
      }
    }
  };
  
  const crearkryptonites = () => {
    const randomPositionX = Math.floor(Math.random() * 280);
    const kryptonite = new Objeto(
      randomPositionX,
      0,
      70,
      80,
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