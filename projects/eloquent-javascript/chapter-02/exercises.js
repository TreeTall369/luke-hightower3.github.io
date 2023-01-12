
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles() {

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {

  for (let index = 1; index < 16; index++){
    if (index % 15 === 0){
      console.log('fizzbuzz')
    } else if (index % 5 === 0){
      console.log('buzz')
    } else if (index % 3 === 0){
      console.log('fizz')
    } else {
      console.log(index)
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
let board = []

  for (let index = 0; index < num; index++){
    for (let j = 0; j < num; j++){
      let tag = index + j
      if (tag % 2 !== 0){
        board.push('#')
      } 
      if (tag % 2 === 0){
        board.push(' ')
      }
    }
    board.push('\n')
  }
  console.log(board.join(''))
  return board.join('')
  
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
