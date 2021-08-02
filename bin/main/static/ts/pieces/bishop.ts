class Bishop extends Piece{

    constructor(side:'black'|'white') {
        super('bishop', './img/bishop.svg', side)
        this.constraints = {x:0,y:0,xy:8}
    }
}