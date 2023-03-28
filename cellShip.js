
let shipCell = '';

// función constructora, contenedoras de naves espaciales aka arrships
function MotherShip(spaceShip){
    this.spaceShip = spaceShip;
}


//función constructora de celdas para las naves espaciales
function CellShip(x, y){
    this.x = x;
    this.y = y;
};

CellShip.prototype.drawCell = function (){

    shipCell = document.querySelector('.row'+ this.y +' .col'+ this.x);
    shipCell.classList.remove('td');
    shipCell.classList.add("spaceShip");
};

CellShip.prototype.undrawCell = function (){
    
    shipCell = document.querySelector('.row'+ this.y +' .col'+ this.x);
    
    shipCell.classList.remove("spaceShip");
    shipCell.classList.add("td")
};