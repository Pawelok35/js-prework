function getMoveName(argMoveId){
    if (argMoveId == 1){
        return 'kamień';
    }else if(argMoveId == 2){
        return 'papier';
      }else if(argMoveId == 3){
        return 'nożyce';
      }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch'
}
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName (randomNumber);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3:nożyce')

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName (playerInput);
function displayResult(argComputerMove, argPlayerMove){
    console.log('Moves:', argComputerMove,' - ', argPlayerMove);
    printMessage('Mój ruch to ' + argComputerMove + ', Twój ruch to ' + argPlayerMove);

if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){ 
    printMessage('Ty wygrywasz!');
  }else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){ 
    printMessage('Ty wygrywasz!'); 
  }else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){ 
    printMessage('Ty wygrywasz!'); 
  }else if(argPlayerMove == 'nieznany ruch'){ 
    printMessage('Wpisz poprawną opcję spośród: 1, 2, 3');
  }else if(argComputerMove == argPlayerMove){ 
    printMessage('Remis!');
  }else {
    printMessage('Ty przegrywasz!');
  }
}
displayResult(computerMove, playerMove)

