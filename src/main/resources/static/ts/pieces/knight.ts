import { Piece } from "../piece.js"

export class Knight extends Piece {
    constructor(side:'black'|'white') {
        super('knight','./img/knight.svg',side)
    }
    movesNet(x:number,y:number):Array<any> {
        return [
            //knight's movement net
            [x+1,y+2],[x-1,y+2],
            [x+2,y+1],[x-2,y+1],
            [x+2,y-1],[x-2,y-1],
            [x+1,y-2],[x-1,y-2]
        ]
    }
}