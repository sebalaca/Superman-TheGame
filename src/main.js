// * GLOBAL VARIABLES
//Selecciono classes
let gameIntro = document.querySelector("#game-intro");
let gameOverScreen = document.querySelector("#gameover-screen");
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");
let newGame;
let songs = document.getElementById("songs");

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  songs.play();
  songs.volume = 0.1;
  songs.loop = true;
  gameIntro.style.display = "none";
  canvas.style.display = "flex";
  canvas.style.backgroundColor = "lightblue";
  gameOverScreen.style.display = "none";
  newGame = new Game(ctx);
  newGame.init()
};

//Ejecuta la recarga del juego para juegar otra vez
const playAgain = () => {
  window.location.reload();
};

// * ADD EVENT LISTENERS

let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startGame);

document.addEventListener("keydown", (e) => {
  newGame.player.supermanMovement(e);
});

let restart = document.querySelector("#restart-btn");
restart.addEventListener("click", playAgain);
