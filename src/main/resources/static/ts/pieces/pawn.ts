import { Piece } from "../piece.js"

export class Pawn extends Piece {
    constructor(colour:'black'|'white', side:'top'|'bottom') {
        var svg = './img/pawn-'+colour+'.svg'
        super('Pawn', svg, colour,side)
    }

    movesNet(x:number,y:number) {
        var net;
        if (this.side == 'top') {
            net = [
                //put piece back
                [x,y],
                //move forward
                [x,y+1]
            ]
        }
        else {
            net = [
                [x,y-1]
            ]
        }
        return net
    }
}