class Ai {
  constructor(board){
    this.board = board
  }

  turn() {
    var check = false
    while(true) {
      var i = Math.floor(Math.random() * 9) + 1
      if (this.board.check(i) === true) {
        check = true
        return i
      }
    }
  } 
}

export default Ai