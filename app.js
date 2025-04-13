let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#userScore");

const compScorePara = document.querySelector("#computerScore");

let resetBtn = document.querySelector("#resetBtn")

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const draw = ()=>{
    // console.log("Game was draw");
    msg.innerText = "Game was draw";  
};

//generating computer choice
const genComputerChoice = ()=>{ 
    const option = ["scissors", "paper", "rock"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];

};
const showWinner = (userWin) => {
    if(userWin){
        // console.log("You win");
        msg.innerText = "Hurray, you win!"
        userScore++;
        userScorePara.innerText = userScore;
    } else{
        // console.log("you lose");
        msg.innerText = "Sorry, you lose!"
        compScore++;
        compScorePara.innerText = compScore;
    }
};


const playgame = (userChoice) => {
    // console.log("User choice = ", userChoice);
    //generate computer choice by making new function.
    const compChoice = genComputerChoice();
    // console.log("Computer choice= ", compChoice);

    if(userChoice === compChoice){
        draw();
    } else {
        let userWin = true;

        if(userChoice === "scissors"){
            userWin = compChoice === "rock" ? false : true;
        } else if (userChoice === "paper"){
        userWin = compChoice ==="scissors" ? false : true;
        } else{
        userWin = compChoice === "paper" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=>{    
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playgame(userChoice);
    });
});

resetBtn.addEventListener("click",() => {
    location.reload(); 
})