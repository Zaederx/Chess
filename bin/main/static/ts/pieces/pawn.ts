class Pawn extends Piece {
    constructor(side:'black'|'white') {
        super('Pawn', './img/pawn.svg', side)
        this.constraints = {x:0, y:1, xy:0}//TODO remember that pawn can move two on first turn - find way tom implement
    }
}