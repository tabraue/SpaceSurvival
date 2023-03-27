// función constructora, contenedoras de naves espaciales aka arrships


function MotherSupporter(spaceSupporter) {
    this.spaceSupporter = spaceSupporter;
}


//función constructora de celdas para las naves espaciales
let supporterCell = '';


function CellSupporter(x, y) {
    this.x = x;
    this.y = y;
};

CellSupporter.prototype.drawCell = function () {

    supporterCell = document.querySelector('.row' + this.y + ' .col' + this.x)
    supporterCell.classList.remove('td')
    supporterCell.classList.add("spaceSupporter")


};

CellSupporter.prototype.undrawCell = function () {

    supporterCell = document.querySelector('.row' + this.y + ' .col' + this.x)

    supporterCell.classList.remove("spaceSupporter")
    supporterCell.classList.add("td")

    //supporterCell.classList.toggle("td")
    //supporterCell.classList.toggle("spaceSupporter")

};