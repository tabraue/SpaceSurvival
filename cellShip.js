/* eslint-disable no-unused-vars */
let shipCell = ''

// función constructora, contenedoras de naves espaciales aka arrships
function MotherShip (spaceShip) {
  this.spaceShip = spaceShip
}

// función constructora de celdas para las naves espaciales
function CellShip (x, y) {
  this.x = x
  this.y = y
};

// se añaden try-catch para controlar posibles errores y realizar función de parar los intervalos (movimientos)
CellShip.prototype.drawCell = function () {
  try {
    shipCell = document.querySelector('.row' + this.y + ' .col' + this.x)
    shipCell.classList.remove('td')
    shipCell.classList.add('spaceShip')
  } catch (error) {
    stop()
  }
}

CellShip.prototype.undrawCell = function () {
  try {
    shipCell = document.querySelector('.row' + this.y + ' .col' + this.x)

    shipCell.classList.remove('spaceShip')
    shipCell.classList.add('td')
  } catch (error) {
    stop()
  }
}
