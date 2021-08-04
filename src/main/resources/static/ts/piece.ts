export class Piece {
    name:string
    imgScr:string
    colour:'black'|'white'
    side:'top'|'bottom'| null
    //can move x or y or xy -> diagonally x&y increasing by the same value
    constructor(name:string, imgScr:string, colour:'black'|'white', side?:'top'|'bottom' ) {
        this.name = name
        this.imgScr = imgScr
        this.colour = colour
        this.side = side ? side : null
    }

    //each piece will have a net of moves that it can complete
    movesNet(x:number, y:number):number[][] {
        /*Implement in individual classes*/
        return []
    }

}