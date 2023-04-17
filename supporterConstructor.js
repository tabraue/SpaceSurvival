/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
// función constructora zona support

function MotherSupporter(spaceSupporter) {
  this.spaceSupporter = spaceSupporter
}

// función constructora de celdas la zona support
let supporterCell = ''
let suppoAlienCell

function CellSupporter(x, y) {
  this.x = x
  this.y = y
};

CellSupporter.prototype.drawCellSupp = function () {
  supporterCell = document.querySelector('.row' + this.y + ' .col' + this.x)

  try {
    supporterCell.classList.remove('td')
    supporterCell.classList.add('spaceSupporter')
  } catch (error) {
    gameOver()
    stop()
  }
}

CellSupporter.prototype.undrawCellSupp = function () {
  supporterCell = document.querySelector('.row' + this.y + ' .col' + this.x)

  try {
    supporterCell.classList.add('td')
    supporterCell.classList.remove('spaceSupporter')
  } catch (error) {
    gameOver()
    stop()
  }
}
