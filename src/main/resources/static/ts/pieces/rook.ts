import { BoardNode } from "../board-node.js"
import { Piece } from "../piece.js"

export class Rook extends Piece {
    constructor(colour:'black'|'white') {
        var svg = './img/rook-'+colour+'.svg'
        super('rook', svg, colour)
        //can move x whole length or y whole length, but not diagonally
    }

    setNets(node:BoardNode) {
        //reset move and capture nets
        this.movesNet = []
        this.captureNet = []

        //traverse forward & back up to 8 squares
        var nets1 = this.traverseP(8,node,Piece.top)
        var nets2 = this.traverseP(8,node,Piece.bottom)

        //traverse left and right up to 8 squares
        var nets3 = this.traverseP(8,node,Piece.left)
        var nets4 = this.traverseP(8,node,Piece.right)

        //join nets together into moves and captuer nets
        this.movesNet = this.movesNet.concat(nets1[0],nets2[0],nets3[0],nets4[0])
        this.captureNet = this.captureNet.concat(nets1[1],nets2[1],nets3[1],nets4[1])
   }
}