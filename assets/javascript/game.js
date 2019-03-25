
//THIS BEGINS THE CODE FOR HORROR HANGMAN GAME
// the array of movie title options 
var movies=[
    "scream",
    "friday the 13th",
    "chucky",
    "it",
    "halloween",
    "house of wax",
];
// this code grabs a movie at random
computerGuess = movies[Math.floor(Math.random() * movies.length)];

// this code is creating an empty array and filling it with underscores to match the number of letters of the word 
var answerArray=[];
for (var i=0; i<movies.length;i++) {
    answerArray[i]="_";
}

var remainingLetter=movies.length;

//keeps looping as long as the remaining letter expression remains true 
//the body of the loop will have to update remainingLetter for every correct guess the player makes 
//once player has guessed all letters of the word remaining letter will be at 0 and the loop will end 
//all game code will go in here 
for (remainingLetter > 0) {
    var guess=prompt("guess a letter to start slaying or leave now!");
    if (guess === null){
        break;
    }
    else if (guess.length!==1){
    alert("one stab at a time!");
    }
    else {}

}








// THE CODE BELOW IS FOR THE LETTER GUESS GAME 
  <div>
 
  <p id="userchoice"></p>
  <p id="computerchoice"></p>
  <p id="wins"></p>
  <p id="losses"></p>
  <p id="guesses-left"></p>
  <p id="guesses-so-far"></p>
</div>

//the array of options 
var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


// creating variables that hold the number of wins and loses. They start at 0.
// what I need to figure out is how to display the guesses
var wins=0;
var loses=0;
var guessesLeft=0;
var guessesSofar=0;



// This function is run whenever the user presses a key.

document.onkeyup=function(event) {

    player=event.key;

    // randomly chooses a letter for "what letter am i thinking of"
    computerGuess = letters[Math.floor(Math.random() * letters.length)];

if ((player==="a") || (player==="e") || (player="i")) {

    if (player==="a" && computerGuess==="") ||
        (player==="e" && computerGuess==="") ||
        (player==="i" && computerGuess==="") || {
            ++wins;
    }




}


        // Display the user and computer guesses, and wins/losses/ties.\
        userChoiceText.textContent = "You chose: " + player;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent ="Wins:" + wins;
        lossesText.textContent = "Loses: " + loses;
        leftText.textContent = "Guesses Left:" + guessesLeft;
        sofarText.textContent = "Guesses So Far: " + guessesSofar;
      }





// creating the  variables that hold references to the places in the html file where displayed
var nameText = document.getElementById("container");
var userChoiceText = document.getElementById("userchoice");
var computerChoiceText = document.getElementById("computerchoice");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("loses");
var leftText = document.getElementById("guesses-left");
var sofarText= document.getElementById("guesses-so-far");


