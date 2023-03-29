
// M U S I C **************************** 

//audio de bso
let audio1 = new Audio('/music/BSO.mp3')
//audio de game over
let audioGameOver = new Audio('/music/gameover.mp3')
//audio de winner
let audioWinner = new Audio('/music/winner.mp3')

let audioStop = true;
let audiotimergameover;
let audiotimerwin;

let mute = document.getElementsByClassName("mute")[0]
mute.addEventListener("click", stopMusic);


function stopMusic() {
    if(audioStop){
    audio1.pause()
    audioStop = false;
    }else{
        audio1.play()
        audioStop = true;
    }
  if (isMuted === true) {
    mute.innerText = "🔈"

    isMuted = false
  } else {
     mute.innerText = "🔇"

    isMuted = true
  }
}

// S T A R T  B U T T O N ********* //

let button = document.getElementsByClassName("start-button")[0]
button.addEventListener("click", start);


function start(){
    audio1.play()
    let starter = document.getElementsByClassName("starter")[0];
    starter.classList.add("off");
    startCountdown();
    
}

// para todos los intervalos del juego
function stop() {
    clearInterval(timeInSuppo)
    clearTimeout(timeSuppo)
    clearInterval(timein)
    clearTimeout(time)
    clearInterval(countDown)
} 

let timerRestart;

// fin del juego
function gameOver(){
    let over = document.getElementsByClassName("game-over")[0]
    over.classList.remove("off")
    over.classList.add("transition")
    stop()
    audio1.pause()
    audiotimergameover = setTimeout(audioGameOver,1000)
    audioGameOver.play()
    Game();
    //timerRestart = setTimeout(start, 3000)
}


function winner(){
    let win = document.getElementsByClassName("you-win")[0]
    win.classList.remove("off")
    win.classList.add("transition")
    stop()
    audio1.pause()
    audiotimerwin = setTimeout(audioWinner,1000);
    audioWinner.play();
}



//////////////////////// 
// T I M E R

let countDown;
let thetimer;

function startCountdown(){
  let timeLeft = 60;

  thetimer = document.getElementById("timer") // elem countdown del html

    countDown = setInterval(function(){
      if(timeLeft <= 0){
        clearInterval(countDown);
        gameOver();
      }

      thetimer.innerText = timeLeft;
      timeLeft--;

    }, 1000);
}
