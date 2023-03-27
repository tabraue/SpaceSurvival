//busca la celda donde se mueve el alien y la "pinta"
function drawAllien() {
    let allienCell = document.querySelector(`.row${alien.pos.y} .col${alien.pos.x}`)
    allienCell.classList.add('allien')
}

//busca la celda que deja atrás el alien y la "despinta"
function clearAllien() {
    let emptyCell = document.querySelector(`.row${notalien.pos.y} .col${notalien.pos.x}`)
    emptyCell.classList.remove('allien')
    emptyCell.classList.add('td')
}