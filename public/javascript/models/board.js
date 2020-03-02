class Board {
  constructor() {
    this.grid = this.createGrid()
  }
 
  createGrid() {
    var grid = new Array(9).fill(null)
    return grid
  }

  placeMarker(mark, location) {
    this.grid[location] = mark
    return this.grid
  }

  checkWin() {
    if  (this.checkHorizontal() || this.checkVertical() || this.checkDiag()) {
      console.log('true')
    } else {
      console.log('false')
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

  win(token) {
    console.log(`${token} wins!`)
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

}

var b = new Board
b.placeMarker("x", 2)
b.placeMarker("x", 4)
b.placeMarker("x", 7)
b.checkWin()
// console.log(b.grid)