




function updateResults(content) {
  const resultsDiv = document.querySelector('#results');
  resultsDiv.innerHTML = content;
}



function endResult(end_result) {
  const endResultDiv = document.querySelector('#endResult');
  endResultDiv.innerHTML = end_result;
}











function getComputerChoice(){
  computer_move = Math.floor(Math.random()*3);
  if(computer_move==0){
    return("ROCK");
  }
  if(computer_move==1){
    return("PAPER");
  }
  if(computer_move==2){
    return("SCISSORS");
  }
}


function setupPlayerMoveButtons(){

  const btn1 = document.querySelector('#btn1');
  btn1.addEventListener("click", () => {
    playRound("ROCK", getComputerChoice());
  });
  
  const btn2 = document.querySelector("#btn2");
  btn2.addEventListener("click", () => {
    playRound("PAPER", getComputerChoice());
  });
  
  const btn3 = document.querySelector("#btn3");
  btn3.addEventListener("click", () => {
    playRound("SCISSORS", getComputerChoice());
  });
  }




let computer_score = 0;
let player_score = 0;

function playRound(playerSelection, computerSelection){

const resultsDiv = document.querySelector("#results");
const runningPlayerScoreDiv = document.querySelector("#runningPlayerScore");
const runningComputerScoreDiv = document.querySelector("#runningComputerScore");




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
  resultsDiv.style.visibility = "hidden";
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
  endResult("You Lose, Computer Wins")
}

}




function runningComputerScore() {
  const runningScoreDiv = document.querySelector('#runningComputerScore');
  runningScoreDiv.innerHTML = `Computer Score: ${computer_score}`;
  }


function runningPlayerScore() {
  const runningScoreDiv = document.querySelector('#runningPlayerScore');
  runningScoreDiv.innerHTML = `Player Score: ${player_score}`;
  }










setupPlayerMoveButtons();