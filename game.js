function game() {
    let minSupport = 4;


    //aparece alien   
    alien.drawAllien()

    //creamos naves en zona colision
    drawAllColliders(1, 4)
    drawAllColliders(1, 2)
    drawAllColliders(2, 4)
    drawAllColliders(1, 3)



    //creamos los cometas en la zona de support
    drawAllSupports(2, 4, minSupport)
    minSupport++
    drawAllSupports(2, 4, minSupport)
    minSupport++
    drawAllSupports(2, 4, minSupport)
    minSupport++
    drawAllSupports(2, 2, minSupport)


    // empieza a mover los elementos de colision
    timeinterval()
    timeintervalSuppo()
}
