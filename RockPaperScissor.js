let UserScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPoints = document.querySelector("#user-score");
const compPoints = document.querySelector("#comp-score");
 
const genCompChoice = () => {
    // rock, paper, scissor
    const options = ["rock","paper","scissor"];
    const randNo = Math.floor(Math.random() * 3);
    return options[randNo];
}

const gameDraw = () => {
    console.log("Game was Draw");
    msg.innerText = `Game was Draw.`;
    msg.style.backgroundColor = "black";
}

const gameWinner = (userWin,userChoice,compChoice) => {
    if(userWin === true){
        UserScore++;
        console.log(`YOU WON !! your ${userChoice} beats ${compChoice}`);
        msg.innerText = `YOU WON !! your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
        userPoints.innerText = UserScore;
    }
    else{
        CompScore++;
        console.log(`YOU LOST !! ${compChoice} beats your ${userChoice}`);
        msg.innerText = `YOU LOST !! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
        compPoints.innerText = CompScore;
    }
}

const playGame = (userChoice) => {
    console.log("User Choice = ",userChoice);
    // To Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Comp Choice = ",compChoice);

    if(userChoice === compChoice){
        //Draw
        gameDraw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            if(compChoice === "paper"){
                userWin = false;
            }
            else{
                userWin = true; 
            }
        }
        else if(userChoice === "paper"){
            if(compChoice === "rock"){
                userWin = true;
            }
            else{
                userWin = false; 
            }
        }
        else{
            if(compChoice === "rock"){
                userWin = false;
            }
            else{
                userWin = true; 
            }
        }
        gameWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        console.log("Choice was Clicked",userChoice);
        playGame(userChoice);
    })
})