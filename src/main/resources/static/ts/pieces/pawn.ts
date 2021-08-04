import { Piece } from "../piece.js"

export class Pawn extends Piece {
    constructor(side:'black'|'white') {
        var svg = './img/pawn-'+side+'.svg'
        super('Pawn', svg, side)
    }

    movesNet(x:number,y:number) {
        return [
            [x,y+1]
        ]
    }
}