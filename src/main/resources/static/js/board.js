"use strict";
var Board = /** @class */ (function () {
    function Board(side1, side2) {
        this.side1 = side1;
        this.side2 = side2;
        this.grid = this.setBoard();
    }
    Board.prototype.setBoard = function () {
        this.grid = [
            //player1 side
            [new Rook(this.side1), new Knight(this.side1), new Bishop(this.side1), new King(this.side1), new Queen(this.side1), new Bishop(this.side1), new Knight(this.side1), new Rook(this.side1)],
            [new Pawn(this.side1), new Pawn(this.side1), new Pawn(this.side1), new Pawn(this.side1), new Pawn(this.side1), new Pawn(this.side1), new Pawn(this.side1), new Pawn(this.side1)],
            // middle
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            //player2 side
            [new Pawn(this.side2), new Pawn(this.side2), new Pawn(this.side2), new Pawn(this.side2), new Pawn(this.side2), new Pawn(this.side2), new Pawn(this.side2), new Pawn(this.side2)],
            [new Rook(this.side2), new Knight(this.side2), new Bishop(this.side2), new King(this.side2), new Queen(this.side2), new Bishop(this.side2), new Knight(this.side2), new Rook(this.side2)]
        ];
        return this.grid;
    };
    Board.prototype.getPiece = function (x, y) {
        return this.grid[y][x];
    };
    Board.prototype.getPieceMoves = function (x, y) {
        var piece = this.grid[y][x];
        return piece === null || piece === void 0 ? void 0 : piece.movesNet(x, y);
    };
    Board.prototype.getGrid = function () {
        return this.grid;
    };
    Board.prototype.setGrid = function (grid) {
        this.grid = grid;
    };
    Board.prototype.movePiece = function (atRow, atCol, toRow, toCol) {
        //get piece 
        var piece = this.grid[atRow][atCol];
        //move piece
        this.grid[toRow][toCol] = piece;
    };
    return Board;
}());
