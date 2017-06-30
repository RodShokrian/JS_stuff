
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Game {
  constructor() {
    this.towerArray = [[3, 2, 1], [0], [0]];
  }

  render() {
    console.log('${this.towerArray}');
  }

  prompt() {
    reader.question("Please pick a disc that you want to move!", function(numString1) {
      reader.question("Please tell me where do you want to place the disc!", function(numString2) {
        const startIndex = parseInt(numString1);
        const endIndex = parseInt(numString2);
      });
    });
}
  //initialize with array of 3 arrays, with starting position [[3, 2, 1],[0],[0]]
  //render tower
  //prompt player for a move(index)
  //check if it is a valid move
    //if to_tower is empty
    //if value in the tower is greater than the disc that the player is trying to place
    //otherwise, repromt player for a valid move
  //game over?
    //when first tower if is empty and either one of the other two is full
