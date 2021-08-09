import { BoardNode } from "../board-node"
import { Piece } from "../piece.js"

export class King extends Piece {
    constructor(colour:'black'|'white') {
        var svg = './img/king-'+colour+'.svg'
        super('king',svg,colour)
    }
    setNets(node:BoardNode) {
        var nets = this.traverseAllPositions(1,node)
        this.movesNet = nets[0]
        this.captureNet = nets[1]
    }
}