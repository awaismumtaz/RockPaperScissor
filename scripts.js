let playerCount = 0 , comCount = 0;

function playRound(playerselection, computerselection){
    if(playerselection === "rock" && computerselection === "paper"){
        comCount++;
        return "You lose! paper beats rock";
    } else if(playerselection === "rock" && computerselection === "scissor"){
        playerCount++;
        return "You won! rock beats scissor";
    } else if (playerselection === "paper" && computerselection === "rock") {
        playerCount++;
        return "you won! paper beats rock";
    } else if(playerselection === "paper" && computerselection === "scissor"){
        comCount++;
        return "You lose! scissor beats paper";
    } else if(playerselection === "scissor" && computerselection === "rock"){
        comCount++;
        return "You lose! rock beats scissor";
    } if(playerselection === "scissor" && computerselection === "paper"){
        playerCount++;
        return "You won! Scissor beats paper";
    } else if (playerselection === computerselection){
        return "Game is TIED";
    }
}
function game() {
    alert("Game is ready to begin")
    
    for(let i=1 ; i<=5 ; i++ ) {
        const playerselection =prompt("Choose your weapon :").toLowerCase();
        const computerselection = getComputerChoice();
        console.log(playRound(playerselection, computerselection));
    }
    alert(`you won ${playerCount} rounds and computer won ${comCount}.`);
}

function getComputerChoice(choice) {
    let number = Math.floor(Math.random() * 3) + 1;
    return number === 1 ? "rock" : number === 2 ? "paper" : "scissor";
}

game();