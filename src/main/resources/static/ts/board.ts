import { Piece } from "./piece.js"
import { Bishop } from "./pieces/bishop.js"
import { King } from "./pieces/king.js"
import { Knight } from "./pieces/knight.js"
import { Pawn } from "./pieces/pawn.js"
import { Queen } from "./pieces/queen.js"
import { Rook } from "./pieces/rook.js"

export class Board {
    side1:'black'|'white'
    side2:'black'|'white'
    grid:(Piece|null)[][]
    constructor(side1:'black'|'white', side2:'black'|'white') {
        this.side1 = side1
        this.side2 = side2
        this.grid = this.setBoard()
    }

    setBoard() {
       this.grid = [
           //player1 side
            [new Rook(this.side1), new Knight(this.side1), new Bishop(this.side1), new King(this.side1), new Queen(this.side1) ,new Bishop(this.side1),new Knight(this.side1),new Rook(this.side1)],
            [new Pawn(this.side1,'top'), new Pawn(this.side1,'top'), new Pawn(this.side1,'top'), new Pawn(this.side1, 'top'), new Pawn(this.side1, 'top'), new Pawn(this.side1, 'top'), new Pawn(this.side1,'top'), new Pawn(this.side1,'top')],

            // middle
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],

            //player2 side
            [new Pawn(this.side2,'bottom'), new Pawn(this.side2,'bottom'), new Pawn(this.side2,'bottom'), new Pawn(this.side2, 'bottom'), new Pawn(this.side2,'bottom'), new Pawn(this.side2,'bottom'), new Pawn(this.side2,'bottom'), new Pawn(this.side2, 'bottom')],
            [new Rook(this.side2), new Knight(this.side2),new Bishop(this.side2), new King(this.side2), new Queen(this.side2) ,new Bishop(this.side2),new Knight(this.side2),new Rook(this.side2)]
        ]
        return this.grid
    }

    getPiece(x:number,y:number) {
        return this.grid[y][x]
    }

    getPieceMoves(x:number, y:number) {
        var piece = this.grid[y][x]
        return piece?.movesNet(x,y)
    }

    getGrid() {
        return this.grid
    }

    setGrid(grid:(Piece|null)[][]) {
        this.grid = grid
    }

    movePiece(atRow:number,atCol:number,toRow:number,toCol:number) {
        console.warn('movePiece - atCol:',atCol, 'atRow:', atRow, '** toCol:',toCol, 'toRow:',toRow)
        //get piece 
        var piece = this.grid[atRow][atCol]
        //delete piece from previous spot
        this.grid[atRow][atCol] = null
        //move piece
        this.grid[toRow][toCol] = piece

        /**
         * Done this order in case  a piece is put 
         * back in the same spot. Need piece to be placed 
         * last after deletion of orginal spot
         */
        
    }
}