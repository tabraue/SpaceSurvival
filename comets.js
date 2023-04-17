/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// variables para cometas zona support

let spaceSupporter = []
const arrcomets = []
let timeInSuppo // interval
let timeSuppo // timeout
let cellSuppo
const flag = false
const positionAlien = 0
let arrcolisionalienX = []
let arrcolisionalienY = []

// dibuja elems en zona support: cantidad det de X celdas
function drawAllSupports (qty, rockOrShip, minSupport) {
  for (let i = 1; i <= qty; i++) {
    drawSupporters(rockOrShip, minSupport)
  }
}

// crea 1 cometa
function drawSupporters (qty, minSupport) {
  let rowFirstCellS
  let colFirstCellS
  let miqueridocellsuportador
  let supporterRow
  let supporterCol

  for (let i = 0; i < qty; i++) {
    if (spaceSupporter.length === 0) {
      // de forma random escoge una columna entre la 1 y 17
      supporterCol = Math.floor(Math.random() * ((17 - 1) + 1) + 1)
      if (supporterCol <= 4) {
        supporterCol += 4
      }
      supporterRow = minSupport

      miqueridocellsuportador = new CellSupporter(supporterCol, supporterRow)
    } else {
      rowFirstCellS = spaceSupporter[0].y
      colFirstCellS = spaceSupporter[0].x - i

      miqueridocellsuportador = new CellSupporter(colFirstCellS, rowFirstCellS)
    }
    miqueridocellsuportador.drawCellSupp()
    spaceSupporter.push(miqueridocellsuportador)
  }

  arrcomets.push(new MotherSupporter(spaceSupporter))
  spaceSupporter = []
}

// creamos un objeto CellSupporter que tiene las dos coordenadas, despintamos y pintamos
// actualizando la posicion de X aumentadole (+1)
// Cuando una celda se mueve tenemos que guardar
// en el array de cometas la nueva posicion de esta celda
function moveSupporters (j, i) {
  cellSuppo = new CellSupporter(arrcomets[j].spaceSupporter[i].x, arrcomets[j].spaceSupporter[i].y)

  if (cellSuppo.x === limitRight) {
    cellSuppo.undrawCellSupp()
    cellSuppo.x = 1
    cellSuppo.drawCellSupp()
  } else {
    if (cellSuppo.x === alien.x && cellSuppo.y === alien.y) {
      cellSuppo.x += 1
      notalien.x = alien.x
      notalien.y = alien.y
      alien.x = cellSuppo.x
      alien.y = cellSuppo.y
      const last = arrcomets[j].spaceSupporter[i] === arrcomets[j].spaceSupporter[arrcomets[j].spaceSupporter.length - 1]
      alien.drawAlienCell()
      notalien.clearAlien(last)
    } else {
      cellSuppo.undrawCellSupp()
      cellSuppo.x += 1
      cellSuppo.drawCellSupp()
    }
  }

  last = false
  arrcomets[j].spaceSupporter[i] = cellSuppo
}

function timeintervalSuppo (speed) {
  timeInSuppo = setInterval(function () {
    intervalmoveSuppo()
  }, speed + 300)
}

// Esta funcion recorre dos array, el primero representa un conjunto de cometas el segundo
// es una cometa que tiene un numero determinado de celdas. Al llamar a moveSupporters en cada
// vuelta de bucle hace que se muevan los cometas. En realidad pinta y "despinta" la celda de
// la derecha y crea el efecto de movimiento.
function intervalmoveSuppo () {
  for (let j = 0; j < arrcomets.length; j++) {
    for (let i = 0; i < arrcomets[j].spaceSupporter.length; i++) {
      timeSuppo = setTimeout(moveSupporters, 10, j, i)
      checkaliencolision()
    }
  }
}

// Esta funcion comprueba la colisión del alien con el "espacio" SOLO cuando llega a las filas entre 4 y 7
// con doble for loop recorremos la posición de los cometas, y las añadimos a arr de posición X y posición Y
// en caso que no se encuentre la posición x del alien dentro del arr X de los cometas ((indexOf)) ===> game over
// si no, limpiamos arrays y comenzamos
function checkaliencolision () {
  if (alien.y <= 7 && alien.y >= 4) {
    for (let j = 0; j < arrcomets.length; j++) {
      for (let i = 0; i < arrcomets[j].spaceSupporter.length; i++) {
        arrcolisionalienX.push(arrcomets[j].spaceSupporter[i].x)
        arrcolisionalienY.push(arrcomets[j].spaceSupporter[i].y)
      }
    }
    if (arrcolisionalienX.indexOf(alien.x) === -1) {
      stop()
      gameOver()
    } else {
      arrcolisionalienX = []
      arrcolisionalienY = []
    }
  }
}
