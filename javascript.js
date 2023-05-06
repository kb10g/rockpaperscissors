




function getComputerChoice(){
    computer_move = Math.floor(Math.random()*3);
    if(computer_move==0){
      return("ROCK");
    }
    if(computer_move==1){
      return("PAPER");
    }
    if(computer_move==2){
      return("SCISSOR");
    }
  }

  let computer_score = 0;
  let player_score = 0;
  let round_number = 1;

function playRound(playerSelection, computerSelection){
  const playerSelection_fixed = playerSelection.toUpperCase()
  if(playerSelection_fixed==computerSelection){
    console.log(playerSelection_fixed + " VS " + computerSelection + 
    ", It's a Draw! " + "round number: " + round_number + " score: " + 
    player_score + "-" + computer_score)
    round_number = round_number + 1;
  }

  else if(playerSelection_fixed=="ROCK" && computerSelection=="PAPER"){
    computer_score = computer_score + 1;
    console.log("ROCK VS PAPER, You Lose! " +  "round number: " 
    + round_number + " score: " + 
    player_score + "-" + computer_score);
    round_number = round_number + 1;
  }

  else if(playerSelection_fixed=="ROCK" && computerSelection=="SCISSOR"){
    player_score = player_score + 1;
    console.log("ROCK VS SCISSOR, You Win! "  + 
    "round number: " + round_number + " score: " + 
    player_score + "-" + computer_score);
    round_number = round_number + 1;
  }

  else if(playerSelection_fixed=="PAPER" && computerSelection=="ROCK"){
    player_score = player_score + 1;
    console.log("PAPER VS ROCK, You Win! " 
    + "round number: " + round_number + " score: " + 
    player_score + "-" + computer_score);
    round_number = round_number + 1;
  }

  else if(playerSelection_fixed=="PAPER" && computerSelection=="SCISSOR"){
    computer_score = computer_score + 1;
    console.log("PAPER VS SCISSOR, You Lose! " 
    + "round number: " + round_number + " score: " + 
    player_score + "-" + computer_score);
    round_number = round_number + 1; 
  }

  else if(playerSelection_fixed=="SCISSOR" && computerSelection=="ROCK"){
    computer_score = computer_score + 1;
    console.log("SCISSOR VS ROCK, You Lose! "
    + "round number: " + round_number + " score: " + 
    player_score + "-" + computer_score);
    round_number = round_number + 1;
  }

  else if(playerSelection_fixed=="SCISSOR" && computerSelection=="PAPER"){
    player_score = player_score + 1;
    console.log("SCISSOR VS PAPER, You Win! "
      + "round number: " + round_number + " score: " + 
    player_score + "-" + computer_score);
    round_number = round_number + 1;
  }
  
  if (round_number==6){
    if(player_score > computer_score){
      console.log("You Win!, " + player_score + "-" + computer_score)
    }
    else{
      console.log("You Lose!, " + player_score + "-" + computer_score)
    }
  }
}

function game(){
  for (let i = 0; i < 5; i++){
    let playerSelection = prompt("What will you play Rock, Paper or Scissor?");
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
  }
}



console.log(game())