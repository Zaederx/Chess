import { BoardNode } from "../board-node"
import { Piece } from "../piece.js"

export class King extends Piece {
    constructor(colour:'black'|'white') {
        var svg = './img/king-'+colour+'.svg'
        super('king',svg,colour)
    }
    setNets(node:BoardNode) {
         //travese all directions from king
         var n0 = this.traverseP(1, node, Piece.top)
         var n1 = this.traverseP(1, node, Piece.bottom)
         var n2 = this.traverseP(1, node, Piece.left)
         var n3 = this.traverseP(1, node, Piece.right)
         var n4 = this.traverseP(1, node, Piece.topLeft)
         var n5 = this.traverseP(1, node, Piece.topRight)
         var n6 = this.traverseP(1, node, Piece.bottomLeft)
         var n7 = this.traverseP(1, node, Piece.bottomRight)

         this.movesNet = this.movesNet.concat(n0[0],n1[0],n2[0],n3[0],n4[0],n5[0],n6[0],n7[0])
         this.captureNet = this.captureNet.concat(n0[1],n1[1],n2[1],n3[1],n4[1],n5[1],n6[1],n7[1])
    }
}