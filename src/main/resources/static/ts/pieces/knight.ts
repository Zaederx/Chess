import { Piece } from "../piece.js"

export class Knight extends Piece {
    constructor(colour:'black'|'white') {
        var svg = './img/knight-'+colour+'.svg'
        super('knight',svg,colour)
    }
    movesNet(x:number,y:number):Array<any> {
        return [
            //put piece back
            [x,y],
            //knight's movement net
            [x+1,y+2],[x-1,y+2],
            [x+2,y+1],[x-2,y+1],
            [x+2,y-1],[x-2,y-1],
            [x+1,y-2],[x-1,y-2]
        ]
    }
}