import { Piece } from "./piece.js"

export class BoardNode {
    name:string
    x:number
    y:number
    nodes:(BoardNode|null)[]
    piece:Piece|null

    constructor(name:string, x:number, y:number, piece?:Piece) {
        this.name = name
        this.x = x
        this.y = y
        this.nodes = []
        this.piece = piece ? piece : null
    }

    printNodes() {
        console.log('Node', this.name, 'connected node names:')
        this.nodes.forEach( node => {
            console.log(node?.name)
        })
    }

    pieceMoves() {

    }

}