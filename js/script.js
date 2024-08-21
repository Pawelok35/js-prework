let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function updateScore() {
    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('computer-score').innerHTML = computerScore;
}

function playGame(playerInput) {
    if (gameOver){
        return;
    }
    clearMessages();

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);
  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);      // zmienna playerMove przechowuje wynik działania funkcji getMoveName

  function displayResult(argComputerMove, argPlayerMove) {
    console.log('Moves:', argComputerMove, ' - ', argPlayerMove);
    printMessage(
      'Mój ruch to ' + argComputerMove + ', Twój ruch to ' + argPlayerMove
    );
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      printMessage('Ty wygrywasz!');
      playerScore++; 
      if (playerScore == 10){
        printMessage('GRATULACJE WYGRAŁEŚ')
        gameOver = true;
        document.getElementById('reset-game-button').style.display = 'block';
      }
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Ty wygrywasz!');
      playerScore++;
      if (playerScore == 10){
        printMessage('GRATULACJE WYGRAŁEŚ')
        gameOver = true;
        document.getElementById('reset-game-button').style.display = 'block';
      }
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Ty wygrywasz!');
      playerScore++;
      if (playerScore == 10){
        printMessage('GRATULACJE WYGRAŁEŚ')
        gameOver = true;
        document.getElementById('reset-game-button').style.display = 'block';
      }
    } else if (argPlayerMove == 'nieznany ruch') {
      printMessage('Wpisz poprawną opcję spośród: 1, 2, 3');
    } else if (argComputerMove == argPlayerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Ty przegrywasz!');
      computerScore++;
      if (computerScore == 10){
        printMessage('NIESTETY PRZEGRAŁEŚ - NASTĘPNYM RAZEM BĘDZIE LEPIEJ!')
        gameOver = true;
        document.getElementById('reset-game-button').style.display = 'block';
      }
    }
    updateScore();
  }
  displayResult(computerMove, playerMove);
};
document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
document.getElementById('reset-button').addEventListener('click', function(){
    playerScore = 0;
    computerScore = 0;
    updateScore();
    clearMessages();
});
document.getElementById('reset-game-button').addEventListener('click', function(){
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    updateScore();
    clearMessages();
    document.getElementById('reset-game-button').style.display = 'block';
});

 