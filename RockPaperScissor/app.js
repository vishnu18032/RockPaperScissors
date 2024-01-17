let userScore = 0;
let compScore = 0;


//to choose the the option
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//generating computer choice
const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random() *3); //it will generate random number btn 0 to 2 and that will whole number
    return options[randomIdx];
}

const drawGame = () => {
    console.log("The game is draw.");
    msg.innerText = "The game is draw. Play again..";
    msg.style.backgroundColor = "#081b31";
}


//show winner function
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log(`You win!!!!! Your ${userChoice} beats ${compChoice}`);
        msg.innerText = "You win!!!!";
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log(`You lost..... ${compChoice} beats Your ${userChoice}`);
        msg.innerText = "You lose....";
        msg.style.backgroundColor = "red";
    }
}



const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice =",compChoice);

    if(userChoice == compChoice) {
        //Draw game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            //paper,scissor
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock,scissor
            userWin = compChoice === "scissor" ? false : true;
        }else {
            //rock,paper
            userWin = compChoice === "scissor" ? false : true;
        }
        
        showWinner(userWin,userChoice,compChoice);
    }
}


choices.forEach((choice) => {
    console.log("the choice is clicked");
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});