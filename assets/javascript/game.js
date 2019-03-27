
//THIS BEGINS THE CODE FOR HORROR HANGMAN GAME
// the array of movie title options 
var movies=[
    "scream",
    "friday the 13th",
    "childs play",
    "it",
    "halloween",
    "house of wax",
    "prom night",
    "a nightmare on elm street",
];


// this code grabs a movie at random
var randMov =Math.floor(Math.random() * movies.length);
var computerGuess= movies[randMov];
console.log(computerGuess);

// STEP 3 IN VIDEO SAYS TO CREATE UNDERSCORES BASED ON LENGTH OF WORD. HOPE THIS IS HOW
// this code is creating an empty array and filling it with underscores to match the number of letters of the word 
var answerArray=[];
for (var i=0; i<computerGuess.length;i++) {
    answerArray[i]='_';
}
console.log(answerArray);

var guessesLeft=[];
var guessesSofar=[];
var wins=[];
var loses=[];




// this is the code to get the players input 
document.addEventListener('keypress',(event)=> {

var keyword= String.fromCharCode(event.keyCode);
// if user guess is right then we'll add to the wins
if (computerGuess.indexOf(keyword)>-1) {
    console.log(true);
//adds to the win array
    wins.push(keyword);
    console.log(wins);
// trying to replace underscore with correct answer
    answerArray[keyword.indexOf(movies)]=movies; 
}

else {
//adds to the loses array
    loses.push(keyword);
    console.log(loses);
}

});

