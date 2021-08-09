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

        var n0 = []
        var n1 = []
        var n2 = []
        var n3 = []
        var n4 = []
        var n5 = []
        var n6 = []
        var n7 = []
       //Knight has eight postions for movement

        var n = node.nodes[Piece.topLeft]
        var jNode = n?.nodes[Piece.top]
        if (jNode) {
            n0 = [jNode?.x,jNode?.y]
        }
        else {
            n0 = [-1,-1]
        }


        var n = node.nodes[Piece.topRight]
        var jNode =  n?.nodes[Piece.top]
        if (jNode) {
            n1 = [jNode?.x,jNode?.y]
        }
        else {
            n1 = [-1,-1]
        }


        var n = node.nodes[Piece.topLeft]
        var jNode = n?.nodes[Piece.left]
        if (jNode) {
            n2 = [jNode?.x,jNode?.y]
        }
        else {
            n2 = [-1,-1]
        }


        var n = node.nodes[Piece.topRight]
        var jNode = n?.nodes[Piece.right]
        if (jNode) {
            n3 = [jNode?.x,jNode?.y]
        }
        else {
            n3 = [-1,-1]
        }


        var n = node.nodes[Piece.bottomLeft]
        var jNode = n?.nodes[Piece.bottom]
        if (jNode) {
            n4 = [jNode?.x,jNode?.y]
        }
        else {
            n4 = [-1,-1]
        }


        var n = node.nodes[Piece.bottomRight]
        var jNode = n?.nodes[Piece.bottom]
        if (jNode) {
            n5 = [jNode?.x,jNode?.y]
        }
        else {
            n5 = [-1,-1]
        }

        
        var n = node.nodes[Piece.bottomLeft]
        var jNode =  n?.nodes[Piece.left]
        if (jNode) {
            n6 = [jNode?.x,jNode?.y]
        }
        else {
            n6 = [-1,-1]
        }

        var n = node.nodes[Piece.bottomRight]
        var jNode = n?.nodes[Piece.right]
        if (jNode) {
            n7 = [jNode?.x,jNode?.y]
        }
        else {
            n7 = [-1,-1]
        }
       

        var arr = [n0,n1,n2,n3,n4,n5,n6,n7]
        this.movesNet = arr
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