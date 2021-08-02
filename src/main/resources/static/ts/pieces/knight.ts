class Knight extends Piece {
    constructor(side:'black'|'white') {
        super('knight','./img/knight.svg',side)
        this.constraints = {x:1,y:2,xy:0}//TODO exception - move both x and y thought not diagonally
    }
}