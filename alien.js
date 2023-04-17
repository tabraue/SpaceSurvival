/* eslint-disable no-undef */
// función constructora del alien

function Alien (x, y) {
  this.x = x
  this.y = y
}

// busca la celda donde se mueve el alien y la "pinta"
Alien.prototype.drawAlien = function () {
  const allienCell = document.querySelector(`.row${this.y} .col${this.x}`)
  allienCell.classList.add('allien')
}

// busca la celda en zona support para pintar alien+support
Alien.prototype.drawAlienCell = function () {
  const aliencelinsupo = document.querySelector('.row' + this.y + ' .col' + this.x)
  aliencelinsupo.classList.add('allien')
  aliencelinsupo.classList.add('spaceSupporter')
}

// gestiona el movimiento del alien a través del evento keydown
Alien.prototype.moveAlien = function (move) {
  switch (move) {
    case 'ArrowLeft':
      if (alien.x > limitLeft) {
        alien.x--
        alien.drawAlien()
        notalien.x = alien.x + 1
        notalien.y = alien.y
        notalien.clearAlien()
      }
      break
    case 'ArrowRight':
      if (alien.x < limitRight) {
        alien.x++
        alien.drawAlien()
        notalien.x = alien.x - 1
        notalien.y = alien.y
        notalien.clearAlien()
      }
      break
    case 'ArrowUp':
      if (alien.y === 1) {
        if (alien.x === 4 || alien.x === 14) {
          notalien.y = alien.y
          notalien.x = alien.x
          notalien.clearAlien()
          winner()
        }
      } else {
        alien.y--
        alien.drawAlien()
        notalien.y = alien.y + 1
        notalien.x = alien.x
        notalien.clearAlien()
      }
      break
    case 'ArrowDown':
      if (alien.y < limitBottom) {
        alien.y++
        alien.drawAlien()
        notalien.y = alien.y - 1
        notalien.x = alien.x
        notalien.clearAlien()
      }
      break
    case 'Space':
      if (alien.y >= 4 && alien.y <= 8) {
        alien.y = alien.y - 2
        alien.drawAlien()
        notalien.y = alien.y + 2
        notalien.x = alien.x
        notalien.clearAlien()
      }
      break
  }
}

/// //////////////////////////////////////////////////////////////////////////////////

// function constructora del no-alien: despintar alien

function NotAlien (x, y) {
  this.x = x
  this.y = y
}

// busca la celda que deja atrás el alien y la "despinta" ** tiene en cuenta la posibilidad de la ultima celda
// para que no de fallo

NotAlien.prototype.clearAlien = function (isLastCell) {
  const emptyCell = document.querySelector(`.row${this.y} .col${this.x}`)
  try {
    if (isLastCell) { emptyCell.classList.remove('spaceSupporter') }

    emptyCell.classList.remove('allien')
    emptyCell.classList.add('td')
  } catch (error) {
    stop()
  }
}
