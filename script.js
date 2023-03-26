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
let min = 9;
let timein = 0;
let time;
let cell = undefined;


game();

function game(){

    // llamada métodos
    //aparece alien
    drawAllien()

    //creamos naves en zona colision
    drawAllColliders(1, 4)
    drawAllColliders(1, 2)
    drawAllColliders(2, 4)

    // empieza a mover los elementos de colision
    timeinterval()
}


// dibuja elems en zona colisión: cantidad det de 2 y 4 celdas
function drawAllColliders(qty, rockOrShip){
    for(let i = 1; i <= qty; i++){
        drawSpaceShip(rockOrShip)
    }
}


//busca la celda donde se mueve el alien y la "pinta"
function drawAllien() {
    let allienCell = document.querySelector(`.row${alien.pos.y} .col${alien.pos.x}`)
    allienCell.classList.add('allien')
}

//busca la celda que deja atrás el alien y la "despinta"
function clearAllien(){   
    let emptyCell = document.querySelector(`.row${notalien.pos.y} .col${notalien.pos.x}`)
    emptyCell.classList.remove('allien')
    emptyCell.classList.add('td')
}

//crea 1 nave
function drawSpaceShip(qty){
    let rowFirstCell;
    let colFirstCell;
    let cellSpaceShip;
    let collisionRow;
    let collisionCol;

    for (let i = 0; i < qty; i++){

        if(spaceShip.length == 0){
            //de forma random escoge una columna entre la 1 y 17
            collisionCol = Math.ceil( Math.random() * ((17 - 1)+1) + 1);
            if(collisionCol <= 4){
                collisionCol+=4
            }
            collisionRow = min;
            min++;
            /*
            do{
                collisionRow = Math.ceil( Math.random() * ((13 - 9) +1) + 9);

            }while( (arrships.length != 0) && (arrships[0].spaceShip[0].y == collisionRow) );
            */
            
            cellSpaceShip = new CellShip(collisionCol,collisionRow)

        }else{
            rowFirstCell = spaceShip[0].y;
            colFirstCell = spaceShip[0].x-i;
            
            cellSpaceShip = new CellShip(colFirstCell,rowFirstCell)
        }

        cellSpaceShip.drawCell()
        spaceShip.push(cellSpaceShip)
    }

    arrships.push(new MotherShip(spaceShip))
    spaceShip = [];
}

function moveSpaceShip(j, i){

    // console.log(tempShip.spaceShip[0].y) // -> se obtiene coordenada exacta y

    // creamos un objeto Cellship que tiene las dos coordenadas, despintamos y pintamos
    // actualizando la posicion de X aumentadole (+1)
    // Cuando una celda se mueve tenemos que guardar
    // en el array de naves la nueva posicion de esta celda 



   cell = new CellShip(arrships[j].spaceShip[i].x, arrships[j].spaceShip[i].y);

   if(cell.x == limitRight){
        cell.undrawCell();
        cell.x = 1;
        cell.drawCell();
   }else{
        cell.undrawCell();
        cell.x += 1;
        cell.drawCell();
   }
    arrships[j].spaceShip[i] = cell;
}

function timeinterval (){
    timein =  setInterval(intervalmove, 100);

}


// Esta funcion recorre dos array, el primero representa un conjunto de naves el segundo
// es una nave que tiene un numero determinado de celdas. Al llamar a moveSpaceShip en cada
// vuelta de bucle hace que se muevan las naves. En realidad pinta y "despinta" la celda de
// la derecha y crea el efecto de movimiento. 
function intervalmove(){
    for (let j = 0; j < arrships.length; j++) {
        for (let i = 0; i < arrships[j].spaceShip.length; i++) {
            time = setTimeout(moveSpaceShip, 10, j, i)
        }
    }
}

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

