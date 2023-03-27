/*let alien = {
    pos: {
        x: 9,
        y: 16
    },
}

let notalien = {
    pos: {

    },
}

*/

// ****** Variables & Methods call ****** 
// const limites B L & R
const limitBottom = document.querySelectorAll('.body>tr').length; // limite abajo == 17
const limitLeft = 1; // limite izq == 1
const limitRight = document.querySelectorAll('.row1>td').length; // limite dcha == 16

// variables para naves espaciales zona colisión
let spaceShip = [];
let arrships = [];
let minShip = 9;
let timein = 0; // interval
let time; // timeout
let cell = undefined;



//creación objetos alien (pintar y despintar)
let alien = new Alien(9,16)
let notalien = new NotAlien(0,0)

game();

function stop (){

    //window.removeEventListener()   ?????????????????????
    clearInterval(timein)
    clearInterval(timeInSuppo)
    clearTimeout(time)
    clearTimeout(timeSuppo)
    alert ("GAMEOVER")
}


//captura evento pulsar tecla & llama a la función moveAllien pasándole por parámetro el evento capturado
window.addEventListener('keydown', function (event) {
    moveAllien(event.code)
})

function moveAllien (move) {
    switch(move){
        case "ArrowLeft": 
            //if controla los limites de los bordes
            if(alien.x > limitLeft){
                //izq actualiza x -1
                alien.x--;
                //pinta alien en posicion donde se mueve
                alien.drawAllien()
                //recoge posicion x & y para despintar alien
                notalien.x = alien.x+1;
                notalien.y = alien.y;
                notalien.clearAllien() 
            }
        break;
        case "ArrowRight": 
            if(alien.x < limitRight){
                alien.x++;
                alien.drawAllien()
                notalien.x = alien.x-1;
                notalien.y = alien.y;
                notalien.clearAllien()
            }
        break;
        case "ArrowUp": 
            alien.y--;
            alien.drawAllien()
            notalien.y = alien.y+1;
            notalien.x = alien.x;
            notalien.clearAllien()
        break;
        case "ArrowDown":
            if(alien.y < limitBottom){
                alien.y++;
                alien.drawAllien()
                notalien.y = alien.y-1;
                notalien.x = alien.x;
                notalien.clearAllien()
            }
        break;
    }
}

