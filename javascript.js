




function updateResults(content) {
  const resultsDiv = document.querySelector('#results');
  resultsDiv.innerHTML = content;
}



function endResult(end_result) {
  const resultsDiv = document.querySelector('#results');
  resultsDiv.innerHTML = end_result;
}











function getComputerChoice(){
  let computer_move = Math.floor(Math.random()*3);
  let computerChoiceDiv = document.getElementById("computer-choice");

  if(computer_move==0){
    computerChoiceDiv.textContent = "🪨";
    return("ROCK");
  }
  if(computer_move==1){
    computerChoiceDiv.textContent = "📄";
    return("PAPER");
  }
  if(computer_move==2){
    computerChoiceDiv.textContent = "✂️";
    return("SCISSORS");
  }
}


function setupPlayerMoveButtons(){
  let playerChoiceDiv = document.getElementById("player-choice");
  const rockButton = document.querySelector('#rock-button');
  rockButton.addEventListener("click", () => {
    playerChoiceDiv.textContent = "🪨";
    playRound("ROCK", getComputerChoice());
  });
  
  const paperButton = document.querySelector("#paper-button");
  paperButton.addEventListener("click", () => {
    playerChoiceDiv.textContent = "📄";
    playRound("PAPER", getComputerChoice());
  });
  
  const scissorsButton = document.querySelector("#scissors-button");
  scissorsButton.addEventListener("click", () => {
    playerChoiceDiv.textContent = "✂️";
    playRound("SCISSORS", getComputerChoice());
  });
}




let computer_score = 0;
let player_score = 0;

function playRound(playerSelection, computerSelection){

    const resultsDiv = document.querySelector('#results');
    
    const runningPlayerScoreDiv = document.querySelector("#running-player-score");
    const runningComputerScoreDiv = document.querySelector("#running-computer-score");





    if(playerSelection==computerSelection){
      updateResults("Draw");
    }

    let result = 0;

    if(playerSelection=="ROCK" && computerSelection=="SCISSORS"){
      updateResults("You Win, Rock Beats Scissors");
      result = 1;
    }
    if(playerSelection=="ROCK" && computerSelection=="PAPER"){
      updateResults("You Lose, Paper Beats Rock");
      result = -1;
    }
    if(playerSelection=="PAPER" && computerSelection=="ROCK"){
      updateResults("You Win, Paper Beats Rock");
      result = 1;
      
    }
    if(playerSelection=="PAPER" && computerSelection=="SCISSORS"){
      updateResults("You Lose, Scissors Beats Paper");
      result = -1;
    }
    if(playerSelection=="SCISSORS" && computerSelection=="PAPER"){
      updateResults("You Win, Scissors Beats Paper");
      result = 1;
    }
    if(playerSelection=="SCISSORS" && computerSelection=="ROCK"){
      updateResults("You Lose, Rock beats Scissors");
      result = -1;
    }

    if(result==1){
      player_score = player_score + 1;
      runningPlayerScore();
      
    }
    else if (result == -1){
      computer_score = computer_score + 1;
      runningComputerScore();

    }

    if(player_score === 5 || computer_score === 5){
      
      runningPlayerScoreDiv.style.visibility = "hidden";
      runningComputerScoreDiv.style.visibility = "hidden";
    }
    else{
      resultsDiv.style.visibility = "visible";
      runningPlayerScoreDiv.style.visibility = "visible";
      runningComputerScoreDiv.style.visibility = "visible";
    }

    if(player_score==5){
      endResult("You Win, Computer Loses");

    }
    else if(computer_score==5){
      endResult("You Lose, Computer Wins");
    }

}




function runningComputerScore() {
  const runningScoreDiv = document.querySelector('#running-computer-score');
  runningScoreDiv.innerHTML = `Computer Score: ${computer_score}`;
  }


function runningPlayerScore() {
  const runningScoreDiv = document.querySelector('#running-player-score');
  runningScoreDiv.innerHTML = `Player Score: ${player_score}`;
  }










setupPlayerMoveButtons();