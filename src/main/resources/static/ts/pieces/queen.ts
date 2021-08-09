import { BoardNode } from "../board-node.js"
import { Piece } from "../piece.js"

export class Queen extends Piece{
    constructor(colour:'black'|'white') {
        var svg = './img/queen-'+colour+'.svg'
        super('queen', svg, colour)
    }

    setNets(node:BoardNode) {
        var nets = this.traverseAllPositions(8, node)
        this.movesNet = nets[0]
        this.captureNet = nets[1]
    }

    getMovesNet() {
        return this.movesNet
    }

    getCaptureNet() {
        return this.captureNet
    }
}