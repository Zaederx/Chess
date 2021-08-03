class King extends Piece {
    constructor(side:'black'|'white') {
        super('king','./img/king.svg',side)
    }
    movesNet(x:number, y:number) {
        return [
            //forward and backward
            [x+1,y], [x-1,y],
            //right and left
            [x,y+1],[x,y-1],
            //diagonals
            [x+1,y+1], [x-1,y-1],
            [x+1,y-1], [x-1,y+1]
        ]
    }
}