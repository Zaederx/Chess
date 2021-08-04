import { Board } from './board.js'
import { Piece } from './piece.js';

//contains grid 'memory'
var board = new Board('black','white');

/**
 * position variables for currently 
 * selected piece
 */ 
var selectedX = 0
var selectedY = 0

window.onload = () => {
    displayBoard()
    makeAllCellsClickable()
}
//note y -> row, x -> col
/**
 * Displays chessboard with pieces.
 * Does this by checking the js/ts board's grid to
 * see if a cell of that grid contains a piece.
 * 
 * If is does containa piece, the cell returns the image of the piece
 * that should be displayed on the html front end.
 * 
 * Returns this img in an <img> tag that fills the associated div's
 * innerHTML.
 */
function displayBoard() {
    var rowNum = 0
    var colNum = 0
    board.getGrid().forEach(row => {
        row.forEach( cell => {
            //if add the end of col go back to first col
            if (colNum == 8) {colNum = 0}
            //get associated div id
            var id = '#s'+ rowNum + '-' + colNum
            // console.log(id)
            //get associated div with that id
            var c = document.querySelector(id) as HTMLDivElement
            //fill div with chess image for that square
            c.innerHTML = cellToIMG(cell)//return piece image

            //reset board 2 colours and event listeners
            var netId = '#n'+ rowNum + '-' + colNum
            var c2 = document.querySelector(netId) as HTMLDivElement
            c2.style.backgroundColor = ''
            c2.onclick = null
            colNum++
        })
        rowNum++
    })
}

/**
 * Makes all cells of the cheeboard grid clickable.
 * This means that it displays a pieces moves when clicked.
 */
function makeAllCellsClickable() {
    var chessboard = document.querySelector('#chessboard')
    var cells = chessboard?.querySelectorAll('div')

    cells?.forEach( cell => {
        var atX = parseInt((cell.dataset.x as string))
        var atY = parseInt((cell.dataset.y as string))
        cell.onclick = () => {
            console.log('piece position: x:',atX,'y:',atY)
            //TODO also make board2 to transparent except for highlight
            //display board
            $('#chessboard2').removeClass('hidden')
            //display piece options
            if (atX < 8 && atY < 8 && atX > -1 && atY > -1) {
                displayPieceOptions(atX,atY)
            }
        }
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
    var i = 0
    moves?.forEach(move => {
        var x = move[0]
        var y = move[1]
        makeClickable(x,y)
        var grid = board.getGrid()
        if (x < 8 && y < 8 && x > -1 && y > -1) {
            var piece = grid[y][x]
            //don't highlight current position
            if (i > 0) {
                if (piece != null){
                    highlightRed(x,y)
                }
                else {
                    highlightSquare(x,y)
                }
            }
        }
        i++
    })
}

//for highlighting square that is valid move
function highlightSquare(col:number,row:number) {
    if (col < 8 && row < 8 && col > -1 && row > -1) {
        //get square id
        var id = '#n'+ row + '-' + col
        //get square
        var square = document.querySelector(id) as HTMLDivElement
        //change background colour to highlighted
        square.style.backgroundColor = 'rgb(100,200,100)'//green
    }
}

function highlightRed(col:number,row:number) {
    if (col < 8 && row < 8 && col > -1 && row > -1) {
        //get square id
        var id = '#n'+ row + '-' + col
        //get square
        var square = document.querySelector(id) as HTMLDivElement
        //change background colour to highlighted
        square.style.backgroundColor = 'rgb(200,100,100)'
    }
}

//to make a square that is a valid move selectable
/**
 * Make new available move clickable (so that 
 * clicking on it moves the piece to this new spot)
 * @param col - column of new avaialable move
 * @param row - row of new avaliable move
 */
function makeClickable(col:number,row:number) {
    if (col < 8 && row < 8 && col > -1 && row > -1) {
        //get square id
        var id = '#n'+ row + '-' + col
        //get square
        var square = document.querySelector(id) as HTMLDivElement
        //add event listener for moving piece of click
        square.onclick = () => {
            //move selected piece to new clicked square
            movePiece(selectedX,selectedY,col,row)
            //hide board2
            $('#chessboard2').addClass('hidden')
            //refresh board
            displayBoard()
        }
    }
}

/**
 * Takes the contents of a grid position called 'cell',
 * which can either be a piece or null.
 * 
 * If a piece, returns <img> tag with that piece's image
 * @param cell either a Piece of null
 * @returns 
 */
function cellToIMG(cell:Piece|null) {
    var img = ''
    if (cell?.imgScr) {
        img = '<img src="'+cell?.imgScr+'"></img>'
    }
    return img
}

/**
 * Move piece 'at' position 'to' new position
 * @param atX board current X position of piece to be moved
 * @param atY board current Y position of piece to be moved
 * @param toX board X position where piece should be moved
 * @param toY board Y position where piece should be moved
 */
function movePiece(atX:number,atY:number,toX:number,toY:number) {
    board.movePiece(atY,atX,toY,toX)
}