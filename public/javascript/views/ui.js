class Ui {
  constructor(board, input, message, ai){
    this.board = board
    this.input = input
    this.message = message
    this.ai = ai
    this.setup()
  }

  setup() {
    this.message.innerText = null
    this.drawBoard()
    this.addListener()
  }

  placeMark(id) {
    if (this.board.check(id)) {
      this.board.placeMarker(this.board.player[this.board.turn].token, id)
      this.clearBoard()
      this.drawBoard()
    }
  }

  addListener() {
    this.input.addEventListener('click', () => {
      if (event.target.matches('.square') && this.board.winner == false) {
        this.placeMark(event.target.id)
        this.board.checkWin()
        if (this.board.winner == true) {
          this.winMessage()
        }
      this.board.nextTurn()
      this.aiTurn()
      }
    })
  }

  aiTurn(){
    if (this.board.player[this.board.turn].ai == true) {
      var square = this.ai.turn()
      console.log(square)
      document.getElementById(`${square}`).click()
    }
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

  winMessage(node) {
    this.message.innerText = `${this.board.player[this.board.turn].token} Wins!`
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