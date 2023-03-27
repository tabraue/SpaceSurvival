let alien = {
    pos: {
        x: 9,
        y: 16
    },
}

let notalien = {
    pos: {

    },
}


// ****** Variables & Methods call ****** 
// const limites B L & R
const limitBottom = document.querySelectorAll('.body>tr').length; // limite abajo == 17
const limitLeft = 1; // limite izq == 1
const limitRight = document.querySelectorAll('.row1>td').length; // limite dcha == 16

// variables para naves espaciales zona colisión
let spaceShip = [];
let arrships = [];
let minShip = 9;
let timein = 0;
let time;
let cell = undefined;

//variables para cometas zona support
let minSupport = 4;
let spaceSupporter = [];
let arrcomets = [];
let timeInSuppo;
let cellSuppo = undefined;



game();

//captura evento pulsar tecla & llama a la función moveAllien pasándole por parámetro el evento capturado
window.addEventListener('keydown', function (event) {
    moveAllien(event.code)
})

function moveAllien (move) {
    switch(move){
        case "ArrowLeft": 
            //if controla los limites de los bordes
            if(alien.pos.x > limitLeft){
                //izq actualiza x -1
                alien.pos.x--;
                //pinta alien en posicion donde se mueve
                drawAllien()
                //recoge posicion x & y para despintar alien
                notalien.pos.x = alien.pos.x+1;
                notalien.pos.y = alien.pos.y;
                clearAllien() 
            }
        break;
        case "ArrowRight": 
            if(alien.pos.x < limitRight){
                alien.pos.x++;
                drawAllien()
                notalien.pos.x = alien.pos.x-1;
                notalien.pos.y = alien.pos.y;
                clearAllien()
            }
        break;
        case "ArrowUp": 
            alien.pos.y--;
            drawAllien()
            notalien.pos.y = alien.pos.y+1;
            notalien.pos.x = alien.pos.x;
            clearAllien()
        break;
        case "ArrowDown":
            if(alien.pos.y < limitBottom){
                alien.pos.y++;
                drawAllien()
                notalien.pos.y = alien.pos.y-1;
                notalien.pos.x = alien.pos.x;
                clearAllien()
            }
        break;
    }
}

