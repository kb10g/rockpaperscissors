




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


function playRound(playerSelection, computerSelection){

computerSelection = getComputerChoice();
playerSelection = prompt("what will you play: Rock, Paper or Scissors?");
playerSelectionCase = playerSelection.toUpperCase();




if(playerSelectionCase==computerSelection){
  console.log("DRAW");
  return(0);
}
if(playerSelectionCase=="ROCK" && computerSelection=="SCISSORS"){
  console.log("You Win, Rock Beats Scissors");
  return(1);
}
if(playerSelectionCase=="ROCK" && computerSelection=="PAPER"){
  console.log("You Lose, Paper Beats Rock");
  return(-1);
}
if(playerSelectionCase=="PAPER" && computerSelection=="ROCK"){
  console.log("You Win, Paper Beats Rock");
  return(1);
  
}
if(playerSelectionCase=="PAPER" && computerSelection=="SCISSORS"){
  console.log("You Lose, Scissors Beats Paper");
  return(-1);
}
if(playerSelectionCase=="SCISSORS" && computerSelection=="PAPER"){
  console.log("You Win, Scissors Beats Paper");
  return(1);
}
if(playerSelectionCase=="SCISSORS" && computerSelection=="ROCK"){
  console.log("You Lose, Rock beats Scissors");
  return(-1);
}
}


function game(){
computer_score = 0;
player_score = 0;
for (let i = 0; i < 5; i++){
  const result = playRound();
  if(result == 1){
    player_score = player_score + 1;
    
  }
 else if(result==-1){
   computer_score = computer_score + 1;
 }
}
if(player_score>computer_score){
  return("you win")
}
else if(computer_score>player_score){
  return("you lose")
}
else if(computer_score == player_score){
  return("its a draw")
}
  
}

console.log(game())

