var userScore = 0;
var computerScore = 0;
var playAgain = true;
var playerName = "";

//Save if user wants to add their name to playerNameWanted
var playerNameWanted = confirm("Would you like to enter a player name? (Hit 'Cancel' for no)");

//Username saved to playerName if they wanted to add their name and saves it as upper case
if(playerNameWanted){
    playerName = prompt("Enter your player name");
    playerName = playerName.toUpperCase();
}

//playAgain originally set to true so the game starts when tab opens
while(playAgain) {
    var userNumber = prompt("Enter a number from 1-9")
    //Convert userNumber to an int
    userNumber = parseInt(userNumber);

    //When user enters number less than 1 or greater than 10 run this
    while(userNumber > 10 || userNumber < 1){
        userNumber = prompt("Your number must be between 1 and 9. Please try again");
        userNumber = parseInt(userNumber);
    }

    //Computer generates random number
    var compNumber = Math.floor(Math.random() * 9)+1;
    alert("The computer drew " + compNumber);

    //Add the user entered number to computer generated number
    var sum = userNumber + compNumber;

    //If the sum is even -> user wins if sum is odd -> computer wins
    //Prints a message with the name if user entered one
    if (sum % 2 == 0) {
        userScore++;
        playerName != "" ? alert(`Congratulations, you won this round! Score -> ${playerName}: ${userScore} | COMP: ${computerScore}`)
            :alert("Congratulations, you won this round! Score -> YOU:" + userScore + " | COMP: " + computerScore);
    } else {
        computerScore++;
        playerName != "" ? alert(`Yikes, you lost this round. Score -> ${playerName}: ${userScore} | COMP: ${computerScore}`)
            :alert("Yikes, you lost this round. Score -> YOU: " + userScore + " | COMP: " + computerScore);
    }
    playAgain = confirm("Would you like to play again? ");
}

if(userScore > computerScore){
   playerName != "" ? alert(`Congratulations you won the game! Final Score -> ${playerName}: ${userScore} | COMP: ${computerScore}`)
       :alert("Congratulations you won the game! Final Score -> YOU: " +userScore +" | COMP: " +computerScore);
}
else if(userScore < computerScore){
    playerName != "" ? alert(`Yikes, you lost the game, Final Score -> ${playerName}: ${userScore} | COMP: ${computerScore}`)
        :alert("Yikes, you lost the game, Final Score -> YOU: " +userScore +" | COMP: " +computerScore);
}
else{
    playerName != "" ? alert(`Tie game! Final Score -> ${playerName}: ${userScore} | COMP: ${computerScore}`)
        :alert("Tie game! Final Score -> YOU: " +userScore +" | COMP: " +computerScore);
}