let button = document.getElementsByClassName("start-button")[0]
button.addEventListener("click", start);

function start(){
    let starter = document.getElementsByClassName("starter")[0]
    starter.classList.add("off")
}