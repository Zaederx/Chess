class Piece {
    //TODO - make images for each in affinity
    name:string
    imgScr:string
    side:'black'|'white'
    //can move x or y or xy -> diagonally x&y increasing by the same value
    constraints:{x:number,y:number,xy:number}
    constructor(name:string, imgScr:string, side:'black'|'white' ) {
        this.name = name
        this.imgScr = imgScr
        this.side = side
        this.constraints = {x:0,y:0,xy:0}
    }
}