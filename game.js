/* eslint-disable no-undef */
function Game () {

}

Game.prototype.letsStart = function () {
  let minSupport = 4

  // creación objetos alien (pintar y despintar)
  alien = new Alien(9, 16)
  notalien = new NotAlien(0, 0)

  // aparece alien
  alien.drawAlien()

  // creamos naves en zona colision
  drawAllColliders(1, 4)
  drawAllColliders(1, 2)
  drawAllColliders(2, 4)
  drawAllColliders(1, 3)

  // creamos los cometas en la zona de support
  drawAllSupports(2, 2, minSupport)
  minSupport++
  drawAllSupports(3, 1, minSupport)
  minSupport++
  drawAllSupports(3, 2, minSupport)
  minSupport++
  drawAllSupports(2, 3, minSupport)

  // empieza a mover los elementos de colision
  checkRadio()
}
