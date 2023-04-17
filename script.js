/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
// Constantes limites B L & R
// eslint-disable-next-line no-unused-vars
const limitBottom = 16 // document.querySelectorAll('.body>tr').length; // limite abajo == 16
const limitLeft = 1 // limite izq == 1
const limitRight = document.querySelectorAll('.row1>td').length // limite dcha == 17

let alien
let notalien

let game = new Game()

game.letsStart()

// captura evento pulsar tecla & llama a la función moveAllien pasándole por parámetro el evento capturado

window.addEventListener('keydown', function (event) {
  alien.moveAlien(event.code)
})
