import { Piece } from "../piece.js"

export class King extends Piece {
    constructor(colour:'black'|'white') {
        var svg = './img/king-'+colour+'.svg'
        super('king',svg,colour)
    }
    movesNet(x:number, y:number) {
        return [
            //put piece back
            [x,y],
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