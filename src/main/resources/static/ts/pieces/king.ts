class King extends Piece {
    constructor(side:'black'|'white') {
        super('king','./img/king.svg',side)
        this.constraints = {x:1,y:1,xy:1}
    }
}