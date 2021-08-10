import { BoardNode } from './board-node.js'
import { Piece } from './piece.js'
import { Bishop } from './pieces/bishop.js'
import { King } from './pieces/king.js'
import { Knight } from './pieces/knight.js'
import { Pawn } from './pieces/pawn.js'
import { Queen } from './pieces/queen.js'
import { Rook } from './pieces/rook.js'

export class BoardGraph {
    colour1:'black'|'white'
    colour2:'black'|'white'
    startNode:BoardNode|null = null
    grid:BoardNode[][] = []
    turn:'black'|'white'
    constructor(colour1:'black'|'white', colour2:'black'|'white') {
        this.colour1 = colour1
        this.colour2 = colour2
        this.turn = this.colour1
        this.setBoard()
    }

    setBoard() {
        
        var a1= new BoardNode('a1',0,0, new Rook(this.colour1))
        var a2 = new BoardNode('a2',1,0, new Knight(this.colour1))
        var a3 = new BoardNode('a3',2,0, new Bishop(this.colour1))
        var a4 = new BoardNode('a4',3,0, new King(this.colour1))
        var a5 = new BoardNode('a5',4,0, new Queen(this.colour1))
        var a6 = new BoardNode('a6',5,0, new Bishop(this.colour1))
        var a7 = new BoardNode('a7',6,0, new Knight(this.colour1))
        var a8 = new BoardNode('a8',7,0, new Rook(this.colour1))
        var rowA = []
        rowA.push(a1,a2,a3,a4,a5,a6,a7,a8)//row0

        var b1 = new BoardNode('b1',0,1, new Pawn(this.colour1,'top'))
        var b2 = new BoardNode('b2',1,1, new Pawn(this.colour1,'top'))
        var b3 = new BoardNode('b3',2,1, new Pawn(this.colour1,'top'))
        var b4 = new BoardNode('b4',3,1, new Pawn(this.colour1,'top'))
        var b5 = new BoardNode('b5',4,1, new Pawn(this.colour1,'top'))
        var b6 = new BoardNode('b6',5,1, new Pawn(this.colour1,'top'))
        var b7 = new BoardNode('b7',6,1, new Pawn(this.colour1,'top'))
        var b8 = new BoardNode('b8',7,1, new Pawn(this.colour1,'top'))
        var rowB = []
        rowB.push(b1,b2,b3,b4,b5,b6,b7,b8)//row1

        var c1 = new BoardNode('c1',0,2)
        var c2 = new BoardNode('c2',1,2)
        var c3 = new BoardNode('c3',2,2)
        var c4 = new BoardNode('c4',3,2)
        var c5 = new BoardNode('c5',4,2)
        var c6 = new BoardNode('c6',5,2)
        var c7 = new BoardNode('c7',6,2)
        var c8 = new BoardNode('c8',7,2)
        var rowC = []
        rowC.push(c1,c2,c3,c4,c5,c6,c7,c8)//row2

        var d1 = new BoardNode('d1',0,3)
        var d2 = new BoardNode('d2',1,3)
        var d3 = new BoardNode('d3',2,3)
        var d4 = new BoardNode('d4',3,3)
        var d5 = new BoardNode('d5',4,3)
        var d6 = new BoardNode('d6',5,3)
        var d7 = new BoardNode('d7',6,3)
        var d8 = new BoardNode('d8',7,3)
        var rowD = []
        rowD.push(d1,d2,d3,d4,d5,d6,d7,d8)//row3

        var e1 = new BoardNode('e1',0,4)
        var e2 = new BoardNode('e2',1,4)
        var e3 = new BoardNode('e3',2,4)
        var e4 = new BoardNode('e4',3,4)
        var e5 = new BoardNode('e5',4,4)
        var e6 = new BoardNode('e6',5,4)
        var e7 = new BoardNode('e7',6,4)
        var e8 = new BoardNode('e8',7,4)
        var rowE = []
        rowE.push(e1,e2,e3,e4,e5,e6,e7,e8)//row4

        var f1 = new BoardNode('f1',0,5)
        var f2 = new BoardNode('f2',1,5)
        var f3 = new BoardNode('f3',2,5)
        var f4 = new BoardNode('f4',3,5)
        var f5 = new BoardNode('f5',4,5)
        var f6 = new BoardNode('f6',5,5)
        var f7 = new BoardNode('f7',6,5)
        var f8 = new BoardNode('f8',7,5)
        var rowF = []
        rowF.push(f1,f2,f3,f4,f5,f6,f7,f8)//row5

        var g1 = new BoardNode('g1',0,6, new Pawn(this.colour2,'bottom'))
        var g2 = new BoardNode('g2',1,6, new Pawn(this.colour2,'bottom'))
        var g3 = new BoardNode('g3',2,6, new Pawn(this.colour2,'bottom'))
        var g4 = new BoardNode('g4',3,6, new Pawn(this.colour2,'bottom'))
        var g5 = new BoardNode('g5',4,6, new Pawn(this.colour2,'bottom'))
        var g6 = new BoardNode('g6',5,6, new Pawn(this.colour2,'bottom'))
        var g7 = new BoardNode('g7',6,6, new Pawn(this.colour2,'bottom'))
        var g8 = new BoardNode('g8',7,6, new Pawn(this.colour2,'bottom'))
        var rowG = []
        rowG.push(g1,g2,g3,g4,g5,g6,g7,g8)//row6

        var h1 = new BoardNode('h1',0,7, new Rook(this.colour2))
        var h2 = new BoardNode('h2',1,7, new Knight(this.colour2))
        var h3 = new BoardNode('h3',2,7, new Bishop(this.colour2))
        var h4 = new BoardNode('h4',3,7, new King(this.colour2))
        var h5 = new BoardNode('h5',4,7, new Queen(this.colour2))
        var h6 = new BoardNode('h6',5,7, new Bishop(this.colour2))
        var h7 = new BoardNode('h7',6,7, new Knight(this.colour2))
        var h8 = new BoardNode('h8',7,7, new Rook(this.colour2))
        var rowH = []
        rowH.push(h1,h2,h3,h4,h5,h6,h7,h8)//row7

        var rows = []
        rows.push(rowA,rowB,rowC,rowD,rowE,rowF,rowG,rowH)

        /*** Connect board nodes to each other */
        /**
         * Node positions
         * 0 | 1 | 2
         * 3 | N | 4
         * 5 | 6 | 7
         */
        var x = 0 //column at x = 0
        for (var y = 0; y < 8 ; y++){
            for (var x = 0; x < 8; x++) {
                //add connnected node on same row
                if (x < 8) {
                    
                    var node = rows[y][x]
                    console.warn('node name:', rows[y][x].name)
                    
                    //add node to the right - position 4
                    if (x+1 < 8) {
                        node.nodes[4] = rows[y][x+1]
                        console.log('add square:',rows[y][x+1].name)
                    }
                    //add node to the left - position 3
                    if (x-1 >= 0) {
                        node.nodes[3] = rows[y][x-1]
                        console.log('add square:',rows[y][x-1].name)
                    }
                    
                    //add connected node from row below
                    if (y+1 < 8) {
                        //add node below - position 6
                        node.nodes[6] = rows[y+1][x]
                        console.log('add square:',rows[y+1][x].name)
                        //add node position 7 - bottom right diagonal
                        if (x+1 < 8) {
                            node.nodes[7] = rows[y+1][x+1]
                            console.log('add square:',rows[y+1][x+1].name)
                        }
                        //add node position 5 - bottom left diagonal
                        if (x-1 >= 0) {
                            node.nodes[5] = rows[y+1][x-1]
                            console.log('add square:',rows[y+1][x-1].name)
                        }
                    }

                    //add connected nodes from row above
                    if (y-1 >= 0) {
                        //add node top - position 1
                        node.nodes[1] = rows[y-1][x]
                        console.log('add square:',rows[y-1][x].name)
                        //add node position 2 - top right diagonal
                        if (x+1 < 8) {
                            node.nodes[2] = rows[y-1][x+1]
                            console.log('add square:',rows[y-1][x+1].name)
                        }
                        //add node position 0 - top left diagonal
                        if (x-1 >= 0) {
                            node.nodes[0] = rows[y-1][x-1]
                            console.log('add square:',rows[y-1][x-1].name)
                        }
                    }
                    
                } 

            }

        }

        //set a1 as starting node
        this.startNode = a1
        this.grid = rows
    }

