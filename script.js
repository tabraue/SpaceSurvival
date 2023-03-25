let allien = {
    pos: {
        x: 9,
        y: 16
    },
    direction: '',
}

let cell = {
    pos: {
        x: 9,
        y: 16
    },
}

//busca la celda que queremos y la "pinta"
function drawAllien() {
    //pinta
    let allienCell = document.querySelector(`.row${allien.pos.y} .col${allien.pos.x}`)
    allienCell.classList.add('allien')

}

function clearAllien(){   
    //despintar
    let emptyCell = document.querySelector(`.row${cell.pos.y} .col${cell.pos.x}`)
    emptyCell.classList.remove('allien')
    emptyCell.classList.add('td')
}




// function moveAllien (move) {
//     allien.direction = move;
//     switch(move){
//         case "left":
//             allien.pos.x--
//             drawAllien()
//         break;
//         case 'right': 
//             allien.pos.x ++
//             drawAllien()
//         break;
//         case 'up': 
//             allien.pos.y--
//             drawAllien()
//         break;
//         case 'down': 
//             allien.pos.y++
//             drawAllien()
//         break;
    
//     }

// }


//DETECTA MOVIVIMIENTO CON FLECHAS
// window.addEventListener('keydown', function (event) {
//     console.log(event.code)
//     switch (event.code) {        
//         case "ArrowLeft":
//            // allien.direction = "left"
//             moveAllien('left')
//             break;
//         case "ArrowRight":
//             allien.direction = "right"
//             break;
//         case "ArrowUp":
//             allien.direction = "up"
//             break;
//         case "ArrowDown":
//             allien.direction = "down"
//             break;
//     }
// })

//captura evento pulsar tecla & llama a la función moveAllien pasándole por parámetro el evento capturado
window.addEventListener('keydown', function (event) {
    moveAllien(event.code)
})

function moveAllien (move) {

    let limit = document.querySelectorAll('td')
    console.log(limit.length)


   // if(allien.pos.x > 1 || allien.pos.x < 17)

    switch(move){
        case "ArrowLeft": 
                //izq actualiza x -1
                allien.pos.x--
                //pinta alien en posicion donde se mueve
                drawAllien()
                //recoge posicion x e y para despintar alien
                cell.pos.x = allien.pos.x+1;
                cell.pos.y = allien.pos.y;
                clearAllien() 
            
        break;
        case "ArrowRight": 
            allien.pos.x++
            drawAllien()
            cell.pos.x = allien.pos.x-1;
            cell.pos.y = allien.pos.y;
            clearAllien()  
        break;
        case "ArrowUp": 
            allien.pos.y--
            drawAllien()
            cell.pos.y = allien.pos.y+1;
            cell.pos.x = allien.pos.x;
            clearAllien()
        break;
        case "ArrowDown": 
            allien.pos.y++
            drawAllien()
            cell.pos.y = allien.pos.y-1;
            cell.pos.x = allien.pos.x;
            clearAllien()
        break;
    
    }

}

drawAllien()
