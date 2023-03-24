let alien = {
    x: 9,
    y: 16,
    direction: 'left'

};

//document.getElementById()





//DETECTA MOVIVIMIENTO CON FLECHAS
window.addEventListener('keydown', function (event) {
    switch (event.code) {
        case "ArrowLeft":
            alien.direction = "left"
            break
        case "ArrowRight":
            alien.direction = "right"
            break
        case "ArrowUp":
            alien.direction = "up"
            break
        case "ArrowDown":
            alien.direction = "down"
            break
    }
})