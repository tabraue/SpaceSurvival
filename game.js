function Game() {
    let minSupport = 4;

    //creación objetos alien (pintar y despintar)
     alien = new Alien(9,16)
     notalien = new NotAlien(0,0)
    //aparece alien   
    alien.drawAlien()

    //creamos naves en zona colision
    drawAllColliders(1, 4)
    drawAllColliders(1, 2)
    drawAllColliders(2, 4)
    drawAllColliders(1, 3)



    //creamos los cometas en la zona de support
    drawAllSupports(1, 2, minSupport)
    minSupport++
    drawAllSupports(2, 1, minSupport)
     minSupport++
    drawAllSupports(2, 2, minSupport)
     minSupport++
    drawAllSupports(2, 3, minSupport)

    
    // empieza a mover los elementos de colision
    timeinterval()
    timeintervalSuppo()



}

/*


function Game (){

}


// T I M E R  C O U N T D O W N ************************************************ //

let countDown;
let thetimer;


Game.prototype.startCountdown = function (){

  let timeLeft = 60;

  thetimer = document.getElementById("timer") // elem countdown del html

    countDown = setInterval(function(){
      if(timeLeft <= 0){
        clearInterval(countDown);
      }

      thetimer.innerText = timeLeft;
      timeLeft--;

    }, 1000);

}


// S T A R T ***************************************************************** //


let button = document.getElementsByClassName("start-button")[0]
button.addEventListener("click", start);



Game.prototype.start = function (){

    let starter = document.getElementsByClassName("starter")[0];
    game.startCountdown();
    starter.classList.add("off");

}

Game.prototype.gameOver = function (){

    let over = document.getElementsByClassName("game-over")[0]
    over.removeAttribute("off")

}

*/