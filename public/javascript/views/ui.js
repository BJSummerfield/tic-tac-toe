class Ui {
  constructor(board, input){
    this.board = board
    this.input = input
    this.setup()
  }

  setup() {
    this.drawBoard()
    this.addListener()
  }

  placeMark(id) {
    if (this.board.check(id)) {
      this.board.placeMarker(this.board.player[this.board.turn].token, id)
      this.clearBoard()
      this.drawBoard()
      this.board.checkWin()
    }
  }

  addListener() {
    this.input.addEventListener('click', () => {
      if (event.target.matches('.square') && this.board.winner == false) {
        this.placeMark(event.target.id)
      }
    })
  }

  clearBoard() {
    while (this.input.firstChild) {
      this.input.removeChild(this.input.lastChild)
    }
  }

  drawBoard() {
    for (var i = 0; i < this.board.grid.length; i++){
      this.createNode(this.board.grid[i], i)
    }
  }

  createNode(square, index) {
    var node = document.createElement('div')
    node.innerText = square
    node.className += "square"
    node.id = index
    this.input.appendChild(node)
  }
}

export default Ui