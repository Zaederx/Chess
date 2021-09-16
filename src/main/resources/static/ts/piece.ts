import { BoardNode } from "./board-node.js"

export class Piece {
    /**
     *  * ```
     * Node positions
     *  0 | 1 | 2
     *  3 | N | 4
     *  5 | 6 | 7
     * ```
     */
    static top:number = 1
    static bottom:number = 6
    static left:number = 3
    static right:number = 4
    static topLeft:number = 0
    static topRight:number = 2
    static bottomLeft:number = 5
    static bottomRight:number = 7

    name:string
    imgScr:string
    colour:'black'|'white'
    side:'top'|'bottom'| null
    movesNet:number[][] = []
    captureNet:number[][] = []
    //can move x or y or xy -> diagonally x&y increasing by the same value
    constructor(name:string, imgScr:string, colour:'black'|'white', side?:'top'|'bottom' ) {
        this.name = name
        this.imgScr = imgScr
        this.colour = colour
        this.side = side ? side : null
    }


    /**
     * to set the movesNet and captureNet
     * Each class has own implementation
     * @param node 
     */
    setNets(node:BoardNode) {
        /* each calss will have different implementation */
    }

    getMovesNet() {
        return this.movesNet
    }


    getCaptureNet() {
        return this.captureNet
    }

    /**
     * Traverse nodes along top left diagonals (position 0)
     * ```
     * Node positions
     *  0 | 1 | 2
     *  3 | N | 4
     *  5 | 6 | 7
     * ```
     * Where N is the node
     * 
     * @param n - the maximum of how far along this axis the piece is allow 
     * to move (provided there's no obstruction)
     * 
     * @param node - the node this piece is on
     */
    traverseAllPositions(n:number, node:BoardNode) {

        var n0 = this.traverseP(n, node, Piece.top)
        var n1 = this.traverseP(n, node, Piece.bottom)
        var n2 = this.traverseP(n, node, Piece.left)
        var n3 = this.traverseP(n, node, Piece.right)
        var n4 = this.traverseP(n, node, Piece.topLeft)
        var n5 = this.traverseP(n, node, Piece.topRight)
        var n6 = this.traverseP(n, node, Piece.bottomLeft)
        var n7 = this.traverseP(n, node, Piece.bottomRight)

        this.movesNet.concat(n0[0],n1[0],n2[0],n3[0],n4[0],n5[0],n6[0],n7[0])
        this.captureNet.concat(n0[1],n1[1],n2[1],n3[1],n4[1],n5[1],n6[1],n7[1])

    }


    /**
     *
     * Traverse nodes along top left diagonals (position 0)
     * ```
     * Node positions
     *  0 | 1 | 2
     *  3 | N | 4
     *  5 | 6 | 7
     * ```
     * Where N is the node
     * 
     * @param n - the maximum of how far along this axis the piece is allow 
     * to move (provided there's no obstruction)
     * @param node - the node this piece is on
     * @param p - which node position to traverse (can be number 0 to 7)
     */
     traverseP(n:number, node:BoardNode, p:number):number[][][] {
        var nets:number[][][] = []
        var movesNet:number[][] = [] 
        var captureNet:number[][]= []
        var N = node
        //For loop will:
        //- collect list of available node in movesNet
        //- collect list of capturable nodes in captureNet
        for (var y = 0; y < n; y++) {
            //get node position P (p can be 0 to 7)
            var nodeP = N.nodes[p]
            if (nodeP == null) {break}
            //if there's not piece on node position P - add as available move
            if (nodeP != null && nodeP.piece == null) {
                movesNet.push([nodeP.x,nodeP.y])
            }
            // if there's a piece on the node
            else if (nodeP != null && nodeP.piece != null) {
                //if it's an opposing piece
                if (nodeP.piece.colour != this.colour) {
                    captureNet.push([nodeP.x,nodeP.y])
                    break
                }
                //if it's from same team
                if (nodeP.piece.colour == this.colour) {
                    break
                }
            }
            //set N to be n0 and start process again 
            N = nodeP
        }
        nets.push(movesNet,captureNet)
        return nets
    }


}