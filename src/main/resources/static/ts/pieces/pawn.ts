import { BoardNode } from "../board-node.js";
import { Piece } from "../piece.js"

export class Pawn extends Piece {
    isFirstMove:boolean
    constructor(colour:'black'|'white', side:'top'|'bottom') {
        var svg = './img/pawn-'+colour+'.svg'
        super('pawn', svg, colour,side)
        this.isFirstMove = true
    }

    /* 
     * ```
     * Node positions
     *  0 | 1 | 2
     *  3 | N | 4
     *  5 | 6 | 7
     * ```
     */
    /**
     * 
     * @param node 
     */
    setNets(node:BoardNode) {
        //reset move and capture nets
        this.movesNet = []
        this.captureNet = []
        
        //pawns move forward and capture diagonally...
        //so very differnt moveset to other pieces...
        var n = 0
        var forward = 0 //node positions to get moves from
        var forwardLeft = 0
        var forwardRight = 0

        if (this.side == 'top' && this.isFirstMove) {
            n = 2
            forward = Piece.bottom//downwards moves
            forwardLeft = Piece.bottomLeft
            forwardRight = Piece.bottomRight
        }
        else if (this.side == 'bottom' && this.isFirstMove) {
            n = 2
            forward = Piece.top//upwards moves
            forwardLeft = Piece.topLeft
            forwardRight = Piece.topRight
        }
        else if (this.side == 'top' && !this.isFirstMove) {
            n = 1 //only move one square
            forward = Piece.bottom//move toward bottom of board
            forwardLeft = Piece.bottomLeft
            forwardRight = Piece.bottomRight
        }
        else if (this.side == 'bottom' && !this.isFirstMove) {
            n = 1
            forward = Piece.top//move towards top of board
            forwardLeft = Piece.topLeft
            forwardRight = Piece.topRight
        }
        
        //set move nets with available for stepping forward
        //pawns move forward...
        var netsForward = this.traverseP(n, node, forward)
        //and capture diagonally
        var netsForwardLeft = this.traverseP(n, node, forwardLeft)
        var netsForwardRight = this.traverseP(n, node, forwardRight)

        //combine nets 
        this.movesNet = netsForward[0]
        this.captureNet.concat(netsForwardLeft[1],netsForwardRight[1])
    }

    getMovesNet() {
        return this.movesNet
    }

    getCaptureNet() {
        return this.captureNet
    }

}