import { BoardNode } from "../board-node.js"
import { Piece } from "../piece.js"

export class Queen extends Piece{
    constructor(colour:'black'|'white') {
        var svg = './img/queen-'+colour+'.svg'
        super('queen', svg, colour)
    }

    setNets(node:BoardNode) {
        //reset move and capture nets
        this.movesNet = []
        this.captureNet = []

        //travese all directions from queen
        var n0 = this.traverseP(8, node, Piece.top)
        var n1 = this.traverseP(8, node, Piece.bottom)
        var n2 = this.traverseP(8, node, Piece.left)
        var n3 = this.traverseP(8, node, Piece.right)
        var n4 = this.traverseP(8, node, Piece.topLeft)
        var n5 = this.traverseP(8, node, Piece.topRight)
        var n6 = this.traverseP(8, node, Piece.bottomLeft)
        var n7 = this.traverseP(8, node, Piece.bottomRight)

        console.log('n1',n1)

        this.movesNet = this.movesNet.concat(n0[0],n1[0],n2[0],n3[0],n4[0],n5[0],n6[0],n7[0])
        this.captureNet = this.captureNet.concat(n0[1],n1[1],n2[1],n3[1],n4[1],n5[1],n6[1],n7[1])
    }

    getMovesNet() {
        return this.movesNet
    }

    getCaptureNet() {
        return this.captureNet
    }
}