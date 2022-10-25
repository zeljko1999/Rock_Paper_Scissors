function getComputerChoice(){
    let computer = Math.floor(Math.random() * 3);
    if(computer == 0)
    {
        return "Paper";
    }
    else if(computer == 1)
    {
        return "Scissors";
    }
    else if (computer == 2)
    {
        return "Rock";
    }
    else return "Something went wrong.";
}
function playerChoose(){
    let player = prompt("Please enter your sign:");
    if(player.localeCompare("Rock", 'en', { sensitivity: 'base' })==0)
         player = "Rock";
    else if(player.localeCompare("Paper", 'en', { sensitivity: 'base' })==0)
        player = "Paper";
    else if(player.localeCompare("Scissors", 'en', { sensitivity: 'base' })==0)
        player = "Scissors";
    else
        return console.log("You entered wrong value.");
    return player;
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection;
    console.log("player: " + player + " computerSelection: " + computerSelection);
    if(player=="Rock" && computerSelection =="Paper")
    {
        console.log("You Lose! Paper beats Rock");
        return 2;
    }
    else if(player == "Rock" && computerSelection == "Scissors")
    {
        console.log("You Win! Rock beats Scissors");
        return 1;
    }
    else if(player == "Scissors" && computerSelection == "Rock")
    {
        console.log("You Lose! Rock beats Scissors");
        return 2;
    }
    else if(player == "Scissors" && computerSelection == "Paper")
    {
        console.log("You Win! Scissors beat Paper");
        return 1;
    }
    else if(player == "Paper" && computerSelection == "Rock")
    {
        console.log("You win! Paper beats Rock");
        return 1;
    }
    else if(player == "Paper" && computerSelection == "Scissors")
    {
        console.log("You Lose! Scissors beats Paper");
        return 2;
    }
    else if((player== "Rock" && computerSelection == "Rock") || (player== "Scissors" && computerSelection == "Scissors") || (player== "Paper" && computerSelection == "Paper"))
        {
            console.log("It's a Draw!");
            return 3;
        }
    else console.log("Something went wrong.");
}

function game()
{
    let user;
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        user = playerChoose();
        let rez=playRound(user, getComputerChoice());
        if(rez == 1)
        {
            userScore++;
        }
        else if(rez == 2)
        {
            computerScore++;
        }
    }
        if(userScore > computerScore)
        console.log("The winner is User.");
        else if(computerScore > userScore)
        console.log("The winner is Computer.");
        else
        console.log("It's a Draw.");
        console.log("Final Result is: User: " + userScore + "  Computer: " + computerScore);
}