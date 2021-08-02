class Queen extends Piece{
    constructor(side:'black'|'white') {
        super('queen', './img/queen.svg', side)
        this.constraints = {x:8,y:8,xy:8}
    }
}