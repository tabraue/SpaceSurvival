//variables para cometas zona support

let spaceSupporter = [];
let arrcomets = [];
let timeInSuppo; // interval
let timeSuppo; // timeout
let cellSuppo = undefined;



// dibuja elems en zona support: cantidad det de X celdas
function drawAllSupports(qty, rockOrShip, minSupport) {
    for (let i = 1; i <= qty; i++) {
        drawSupporters(rockOrShip, minSupport)
    }
}

//crea 1 cometa
function drawSupporters(qty, minSupport) {
    let rowFirstCellS;
    let colFirstCellS;
    let miqueridocellsuportador;
    let supporterRow;
    let supporterCol;


    for (let i = 0; i < qty; i++) {

        if (spaceSupporter.length == 0) {
           
            //de forma random escoge una columna entre la 1 y 17
            supporterCol = Math.floor(Math.random() * ((17 - 1) + 1) + 1);
            if (supporterCol <= 4) {
                supporterCol += 4
            }
            supporterRow = minSupport;
    
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

// creamos un objeto CellSupporter que tiene las dos coordenadas, despintamos y pintamos
// actualizando la posicion de X aumentadole (+1)
// Cuando una celda se mueve tenemos que guardar
// en el array de cometas la nueva posicion de esta celda
function moveSupporters(j, i) {

    cellSuppo = new CellSupporter(arrcomets[j].spaceSupporter[i].x, arrcomets[j].spaceSupporter[i].y);

    if (cellSuppo.x == limitRight) {
        cellSuppo.undrawCellSupp();
        cellSuppo.x = 1;
        cellSuppo.drawCellSupp();
    } else {
        if (cellSuppo.x == alien.x && cellSuppo.y == alien.y){
            cellSuppo.x += 1;
            notalien.x = alien.x;
            notalien.y = alien.y;
            alien.x = cellSuppo.x;
            alien.y = cellSuppo.y;
            let last = arrcomets[j].spaceSupporter[i] == arrcomets[j].spaceSupporter[arrcomets[j].spaceSupporter.length-1];
            alien.drawAlienCell();
            notalien.clearAllien(last);
      
        }else{
            cellSuppo.undrawCellSupp();
            cellSuppo.x += 1;
            cellSuppo.drawCellSupp();
           
        }
    }
    last = false;
    arrcomets[j].spaceSupporter[i] = cellSuppo;

}


function timeintervalSuppo() {
    
    timeInSuppo = setInterval(function() {
       // checkHundido();
        intervalmoveSuppo();
    }, 1000);
}


// Esta funcion recorre dos array, el primero representa un conjunto de cometas el segundo
// es una cometa que tiene un numero determinado de celdas. Al llamar a moveSupporters en cada
// vuelta de bucle hace que se muevan los cometas. En realidad pinta y "despinta" la celda de
// la derecha y crea el efecto de movimiento. 
function intervalmoveSuppo() {
    for (let j = 0; j < arrcomets.length; j++) {
        for (let i = 0; i < arrcomets[j].spaceSupporter.length; i++) {
            timeSuppo = setTimeout(moveSupporters, 10, j, i)

        }
    }
}

/*
function checkaliencolision(){
 for (let j = 0; j < arrcomets.length; j++) {
        for (let i = 0; i < arrcomets[j].spaceSupporter.length; i++) {
            if(alien.y >= 4 && alien.y <= 7){
                if (arrcomets[j].spaceSupporter[i].x != alien.x && arrcomets[j].spaceSupporter[i].y != alien.y) {
                    stop();
                }
            }
        }
    }

}
*/




function drawblackholes(){

    blackhole = document.querySelector('.row1' + ' .col1')
    console.log(blackhole)
    blackhole.classList.remove('td')
    blackhole.classList.add('blackhole')

}