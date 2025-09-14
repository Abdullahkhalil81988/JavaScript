let userscore = 0;
let computerscore = 0;
const message = document.getElementById("message");
const userScoreElement = document.getElementById("user-score");
const compScoreElement = document.getElementById("comp-score");

const choice = document.querySelectorAll(".choice");
choice.forEach(choice => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const choiceid = choice.getAttribute("id");
        console.log(choiceid);
        console.log("clicked");
        playgame(choiceid);
    });
});
const compchoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
}
const playgame = (userchoice) => {
    const computerChoice = compchoice();
    console.log("User choice:", userchoice);
    console.log("Computer choice:", computerChoice);
    
    // Get the message container element
    const messageContainer = document.querySelector('.message-container');
    
    if (userchoice === computerChoice) {
        console.log("It's a tie!");
        message.innerText = `It's a tie! You: ${userchoice} vs Computer: ${computerChoice}`;
        messageContainer.style.backgroundColor = "#081b31"; // Keep original background for tie
    } else if (
        (userchoice === "rock" && computerChoice === "scissors") ||
        (userchoice === "paper" && computerChoice === "rock") ||
        (userchoice === "scissors" && computerChoice === "paper")
        
    ) {
        console.log("You win!");
        message.innerText = `You win! You: ${userchoice} vs Computer: ${computerChoice}`;
        messageContainer.style.backgroundColor = "green"; // Green background for win
        userscore++;
        userScoreElement.innerText = userscore;
    } else {
    console.log("Computer wins!");
    message.innerText = `Computer wins! You: ${userchoice} vs Computer: ${computerChoice}`;
    messageContainer.style.backgroundColor = "red"; // Red background for loss
    computerscore++;
        compScoreElement.innerText = computerscore;
    }
    console.log(`Scores - You: ${userscore}, Computer: ${computerscore}`);
};