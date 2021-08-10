import { Board } from "./board.js"
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
        var movesNet:number[][] = [] 
        var captureNet:number[][]= []
        var N = node

        var b0 = true
        var b1 = true
        var b2 = true
        var b3 = true
        var b4 = true
        var b5 = true
        var b6 = true
        var b7 = true

        //For loop will:
        //- collect list of available node in movesNet
        //- collect list of caputrable nodes in captureNet
        for (var y = 0; y < n; y++) {

            //get nodes from each of the eight positions
            var n0 = N.nodes[0]
            var n1 = N.nodes[1]
            var n2 = N.nodes[2]
            var n3 = N.nodes[3]
            var n4 = N.nodes[4]
            var n5 = N.nodes[5]
            var n6 = N.nodes[6]
            var n7 = N.nodes[7]

            //if null trigger corresponding boolean
            if (n0 == null) {b0 = false}
            if (n1 == null) {b1 = false}
            if (n2 == null) {b2 = false}
            if (n3 == null) {b3 = false}
            if (n4 == null) {b4 = false}
            if (n5 == null) {b5 = false}
            if (n6 == null) {b6 = false}
            if (n7 == null) {b7 = false}

            //if boolean is true and...
            //if there's not piece on node position n - add as available move
            if (b0 == true && n0 != null && n0.piece == null) {
                movesNet.push([n0.x,n0.y])
            }
            if (b1 == true && n1 != null && n1.piece == null) {
                movesNet.push([n1.x,n1.y])
            }
            if (b2 == true && n2 != null && n2.piece == null) {
                movesNet.push([n2.x,n2.y])
            }
            if (b3 == true && n3 != null && n3.piece == null) {
                movesNet.push([n3.x,n3.y])
            }
            if (b4 == true && n4 != null && n4.piece == null) {
                movesNet.push([n4.x,n4.y])
            }
            if (b5 == true && n5 != null && n5.piece == null) {
                movesNet.push([n5.x,n5.y])
            }
            if (b6 == true && n6 != null && n6.piece == null) {
                movesNet.push([n6.x,n6.y])
            }
            if (b7 == true && n7 != null && n7.piece == null) {
                movesNet.push([n7.x,n7.y])
            }

            // if there's a piece on the node
            if (b0 == true && n0 != null && n0.piece != null) {
                //if it's an oppsing piece
                if (n0.piece.colour != this.colour) {
                    captureNet.push([n0.x,n0.y])
                }
                //if it's from same team
                if (n0.piece.colour == this.colour) {

                }
            }
            // if there's a piece on the node
            if (b1 == true && n1 != null && n1.piece != null) {
                //if it's an oppsing piece
                if (n1.piece.colour != this.colour) {
                    captureNet.push([n1.x,n1.y])
                }
                //if it's from same team
                if (n1.piece.colour == this.colour) {

                }
            }
            // if there's a piece on the node
            if (b2 == true && n2 != null && n2.piece != null) {
                //if it's an oppsing piece
                if (n2.piece.colour != this.colour) {
                    captureNet.push([n2.x,n2.y])
                }
                //if it's from same team
                if (n2.piece.colour == this.colour) {

                }
            }
            // if there's a piece on the node
            if (b3 == true && n3 != null && n3.piece != null) {
                //if it's an oppsing piece
                if (n3.piece.colour != this.colour) {
                    captureNet.push([n3.x,n3.y])
                }
                //if it's from same team
                if (n3.piece.colour == this.colour) {

                }
            }
            // if there's a piece on the node
            if (b4 == true && n4 != null && n4.piece != null) {
                //if it's an oppsing piece
                if (n4.piece.colour != this.colour) {
                    captureNet.push([n4.x,n4.y])
                }
                //if it's from same team
                if (n4.piece.colour == this.colour) {

                }
            }
            // if there's a piece on the node
            if (b5 == true && n5 != null && n5.piece != null) {
                //if it's an oppsing piece
                if (n5.piece.colour != this.colour) {
                    captureNet.push([n5.x,n5.y])
                }
                //if it's from same team
                if (n5.piece.colour == this.colour) {

                }
            }
            // if there's a piece on the node
            if (b6 == true && n6 != null && n6.piece != null) {
                //if it's an oppsing piece
                if (n6.piece.colour != this.colour) {
                    captureNet.push([n6.x,n6.y])
                }
                //if it's from same team
                if (n6.piece.colour == this.colour) {

                }
            }
            // if there's a piece on the node
            if (b7 == true && n7 != null && n7.piece != null) {
                //if it's an opposing piece
                if (n7.piece.colour != this.colour) {
                    captureNet.push([n7.x,n7.y])
                }
                //if it's from same team
                if (n7.piece.colour == this.colour) {

                }
            }
            //set N to be n0 and start process again 
            if (n0 != null) {
                N = n0
            }
        }
        var nets:number[][][] = []
        nets[0] = movesNet
        nets[1] = captureNet
        return nets
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
     traverseP(n:number, node:BoardNode, p:number) {
        var nets:number[][][] = []
        var movesNet:number[][] = [] 
        var captureNet:number[][]= []
        var N = node
        //For loop will:
        //- collect list of available node in movesNet
        //- collect list of caputrable nodes in captureNet
        for (var y = 0; y < n; y++) {
            //get node postion P (p can be 0 to 7)
            var nodeP = N.nodes[p]
            if (nodeP == null) {break}
            //if there's not piece on node position 0 - add as available move
            if (nodeP != null && nodeP.piece == null) {
                movesNet.push([nodeP.x,nodeP.y])
            }
            // if there's a piece on the node
            else if (nodeP != null && nodeP.piece != null) {
                //if it's an oppsing piece
                if (nodeP.piece.colour != this.colour) {
                    captureNet.push([nodeP.x,nodeP.y])
                }
                //if it's from same team
                if (nodeP.piece.colour == this.colour) {

                }
            }
            //set N to be n0 and start process again 
            N = nodeP
        }
        nets.push(movesNet,captureNet)
        return nets
    }


}