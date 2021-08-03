var board = new Board('black','white');

var selectedX = 0
var selectedY = 0
//note y -> row, x -> col
//display grid pieces
function displayBoard() {
    var rowNum = 0
    var colNum = 0
    board.getGrid().forEach(row => {
        row.forEach( cell => {
            //get associated div id
            var id = '#'+ rowNum + '-' + colNum
            console.log(id)
            //get associated div with that id
            var c = document.querySelector(id) as HTMLDivElement
            //fill div with chess image for that square
            c.innerHTML = cellToIMG(cell)//return piece image
            colNum++
        })
        rowNum++
    })
}

// display piece options
function displayPieceOptions(atX:number, atY:number) {
    //set piece position as selected position
    selectedX = atX
    selectedY = atY
    // get piece move options
    var moves = board.getPieceMoves(atX,atY)
    // highlight these options & make them clickable
    moves?.forEach(move => {
        var x = move[0]
        var y = move[1]
        highlightSquare(x,y)
        makeClickable(x,y)
    })
}

//for highlighting square that is valid move
function highlightSquare(col:number,row:number) {
    //get square id
    var id = '#'+ row + '-' + col
    //get square
    var square = document.querySelector(id) as HTMLDivElement
    // change background colour to highlighted
    square.style.backgroundColor = 'rgb(100,200,100)'
}

//to make a square that is a valid move selectable
function makeClickable(col:number,row:number) {
    //get square id
    var id = '#'+ row + '-' + col
    //get square
    var square = document.querySelector(id) as HTMLDivElement
    square.onclick = () => {
        //move selected piece to new clicked square
        movePiece(selectedX,selectedX,col,row)
        //refresh board
        displayBoard()
    }

}

function cellToIMG(cell:Piece|null) {
    var img = '<img src="'+cell?.imgScr+'"></img>'
    return img
}

function movePiece(atX:number,atY:number,toX:number,toY:number) {
    board.movePiece(atY,atX,toY,toX)
}
