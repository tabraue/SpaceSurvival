/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable spaced-comment */
// M U S I C  ***

//audio de bso
let audio1 = new Audio('./music/BSO.mp3')
//audio de game over
let audioGameOver = new Audio('./music/gameoveer.wav')
//audio de winner
let audioWinner = new Audio('./music/winner.mp3')

let audioStop = true
let audiotimergameover
let audiotimerwin
let isMuted = false

let mute = document.getElementsByClassName("mute")[0]
mute.addEventListener("click", stopMusic)

function stopMusic () {
  if (audioStop) {
    audio1.pause()
    audioStop = false
  } else {
    audio1.play()
    audioStop = true
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
button.addEventListener("click", start)

function start () {
  audio1.play()
  let starter = document.getElementsByClassName("starter")[0]
  starter.classList.add("off")
  startCountdown()
}

// S T O P  I N T E R V A L S  &  T I M E R S
function stop () {
  clearInterval(timeInSuppo)
  clearTimeout(timeSuppo)
  clearInterval(timein)
  clearTimeout(time)
  clearInterval(countDown)
}

// G A M E  O V E R
let over
function gameOver () {
  over = document.getElementsByClassName("game-over")[0]
  over.classList.remove("off")
  audio1.pause()
  audioGameOver.play()
  let tryagain = setTimeout(function () {
    location.reload()
  }, 4800)
}

// Y O U  W I N
function winner () {
  let win = document.getElementsByClassName("you-win")[0]
  win.classList.remove("off")
  stop()
  audio1.pause()
  audiotimerwin = setTimeout(audioWinner, 1000)
  audioWinner.play()
  let tryagain = setTimeout(function () {
    location.reload()
  }, 5200)
}

////////////////////////
// T I M E R

let countDown
let thetimer

function startCountdown () {
  let timeLeft = 20
  thetimer = document.getElementById("timer") // elem countdown del html
  countDown = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(countDown)
      gameOver()
    }
    thetimer.innerText = timeLeft
    timeLeft--
  }, 1000)
}
