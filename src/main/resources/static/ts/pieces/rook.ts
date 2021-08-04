import { Piece } from "../piece.js"

export class Rook extends Piece {
    constructor(colour:'black'|'white') {
        var svg = './img/rook-'+colour+'.svg'
        super('rook', svg, colour)
        //can move x whole length or y whole length, but not diagonally
    }

    movesNet(x:number, y:number) {
        return [
            //put piece back
            [x,y],
            //forward and back
            [x,y+7],[x,y-7],
            [x,y+6],[x,y-6],
            [x,y+5],[x,y-5],
            [x,y+4],[x,y-4],
            [x,y+3],[x,y-3],
            [x,y+2],[x,y-2],
            [x,y+1],[x,y-1],
            //right and left
            [x+7, y], [x-7, y],
            [x+6, y], [x-6, y],
            [x+5, y], [x-5, y],
            [x+4, y], [x-4, y],
            [x+3, y], [x-3, y],
            [x+2, y], [x-2, y],
            [x+1, y], [x-1, y],

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