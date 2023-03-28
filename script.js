// Constantes limites B L & R
const limitBottom = document.querySelectorAll('.body>tr').length; // limite abajo == 16
const limitLeft = 1; // limite izq == 1
const limitRight = document.querySelectorAll('.row1>td').length; // limite dcha == 17


//creación objetos alien (pintar y despintar)
let alien = new Alien(9,16)
let notalien = new NotAlien(0,0)


// inicio del juego
Game();


function stop (){
    //window.removeEventListener()   ?????????????????????
    clearInterval(timeInSuppo)
    clearTimeout(timeSuppo)
    clearInterval(timein)
    clearTimeout(time)
    gameOver()
} 



//captura evento pulsar tecla & llama a la función moveAllien pasándole por parámetro el evento capturado
window.addEventListener('keydown', function (event) {
    alien.moveAlien(event.code)
});

////////////////////////
// T I M E R

let countDown; 
var timeLeft = 20;
let thetimer = document.getElementById("timer")

//se acaba el tiempo
function noTimeLeft() {
  cancelInterval(countDown);
  gameOver()
}

function updateTimer() {
  timeLeft--;
  if(timeLeft >= 0){
     thetimer.value = timeLeft.innerText;
  }else {
    noTimeLeft();
  }
}

function startTimer() {
  countDown = setInterval(updateTimer, 1000);
  updateTimer();
}