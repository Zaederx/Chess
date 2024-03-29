import { BoardNode } from "../board-node"
import { Piece } from "../piece.js"

export class Bishop extends Piece{

    constructor(colour:'black'|'white') {
        var svg = './img/bishop-'+colour+'.svg'
        super('bishop', svg, colour)
    }

    setNets(node:BoardNode) {
        //reset move and capture nets
        this.movesNet = []
        this.captureNet = []

        //traverse diagonals up to 8 squares
        var nets1 = this.traverseP(8,node,Piece.topLeft)
        var nets2 = this.traverseP(8,node,Piece.topRight)
        var nets3 = this.traverseP(8,node,Piece.bottomLeft)
        var nets4 = this.traverseP(8,node,Piece.bottomRight)

        //join nets together into moves and capture nets
        this.movesNet = this.movesNet.concat(nets1[0],nets2[0],nets3[0],nets4[0])
        this.captureNet = this.captureNet.concat(nets1[1],nets2[1],nets3[1],nets4[1])
   }

    
}