// 14.6.3. Bonus Mission:

function whoWon(player1,player2){

  player1 = player1.trim();
  player2 = player2.trim();

  if ((player1 === 'rock' || player1 === 'paper' || player1 === 'scissors') && (player2 === 'rock' || player2 === 'paper' || player2 === 'scissors')) {
    if (player1 === player2){
      return 'TIE!';
    }
    
    if (player1 === 'rock' && player2 === 'paper'){
      return 'Player 2 wins!';
    }
    
    if (player1 === 'paper' && player2 === 'scissors'){
      return 'Player 2 wins!';
    }
    
    if (player1 === 'scissors' && player2 === 'rock'){
      return 'Player 2 wins!';
    }

    return 'Player 1 wins!';
  }

  return 'Error: incorrect input';
}

module.exports = whoWon;
