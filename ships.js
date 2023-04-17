/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// variables para naves espaciales zona colisión
let spaceShip = []
const arrships = []
let minShip = 9
let timein = 0 // interval
let time // timeout
let cell

// dibuja elems en zona colisión: cantidad det de 2 y 4 celdas
function drawAllColliders (qty, rockOrShip) {
  for (let i = 1; i <= qty; i++) {
    drawSpaceShip(rockOrShip)
  }
}

// crea 1 nave
function drawSpaceShip (qty) {
  let rowFirstCell
  let colFirstCell
  let cellSpaceShip
  let collisionRow
  let collisionCol

  for (let i = 0; i < qty; i++) {
    if (spaceShip.length === 0) {
      collisionCol = Math.floor(Math.random() * ((17 - 1) + 1) + 1)
      if (collisionCol <= 4) {
        collisionCol += 4
      }
      collisionRow = minShip
      minShip++

      // eslint-disable-next-line no-undef
      cellSpaceShip = new CellShip(collisionCol, collisionRow)
    } else {
      rowFirstCell = spaceShip[0].y
      colFirstCell = spaceShip[0].x - i

      cellSpaceShip = new CellShip(colFirstCell, rowFirstCell)
    }

    cellSpaceShip.drawCell()
    spaceShip.push(cellSpaceShip)
  }

  arrships.push(new MotherShip(spaceShip))
  spaceShip = []
}

// creamos un objeto Cellship que tiene las dos coordenadas, despintamos y pintamos
// actualizando la posicion de X aumentadole (+1)
// Cuando una celda se mueve tenemos que guardar
// en el array de naves la nueva posicion de esta celda
function moveSpaceShip (j, i) {
  cell = new CellShip(arrships[j].spaceShip[i].x, arrships[j].spaceShip[i].y)

  if (cell.x === limitRight) {
    cell.undrawCell()
    cell.x = 1
    cell.drawCell()
  } else {
    cell.undrawCell()
    cell.x += 1
    cell.drawCell()
  }
  arrships[j].spaceShip[i] = cell

  if (cell.x === alien.x && cell.y === alien.y) {
    gameOver()
  }
}

const flag2 = false

function checkRadio (flag2) {
  if (flag2) {
    const easy = document.getElementById('easy').checked
    const medium = document.getElementById('medium').checked
    const high = document.getElementById('high').checked
    let speed

    if (easy) { speed = 150 } else if (medium) { speed = 50 } else if (high) { speed = 35 }

    timeinterval(speed)
    timeintervalSuppo(speed)
  }
}

function timeinterval (speed) {
  timein = setInterval(intervalmove, speed)
}

// Esta funcion recorre dos array, el primero representa un conjunto de naves el segundo
// es una nave que tiene un numero determinado de celdas. Al llamar a moveSpaceShip en cada
// vuelta de bucle hace que se muevan las naves. En realidad pinta y "despinta" la celda de
// la derecha y crea el efecto de movimiento.
function intervalmove (speed) {
  for (let j = 0; j < arrships.length; j++) {
    for (let i = 0; i < arrships[j].spaceShip.length; i++) {
      time = setTimeout(moveSpaceShip, 10, j, i)
    }
  }
}
