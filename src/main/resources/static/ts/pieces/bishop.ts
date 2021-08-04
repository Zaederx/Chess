import { Piece } from "../piece.js"

export class Bishop extends Piece{

    constructor(colour:'black'|'white') {
        var svg = './img/bishop-'+colour+'.svg'
        super('bishop', svg, colour)
    }

    movesNet(x:number, y:number) {
        return [
            //put piece back
            [x,y],
            //diagonal movements
            //diagonals
        [x+7, y+7],[x-7, y-7],
        [x-7, y+7],[x+7, y-7],

        [x+6, y+6],[x-6, y-6],
        [x-6, y+6],[x+6, y-6],

        [x+5, y+5],[x-5, y-5],
        [x-5, y+5],[x+5, y-5],

        [x+4, y+4],[x-4, y-4],
        [x-4, y+4],[x+4, y-4],

        [x+3, y+3],[x-3, y-3],
        [x-3, y+3],[x+3, y-3],

        [x+2, y+2],[x-2, y-2],
        [x-2, y+2],[x+2, y-2],

        [x+1, y+1],[x-1, y-1],
        [x-1, y+1],[x+1, y-1],
        ]
    }
}