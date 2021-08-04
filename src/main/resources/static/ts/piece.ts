export class Piece {
    //TODO - make images for each in affinity
    name:string
    imgScr:string
    side:'black'|'white'
    //can move x or y or xy -> diagonally x&y increasing by the same value
    constructor(name:string, imgScr:string, side:'black'|'white' ) {
        this.name = name
        this.imgScr = imgScr
        this.side = side
    }

    //each piece will have a net of moves that it can complete
    movesNet(x:number, y:number):number[][] {
        /*Implement in individual classes*/
        return []
    }

}