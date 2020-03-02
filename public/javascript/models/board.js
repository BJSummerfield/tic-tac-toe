class Board {
  constructor() {
    this.grid = this.createGrid()
    this.player = this.createPlayer()
    this.turn = 0
    this.winner = false
  }

  createPlayer() {
    var player1 = {token : 'x'}
    var player2 = {token : 'o'}
    return [player1, player2]
  }
 
  createGrid() {
    var grid = new Array(9).fill(null)
    return grid
  }

  placeMarker(mark, location) {
    this.grid[location] = mark
    this.nextTurn()
    return this.grid
  }

  nextTurn() {
    if (this.turn == 1) {
      this.turn = 0
    } else {
      this.turn++
    }
  }

  check(location) {
    if (this.grid[location] === null) {
      return true
    } 
  }

  checkWin() {
    if  (this.checkHorizontal() || this.checkVertical() || this.checkDiag()) {
      console.log('Winner')
      this.winner = true
    }
  }

  checkDiag(){
    if (this.checkRightDiag() || this.checkLeftDiag()) {
      return true
    }
  }

  checkLeftDiag() {
    var temp = this.grid.map(x => x)
    var start = 2
    var increase = 2
    if (this.singleChunk(temp, start, increase)) {
      return true
    }
  }

  checkRightDiag() {
    var temp = this.grid.map(x => x)
    var start = 0
    var increase = 4
    if (this.singleChunk(temp, start, increase)) {
      return true
    }
  }

  singleChunk(array, start, increase) {
    var x = new Array
    while (x.length < 3) {
      x.push(array[start])
      start += increase
    }
    if (this.checkRow(x)) {
      return true
    }
  }

  checkHorizontal(temp){
    var temp = this.grid.map(x => x)
    var slice = this.hChunk(temp, 3)
    if (this.checkLine(slice)) {
      return true
    }
  }

  checkVertical(temp) {
    var temp = this.grid.map(x => x)
    var slice = this.vChunk(temp, 3)
    if (this.checkLine(slice)) {
      return true
    }
  }

  checkLine(array) {
    for (var i = 0; i < array.length; i++) {
      if (this.checkRow(array[i]) == true) {
        return true
      }
    }
  }

  checkRow(row) {
    if (row.includes(null)) {
      return false
    }
    if (row.every( (value, i, arr) => value === arr[0])) {
      return true
    }
  }

  hChunk(array, size) {
    var length = array.length
    var j = 0
    var y = new Array
    var x = new Array
    for (var i = 0; i <= length; i++){
      if (y.length == size) {
        x.push(y)
        y = new Array
        j = 0
      }
      y.push(array.shift())
      j++
    }
    return x
  }

  vChunk(array, size) {
    var length = array.length
    var j = 0
    var y = new Array
    var x = new Array
    for (var i = 0; i <= length; i++) {
      if (y.length == size) {
        array.shift()
        x.push(y)
        y = new Array
        j = 0 
      }
      y.push(array[j])
      j += size
    }
    return x
  } 

  win(token) {
    console.log(`${token} wins!`)
  } 

}

export default Board