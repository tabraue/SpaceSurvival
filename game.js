function game() {

    // llamada métodos
    //aparece alien
    drawAllien()

    //creamos naves en zona colision
    drawAllColliders(1, 4)
    drawAllColliders(1, 2)
    drawAllColliders(2, 4)
    drawAllSupports(4, 3)


    // empieza a mover los elementos de colision
    timeinterval()
    timeintervalSuppo()
}
