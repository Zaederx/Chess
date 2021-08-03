"use strict";
var Piece = /** @class */ (function () {
    //can move x or y or xy -> diagonally x&y increasing by the same value
    function Piece(name, imgScr, side) {
        this.name = name;
        this.imgScr = imgScr;
        this.side = side;
    }
    //each piece will have a net of moves that it can complete
    Piece.prototype.movesNet = function (x, y) {
        /*Implement in individual classes*/
        return [];
    };
    return Piece;
}());
