// Constantes limites B L & R
const limitBottom = 16;//document.querySelectorAll('.body>tr').length; // limite abajo == 16
const limitLeft = 1; // limite izq == 1
const limitRight = document.querySelectorAll('.row1>td').length; // limite dcha == 17

/*
let easy = document.getElementById("easy").checked;
let medium = document.getElementById("medium").checked;
let high = document.getElementById("high").checked;
console.log(easy,medium,high)
let speed;

if(easy)
    speed = 300;
else if(medium)
    speed = 100;
else
    speed = 10;

*/





let alien;
let notalien;

let game = new Game();
console.log()
game.letsStart();


//captura evento pulsar tecla & llama a la función moveAllien pasándole por parámetro el evento capturado
window.addEventListener('keydown', function (event) {
    alien.moveAlien(event.code)
});
