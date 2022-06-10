const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.style.backgroundColor = "lightgray";

let supermanImage = new Image();
supermanImage.src = "images/superman-flying.png";

let kryptoniteImage = new Image();
kryptoniteImage.src = "images/kryptonite-png.png";

let supermanImage = new Objeto(600, 280, 20, 50, supermanImage, ctx);
let kryptoniteImage = [];

