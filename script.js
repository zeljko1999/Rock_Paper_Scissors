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