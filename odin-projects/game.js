let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.random()

    if (randomNumber < 1/3) {
        return "rock"
    } else if (randomNumber < 2/3) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    return prompt("Enter your choice: rock, paper, or scissors").toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose. Paper beats rock!")
        computerScore += 1
        return
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win. Rock beats scissors!")
        humanScore += 1
        return
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win. Paper beats rock!")
        humanScore += 1
        return 
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose. Scissors beats paper!")
        computerScore += 1
        return
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose. Rock beats scissors!")
        computerScore += 1
        return
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win. Scissors beats paper!")
        humanScore += 1
        return
    } else {
        console.log("You tied!")
        return
    }
}

function playGame() {
    let gameRound = 1;

    while (gameRound <= 5) {
        const computerChoice = getComputerChoice()
        const humanChoice = getHumanChoice()

        playRound(humanChoice, computerChoice)
        console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
        gameRound ++
    }

    console.log(`Final score — You: ${humanScore}, Computer: ${computerScore}`);
    const winner = humanScore > computerScore ? "You win!" : humanScore < computerScore ? "Computer wins!" : "It's a tie!";
    console.log(winner);
}

playGame()