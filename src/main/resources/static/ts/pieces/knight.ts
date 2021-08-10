import { BoardNode } from "../board-node.js"
import { Piece } from "../piece.js"

export class Knight extends Piece {
    constructor(colour:'black'|'white') {
        var svg = './img/knight-'+colour+'.svg'
        super('knight',svg,colour)
    }

    /**
     * ```
     * Node positions
     *  0 | 1 | 2
     *  3 | N | 4
     *  5 | 6 | 7
     * ```
     * @param node 
     */
    setNets(node:BoardNode) {

       //Knight has eight postions for movement

        var n = node.nodes[Piece.topLeft]
        var jNode = n?.nodes[Piece.top]
        if (jNode && jNode.piece == null) {
            this.movesNet.push([jNode?.x,jNode?.y])
        }
        else if (jNode && jNode.piece != null && jNode.piece.colour != this.colour) {
            this.captureNet.push([jNode?.x,jNode?.y])
        }
       

        var n = node.nodes[Piece.topRight]
        var jNode =  n?.nodes[Piece.top]
        if (jNode && jNode.piece == null) {
            this.movesNet.push([jNode?.x,jNode?.y])
        }
        else if (jNode && jNode.piece != null && jNode.piece.colour != this.colour) {
            this.captureNet.push([jNode?.x,jNode?.y])
        }


        var n = node.nodes[Piece.topLeft]
        var jNode = n?.nodes[Piece.left]
        if (jNode && jNode.piece == null) {
            this.movesNet.push([jNode?.x,jNode?.y])
        }
        else if (jNode && jNode.piece != null && jNode.piece.colour != this.colour) {
            this.captureNet.push([jNode?.x,jNode?.y])
        }


        var n = node.nodes[Piece.topRight]
        var jNode = n?.nodes[Piece.right]
        if (jNode && jNode.piece == null) {
            this.movesNet.push([jNode?.x,jNode?.y])
        }
        else if (jNode && jNode.piece != null && jNode.piece.colour != this.colour) {
            this.captureNet.push([jNode?.x,jNode?.y])
        }

        var n = node.nodes[Piece.bottomLeft]
        var jNode = n?.nodes[Piece.bottom]
        if (jNode && jNode.piece == null) {
            this.movesNet.push([jNode?.x,jNode?.y])
        }
        else if (jNode && jNode.piece != null && jNode.piece.colour != this.colour) {
            this.captureNet.push([jNode?.x,jNode?.y])
        }


        var n = node.nodes[Piece.bottomRight]
        var jNode = n?.nodes[Piece.bottom]
        if (jNode && jNode.piece == null) {
            this.movesNet.push([jNode?.x,jNode?.y])
        }
        else if (jNode && jNode.piece != null && jNode.piece.colour != this.colour) {
            this.captureNet.push([jNode?.x,jNode?.y])
        }

        
        var n = node.nodes[Piece.bottomLeft]
        var jNode =  n?.nodes[Piece.left]
        if (jNode && jNode.piece == null) {
            this.movesNet.push([jNode?.x,jNode?.y])
        }
        else if (jNode && jNode.piece != null && jNode.piece.colour != this.colour) {
            this.captureNet.push([jNode?.x,jNode?.y])
        }

        var n = node.nodes[Piece.bottomRight]
        var jNode = n?.nodes[Piece.right]
        if (jNode && jNode.piece == null) {
            this.movesNet.push([jNode?.x,jNode?.y])
        }
        else if (jNode && jNode.piece != null && jNode.piece.colour != this.colour) {
            this.captureNet.push([jNode?.x,jNode?.y])
        }

    }

    // return [
    //     //put piece back
    //     [x,y],
    //     //knight's movement net
    //     [x+1,y+2],[x-1,y+2],
    //     [x+2,y+1],[x-2,y+1],
    //     [x+2,y-1],[x-2,y-1],
    //     [x+1,y-2],[x-1,y-2]
    // ]
}