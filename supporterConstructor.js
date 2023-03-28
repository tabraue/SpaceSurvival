// función constructora, contenedoras de naves espaciales aka arrships

function MotherSupporter(spaceSupporter) {
    this.spaceSupporter = spaceSupporter;
}


//función constructora de celdas para las naves espaciales
let supporterCell = '';
let suppoAlienCell;

function CellSupporter(x, y) {
    this.x = x;
    this.y = y;
};

CellSupporter.prototype.drawCellSupp = function () {

    supporterCell = document.querySelector('.row' + this.y + ' .col' + this.x)
    supporterCell.classList.remove('td')
    supporterCell.classList.add("spaceSupporter")


};

CellSupporter.prototype.undrawCellSupp = function () {

    supporterCell = document.querySelector('.row' + this.y + ' .col' + this.x)
    supporterCell.classList.add("td")
    supporterCell.classList.remove("spaceSupporter")

};

