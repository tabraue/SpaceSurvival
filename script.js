
let allien = {
    pos: {
        x: 9,
        y: 16
    },
    direction: "left",
}



//document.getElementById()
function drawAllien() {
    var allienCell = document.querySelector(`.row${allien.pos.y} .col${allien.pos.x}`)
    console.log(allienCell)
    allienCell.classList.add('allien')
}


/*


    switch(allien.direction){
        case'left': allien.pos.x = 8
        break;
        case 'right': allien.pos.x ++
        break;
        case 'up': allien.pos.y--
        break;
        case 'down': allien.pos.y++
        break;

*/


function moveAllien () {

    switch(allien.direction){
        case "left":
            allien.pos.x--;

        break;




    }

/*
    if(allien.direction == "right" && allien.pos.x < 17){
        allien.pos.x = 10
    }
    */
 
}

    
//DETECTA MOVIVIMIENTO CON FLECHAS
window.addEventListener('keydown', function (event) {
    switch (event.code) {
        case "ArrowLeft":
            allien.direction = "left"
            break;
        case "ArrowRight":
            allien.direction = "right"
            break;
        case "ArrowUp":
            allien.direction = "up"
            break;
        case "ArrowDown":
            allien.direction = "down"
            break;
    }
})
drawAllien()
moveAllien()