import { Piece } from "../piece.js"

export class Bishop extends Piece{

    constructor(side:'black'|'white') {
        var svg = './img/bishop-'+side+'.svg'
        super('bishop', svg, side)
    }

    movesNet(x:number, y:number) {
        return [
            //diagonal movements
            [x+8,y+8],
            [x+7,y+7],
            [x+6,y+6],
            [x+5,y+5],
            [x+4,y+4],
            [x+3,y+3],
            [x+2,y+2],
            [x+1,y+1]
        ]
    }
}