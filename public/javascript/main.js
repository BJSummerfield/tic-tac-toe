import Board from './models/board.js'
import Ui from './views/ui.js'

const board = new Board

var input = document.querySelector('#board-container')
const ui = new Ui(board, input)
