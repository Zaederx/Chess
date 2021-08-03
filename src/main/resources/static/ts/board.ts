class Board {
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
            [new Pawn(this.side1), new Pawn(this.side1), new Pawn(this.side1), new Pawn(this.side1), new Pawn(this.side1), new Pawn(this.side1), new Pawn(this.side1), new Pawn(this.side1)],

            // middle
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],
            [null,null,null,null,null,null,null,null],

            //player2 side
            [new Pawn(this.side2), new Pawn(this.side2), new Pawn(this.side2), new Pawn(this.side2), new Pawn(this.side2), new Pawn(this.side2), new Pawn(this.side2), new Pawn(this.side2)],
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
        //get piece 
        var piece = this.grid[atRow][atCol]
        //move piece
        this.grid[toRow][toCol] = piece
    }
}