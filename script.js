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

// ****** Constantes ****** 
// const limites B L & R
const limitBottom = document.querySelectorAll('.body>tr').length; // limite abajo == 16
const limitLeft = 1; // limite izq == 1
const limitRight = document.querySelectorAll('.row1>td').length; // limite dcha == 17

//creación objetos alien (pintar y despintar)
let alien = new Alien(9,16)
let notalien = new NotAlien(0,0)

game();

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
            if(alien.y === 1){
                if(alien.x === 4 || alien.x === 9 || alien.x === 14){
                   console.log('win!!!!!')
                    notalien.y = alien.y;
                    notalien.x = alien.x;
                    notalien.clearAllien()
                    // FUNCIÓN WIN!!!!! MENSAJE!
                }
            }else{
                alien.y--;
                alien.drawAllien();
                notalien.y = alien.y+1;
                notalien.x = alien.x;
                notalien.clearAllien();
            }
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
        case "Space":
            if(alien.y >= 4 && alien.y <= 8){
                alien.y = alien.y-2;
                alien.drawAllien()
                notalien.y = alien.y+2;
                notalien.x = alien.x;
                notalien.clearAllien()
            }
        break;
    }
}

