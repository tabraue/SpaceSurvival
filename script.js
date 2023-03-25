let allien = {
    pos: {
        x: 9,
        y: 16
    },
}

let cell = {
    pos: {
        x: 9,
        y: 16
    },
}






// const limites B L & R
const limitBottom= document.querySelectorAll('.body>tr').length// limite dcha == 16
const limitLeft = 1 // limite izq == 1
const limitRight = document.querySelectorAll('.row1>td').length // limite abajo == 17

let shipCell = '';
let shipCell2 = '' ;
let shipCell3 = '';


drawAllien()
drawSpaceShip()



function drawAllien() {
    //pinta //busca la celda que queremos y la "pinta"
    let allienCell = document.querySelector(`.row${allien.pos.y} .col${allien.pos.x}`)
    allienCell.classList.add('allien')

}

function clearAllien(){   
    //despintar //busca la celda que queremos y la "despinta"
    let emptyCell = document.querySelector(`.row${cell.pos.y} .col${cell.pos.x}`)
    emptyCell.classList.remove('allien')
    emptyCell.classList.add('td')
}

function drawSpaceShip(){

    let collisionRow = Math.ceil( Math.random() * (13 - 9) + 9);
    let collisionCol = Math.ceil( Math.random() * (17 - 1) + 1);

    shipCell = document.querySelector('.row'+collisionRow+' .col'+ collisionCol)
    shipCell2 = document.querySelector('.row'+collisionRow+' .col'+ (collisionCol+1))
    shipCell3 = document.querySelector('.row'+collisionRow+' .col'+ (collisionCol+2))

    shipCell.classList.remove('td')
    shipCell.classList.add("spaceShip")
    shipCell2.classList.remove('td')
    shipCell2.classList.add("spaceShip")    
    shipCell3.classList.remove('td')
    shipCell3.classList.add("spaceShip")
}

function moveSpaceShip(){
    


}



//DETECTA MOVIVIMIENTO CON FLECHAS
// window.addEventListener('keydown', function (event) {
//     console.log(event.code)
//     switch (event.code) {        
//         case "ArrowLeft":
//            // allien.direction = "left"
//             moveAllien('left')
//             break;
//         case "ArrowRight":
//             allien.direction = "right"
//             break;
//         case "ArrowUp":
//             allien.direction = "up"
//             break;
//         case "ArrowDown":
//             allien.direction = "down"
//             break;
//     }
// })

//captura evento pulsar tecla & llama a la función moveAllien pasándole por parámetro el evento capturado
window.addEventListener('keydown', function (event) {
    moveAllien(event.code)
})

function moveAllien (move) {
    switch(move){
        case "ArrowLeft": 
            //if controla los limites de los bordes
            if(allien.pos.x > limitLeft){
                //izq actualiza x -1
                allien.pos.x--
                //pinta alien en posicion donde se mueve
                drawAllien()
                //recoge posicion x & y para despintar alien
                cell.pos.x = allien.pos.x+1;
                cell.pos.y = allien.pos.y;
                clearAllien() 
            }
        break;
        case "ArrowRight": 
            if(allien.pos.x < limitRight){
                allien.pos.x++
                drawAllien()
                cell.pos.x = allien.pos.x-1;
                cell.pos.y = allien.pos.y;
                clearAllien()
            }
        break;
        case "ArrowUp": 
            allien.pos.y--
            drawAllien()
            cell.pos.y = allien.pos.y+1;
            cell.pos.x = allien.pos.x;
            clearAllien()
        break;
        case "ArrowDown":
            if(allien.pos.y < limitBottom){
                allien.pos.y++
                drawAllien()
                cell.pos.y = allien.pos.y-1;
                cell.pos.x = allien.pos.x;
                clearAllien()
            }
        break;
    }
}

