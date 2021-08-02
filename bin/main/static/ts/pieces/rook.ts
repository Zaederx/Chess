class Rook extends Piece {
    constructor(side:'black'|'white') {
        super('rook', './img/rook.svg', side)
        //can move x whole length or y whole length, but not diagonally
        this.constraints = {x:8, y:8, xy:-1}
    }
}