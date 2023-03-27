function game() {
    let minSupport = 4;
    // llamada métodos
    //aparece alien   
    alien.drawAllien()

    //creamos naves en zona colision
    drawAllColliders(1, 4)
    drawAllColliders(1, 2)
    drawAllColliders(2, 4)
    drawAllColliders(1, 3)

    drawAllSupports(2, 3, minSupport)
    minSupport++
    drawAllSupports(2, 3, minSupport)
    minSupport++







    // empieza a mover los elementos de colision
    timeinterval()
    timeintervalSuppo()
}
