class Pawn extends Piece {
    constructor(side:'black'|'white') {
        super('Pawn', './img/pawn.svg', side)
    }

    movesNet(x:number,y:number) {
        return [
            [x,y+1]
        ]
    }
}