import Board from './models/board.js'
import Ui from './views/ui.js'
import Ai from './models/ai.js'

const board = new Board
var input = document.querySelector('#board-container')
var message = document.querySelector('#message')
const ai = new Ai(board)
const ui = new Ui(board, input, message, ai)
