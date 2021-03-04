// 14.6.2. Try One on Your Own:

const whoWon = require('../RPS.js');
// const assert = require('assert');

describe('whoWon', function(){

  it('should return "TIE!" if both players choose the same move', function(){
    let result = whoWon('paper','paper');
    expect(result).toEqual('TIE!');
  });

  it('should return "Player 2 wins!" if player 1 chooses rock and player 2 chooses paper', function(){
    let result = whoWon('rock','paper');
    expect(result).toEqual('Player 2 wins!');
    // assert.strictEqual(result, "Player 2 wins!");
  });

  it('should return "Player 2 wins!" if player 1 chooses paper and player 2 chooses scissors', function(){
    let result = whoWon('paper','scissors');
    expect(result).toEqual('Player 2 wins!');
  });

  it('should return "Player 2 wins!" if player 1 chooses scissors and player 2 chooses rock', function(){
    let result = whoWon('scissors','rock');
    expect(result).toEqual('Player 2 wins!');
  });  

  it('should return "Error: incorrect input" if something other than "rock", "paper", or "scissors" is passed', function(){
    let result = whoWon('water','rock');
    expect(result).toEqual('Error: incorrect input');
  });

  it('should return "Error: incorrect input" if something other than "rock", "paper", or "scissors" is passed', function(){
    let result = whoWon('paper','fire');
    expect(result).toEqual('Error: incorrect input');
  });

  it('should trim white space in input', function(){
    let result = whoWon('paper  ',' rock');
    expect(result).toEqual('Player 1 wins!');
  });

});