    getPieceMoves(x:number, y:number) {
        var node = this.grid[y][x]
        var piece = node.piece
        piece?.setNets(node)
        return piece?.getMovesNet()
    }

    getPieceCaptures(x:number, y:number) {
        var node = this.grid[y][x]
        var piece = node.piece
        piece?.setNets(node)
        return piece?.captureNet
    }

    /**
     * 
     * @param atRow - atY
     * @param atCol - atX
     * @param toRow - toY
     * @param toCol - toX
     */
    movePiece(atRow:number,atCol:number,toRow:number,toCol:number) {
        
        if (!(atRow == toRow && atCol == toCol)) {
            console.warn('movePiece - atCol:',atCol, 'atRow:', atRow, '** toCol:',toCol, 'toRow:',toRow)
            //get piece 
            var node = this.grid[atRow][atCol]
            var piece = node.piece
            if (piece?.colour == this.turn) {
                //delete piece from previous spot
                this.grid[atRow][atCol].piece = null
                //move piece
                this.grid[toRow][toCol].piece = piece

                if (piece.name == 'pawn') {
                    (this.grid[toRow][toCol].piece as Pawn).isFirstMove = false
                }
                //if putting piece down and not moving - don't change turn
                if (this.turn == this.colour1) {
                    this.turn = this.colour2
                }
                else {
                    this.turn = this.colour1
                }
                console.log('turn is:',this.turn)
            }
        }
    }

    getGrid() {
        return this.grid
    }

}