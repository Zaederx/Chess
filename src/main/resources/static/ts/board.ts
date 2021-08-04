import { Piece } from "./piece.js"
import { Bishop } from "./pieces/bishop.js"
import { King } from "./pieces/king.js"
import { Knight } from "./pieces/knight.js"
import { Pawn } from "./pieces/pawn.js"
import { Queen } from "./pieces/queen.js"
import { Rook } from "./pieces/rook.js"

export class Board {
    colour1:'black'|'white'
    colour2:'black'|'white'
    grid:(Piece|null)[][]
    turn:string
    constructor(colour1:'black'|'white', colour2:'black'|'white') {
        this.colour1 = colour1
        this.colour2 = colour2
        this.grid = this.setBoard()
        this.turn = this.colour1
    }

    setBoard() {
       this.grid = [
           //player1 side
            [new Rook(this.colour1), new Knight(this.colour1), new Bishop(this.colour1), new King(this.colour1), new Queen(this.colour1) ,new Bishop(this.colour1),new Knight(this.colour1),new Rook(this.colour1)],
            [new Pawn(this.colour1,'top'), new Pawn(this.colour1,'top'), new Pawn(this.colour1,'top'), new Pawn(this.colour1, 'top'), new Pawn(this.colour1, 'top'), new Pawn(this.colour1, 'top'), new Pawn(this.colour1,'top'), new Pawn(this.colour1,'top')],

            // middle
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],

            //player2 side
            [new Pawn(this.colour2,'bottom'), new Pawn(this.colour2,'bottom'), new Pawn(this.colour2,'bottom'), new Pawn(this.colour2, 'bottom'), new Pawn(this.colour2,'bottom'), new Pawn(this.colour2,'bottom'), new Pawn(this.colour2,'bottom'), new Pawn(this.colour2, 'bottom')],
            [new Rook(this.colour2), new Knight(this.colour2),new Bishop(this.colour2), new King(this.colour2), new Queen(this.colour2) ,new Bishop(this.colour2),new Knight(this.colour2),new Rook(this.colour2)]
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
        if (piece?.colour == this.turn) {
            //delete piece from previous spot
            this.grid[atRow][atCol] = null
            //move piece
            this.grid[toRow][toCol] = piece

            if (this.turn == this.colour1) {
                this.turn = this.colour2
            }
            else {
                this.turn = this.colour1
            }
        }
        
        /*
         * Done this order in case a piece is put 
         * back in the same spot. Need piece to be placed 
         * last after deletion of orginal spot
         */
        
    }
}