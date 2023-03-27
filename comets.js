



// dibuja elems en zona colisión: cantidad det de 2 y 4 celdas
function drawAllSupports(qty, rockOrShip) {
    for (let i = 1; i <= qty; i++) {
        drawSupporters(rockOrShip)
    }
}

//crea 1 nave

function drawSupporters(qty) {
    let rowFirstCellS;
    let colFirstCellS;
    let miqueridocellsuportador;
    let supporterRow;
    let supporterCol;

    for (let i = 0; i < qty; i++) {

        if (spaceSupporter.length == 0) {
            //de forma random escoge una columna entre la 1 y 17
            supporterCol = Math.ceil(Math.random() * ((17 - 1) + 1) + 1);
            if (supporterCol <= 4) {
                supporterCol += 4
            }
            supporterRow = minSupport;
            minSupport++;

            miqueridocellsuportador = new CellSupporter(supporterCol, supporterRow)

        } else {
            rowFirstCellS = spaceSupporter[0].y;
            colFirstCellS = spaceSupporter[0].x - i;

            miqueridocellsuportador = new CellSupporter(colFirstCellS, rowFirstCellS)
        }

        miqueridocellsuportador.drawCellSupp()
        spaceSupporter.push(miqueridocellsuportador)
    }

    arrcomets.push(new MotherSupporter(spaceSupporter))
    spaceSupporter = [];
}


function moveSupporters(j, i) {

    // console.log(tempShip.spaceSupporter[0].y) // -> se obtiene coordenada exacta y

    // creamos un objeto Cellship que tiene las dos coordenadas, despintamos y pintamos
    // actualizando la posicion de X aumentadole (+1)
    // Cuando una celda se mueve tenemos que guardar
    // en el array de naves la nueva posicion de esta celda




    cellSuppo = new CellSupporter(arrcomets[j].spaceSupporter[i].x, arrcomets[j].spaceSupporter[i].y);

    if (cellSuppo.x == limitRight) {
        cellSuppo.undrawCellSupp();
        cellSuppo.x = 1;
        cellSuppo.drawCellSupp();
    } else {
        cellSuppo.undrawCellSupp();
        cellSuppo.x += 1;
        cellSuppo.drawCellSupp();
    }
    arrcomets[j].spaceSupporter[i] = cellSuppo;

    /*
    //  controla colision
    if(alien.pos.y>=4 && alien.pos.y<=7){
        if (cellSuppo.x == alien.pos.x && cellSuppo.y == alien.pos.y){
            
        }
    }*/
// segunda zona colision
    if (cellSuppo.x == alien.pos.x && cellSuppo.y == alien.pos.y) {
        alert ("DEAD")
    }

    //console.log(cellSuppo.x)
}


function timeintervalSuppo() {
    timeInSuppo = setInterval(intervalmoveSuppo, 1000);

}


// Esta funcion recorre dos array, el primero representa un conjunto de cometas el segundo
// es una cometa que tiene un numero determinado de celdas. Al llamar a moveSupporters en cada
// vuelta de bucle hace que se muevan los cometas. En realidad pinta y "despinta" la celda de
// la derecha y crea el efecto de movimiento. 
function intervalmoveSuppo() {
    for (let j = 0; j < arrcomets.length; j++) {
        for (let i = 0; i < arrcomets[j].spaceSupporter.length; i++) {
            time = setTimeout(moveSupporters, 10, j, i)
        }
    }
}


