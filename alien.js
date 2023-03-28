
function Alien(x,y){
    this.x = x;
    this.y = y;
}

//busca la celda donde se mueve el alien y la "pinta"
Alien.prototype.drawAllien = function() {
    let allienCell = document.querySelector(`.row${this.y} .col${this.x}`)
    allienCell.classList.add('allien')
}


Alien.prototype.drawAlienCell = function() {
  let aliencelinsupo = document.querySelector('.row' + this.y + ' .col' + this.x)


    //aliencelinsupo.classList.remove("spaceSupporter")
    aliencelinsupo.classList.add("allien")
    aliencelinsupo.classList.add("spaceSupporter")
   

}


///////////////////////////


function NotAlien(x,y){
    this.x = x;
    this.y = y;
}

//busca la celda que deja atrás el alien y la "despinta"
NotAlien.prototype.clearAllien = function(isLastCell) {
    let emptyCell = document.querySelector(`.row${this.y} .col${this.x}`)
    
    if(isLastCell)
    emptyCell.classList.remove('spaceSupporter')
    
    emptyCell.classList.remove('allien') 
    emptyCell.classList.add('td')
} 
