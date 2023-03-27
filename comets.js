// dibuja elems en zona colisión: cantidad det de 2 y 4 celdas
function drawAllSupports(qty, rockOrShip) {
    for (let i = 1; i <= qty; i++) {
        drawSupporters(rockOrShip)
    }
}

//crea 1 nave
let minSupport= 4;
function drawSupporters(qty) {
    let rowFirstCell;
    let colFirstCell;
    let cellSupporters;
    let supporterRow;
    let supporterCol;

    for (let i = 0; i < qty; i++) {

        if (spaceShip.length == 0) {
            //de forma random escoge una columna entre la 1 y 17
            supporterCol = Math.ceil(Math.random() * ((17 - 1) + 1) + 1);
            if (supporterCol <= 4) {
                supporterCol += 4
            }
            supporterRow = minSupport;
            minSupport++;
            /*
            do{
                supporterRow = Math.ceil( Math.random() * ((13 - 9) +1) + 9);

            }while( (arrships.length != 0) && (arrships[0].spaceShip[0].y == supporterRow) );
            */

            cellSupporters = new CellShip(supporterCol, supporterRow)

        } else {
            rowFirstCell = spaceShip[0].y;
            colFirstCell = spaceShip[0].x - i;

            cellSupporters = new CellShip(colFirstCell, rowFirstCell)
        }

        cellSupporters.drawCell()
        spaceShip.push(cellSupporters)
    }

    arrships.push(new MotherShip(spaceShip))
    spaceShip = [];
}

function moveSpaceShip(j, i) {

    // console.log(tempShip.spaceShip[0].y) // -> se obtiene coordenada exacta y

    // creamos un objeto Cellship que tiene las dos coordenadas, despintamos y pintamos
    // actualizando la posicion de X aumentadole (+1)
    // Cuando una celda se mueve tenemos que guardar
    // en el array de naves la nueva posicion de esta celda 



    cell = new CellShip(arrships[j].spaceShip[i].x, arrships[j].spaceShip[i].y);

    if (cell.x == limitRight) {
        cell.undrawCell();
        cell.x = 1;
        cell.drawCell();
    } else {
        cell.undrawCell();
        cell.x += 1;
        cell.drawCell();
    }
    arrships[j].spaceShip[i] = cell;

    //  controla colision
    if (cell.x == alien.pos.x && cell.y == alien.pos.y) {
        alert("ko") // PENDIENTE MENSAJE GAME OVER
    }










    //console.log(cell.x)
}

function timeinterval() {
    timein = setInterval(intervalmove, 100);

}


// Esta funcion recorre dos array, el primero representa un conjunto de naves el segundo
// es una nave que tiene un numero determinado de celdas. Al llamar a moveSpaceShip en cada
// vuelta de bucle hace que se muevan las naves. En realidad pinta y "despinta" la celda de
// la derecha y crea el efecto de movimiento. 
function intervalmove() {
    for (let j = 0; j < arrships.length; j++) {
        for (let i = 0; i < arrships[j].spaceShip.length; i++) {
            time = setTimeout(moveSpaceShip, 10, j, i)
        }
    }
}
