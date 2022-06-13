const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let intervalIdKripto = '';
let intervalIdJugar = '';

canvas.style.backgroundColor = "lightblue";

let supermanImage = new Image();
supermanImage.src = "../images/superman-flying.png";

let kryptoniteImage = new Image();
kryptoniteImage.src = "../images/kryptonite-png.png";

let gameOverImage = new Image();
gameOverImage.src = "../images/superman-game-over1.png";

let superman = new Objeto(250, 450, 60, 150, supermanImage, ctx);
let kryptonitesObjects = [];
let gameOver = new Objeto(0,0,600,600,gameOverImage,ctx);

let gameRuning = true;

const jugar = () => {
    //detecta colision de superman y Kriptonitas
    for (let kryptonite of kryptonitesObjects) {
      kryptonite.borrar();
      kryptonite.y += 5;
      kryptonite.dibujar();
      if (superman.detectarColision(kryptonite)) {
        gameRuning = false;
        clearCanvas();
        gameOver.dibujar();
        //kryptonite.borrar();
        clearInterval(intervalIdKripto)
        clearInterval(intervalIdJugar)
        //console.log(intervalIdKripto)
        //console.log(intervalIdJugar)
        if(gameRuning = true){
            setTimeout(() => {              //la pantalla de game over no queda bien, siguen saliendo Kriptonitas
                jugar();
            }, 8000);
        }
  
      }
    }
};
  
  //Crea los objetos Kriptonitas aleatoriamente
  const crearkryptonites = () => {
    const randomPositionX = Math.floor(Math.random() * 580);
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
    console.log(gameRuning)
    if(gameRuning = true){
        superman.dibujar();
        //console.log(intervalIdJugar);
        intervalIdJugar = setInterval(jugar, 200);
        intervalIdKripto = setInterval(crearkryptonites, 4000);
    }
  
  };

  const moverSuperman = (e) => {   //consultar como evitar rebote de imagen en lado derecho e inferior
    superman.borrar();
    if(gameRuning === true) {

    if (e.key === "ArrowLeft") {
      superman.x -= 5;
    }if (superman.x < 0) {
        superman.x = superman.x + 5;
    }
    
    if (e.key === "ArrowRight") {
      superman.x += 5;
    }if (superman.x > 540) {
        superman.x = 600 - 60; //La imagen rebota no se detiene
    }

    if (e.key === "ArrowUp") {
      superman.y -= 5;
    }if (superman.y < 0) {
        superman.y = superman.y + 5;
    }

    if (e.key === "ArrowDown") {
      superman.y += 5;
    }if (superman.y > 450) {
        superman.y = 600 - 150;
    }

    }
    superman.dibujar();
  };

  const clearCanvas = () => {
    console.log("Hola")
    ctx.clearRect(0,0,600,600);
  } 
  

window.addEventListener("load", cargaInicial);

window.addEventListener("keydown", moverSuperman);