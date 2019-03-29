// ALL VARIABLES on top
// Used to record how many times a letter can be pressed
var letters = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z'];
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
    "a nightmare on elms treet",
];


var computerGuess="";
var underScore=[];
var underscoresInWord=0;
var lettersInWord=[];
var rightLetter=[];
var guessesSofar=[];
var guessesLeft=10;
var wins=0;
var loses=0;
var correctLetter=0;



function reset()
{
    // this code grabs a movie at random
        var randMov =Math.floor(Math.random() * movies.length);
        var computerGuess= movies[randMov];
        console.log(computerGuess);
        //makes the movie chosen into separate letters
        lettersInWord=computerGuess.split("");
        console.log(lettersInWord);

        //should display the correct amount of underscores
        underscoresInWord = lettersInWord.length;

	//RESET
	//===========================================================
	letterGuessed = 0;
	correctLetter = 0;
	guessesLeft = 10;
	guessesSofar =[];
	rightLetter =[];
	letters = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];
	test=false;
	startGame();
}
// second part of example coding 

function startGame()
{
    var randMov =Math.floor(Math.random() * movies.length);
    var computerGuess= movies[randMov];
    console.log(computerGuess);

    lettersInWord = computerGuess.split("");
    console.log(lettersInWord);

    underscoresInWord = lettersInWord.length;
	
	//RESET
	//===========================================================
	correctLetter = 0;
	guessesLeft = 10;
    guessesSofar =[];
	rightLetter =[];
	letters = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];

	// this code is creating an empty array and filling it with underscores to match the number of letters of the word 
	for(var i = 0; i<underscoresInWord; i++)
	{
		rightLetter.push("_");
		document.getElementById("underscore").innerHTML = rightLetter;
	}

	// changing everything on the HTML page 
	document.getElementById("underscore").innerHTML = rightLetter.join(" ");
	document.getElementById("guesses-left").innerHTML = guessesLeft;
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("loses").innerHTML = loses;
	document.getElementById("guesses-so-far").innerHTML = guessesSofar;
	// Testing / Debugging
	console.log(underscoresInWord);
	console.log(rightLetter);
}

function letsplay(userKey)
{
				console.log('WORKING!');
				//If user key exist in choosen word then perform this function 
				if(computerGuess.indexOf(userKey) > -1)
				{
					//Loops depending on the amount of blanks 
					for(var i = 0; i < underscoresInWord; i++)
					{
						//Fills in right index with user key
						if(lettersInWord[i] === userKey)
						{
							correctLetter++;
							rightLetter[i] = userKey;
							document.getElementById("underscore").innerHTML = rightLetter.join(" ");
						}	
					}
					//Test / Debug
					console.log(rightLetter);
				}
				//this is the code for what happens when they press the incorrect key
				else
				{
					guessesSofar.push(userKey);
                    guessesLeft--;
                    

					//Changes HTML
					document.getElementById("guesses-left").innerHTML = guessesLeft;
					document.getElementById("guesses-so-far").innerHTML = guessesSofar;
				
				}
			
			
		
}
function scores()
{
	// When number blanks if filled with right words then you win
	if(correctLetter === underscoresInWord)
	{
		//Counts Wins 
		wins++;
		//Changes HTML
		document.getElementById("wins").innerHTML = wins;
        alert("YOU GOT LUCKY!");
        // THIS CODE WILL RESET THE GAME 
		reset();
	}
	// when your number of guesses runs out
	else if(guessesLeft === 0)
	{
		//will add to the loses
		loses++;
		//Changes HTML
		document.getElementById("loses").innerHTML = loses;
		alert("Looks like you didn't survive in the end!");
		reset();
	}
}

//MAIN PROCCESS
//-------------------------------------------	
//Initiates the Code
startGame();

document.onkeyup = function(event)
{
	test = true;
	var player = event.key;
	for(var i = 0; i < letters.length; i++)
	{	
		if(player === letters[i] && test === true)
		{
			var spliceDword = letters.splice(i,1);
			//Test / Debug
			console.log('Double word is = ' + letters[i])
			console.log('Spliced Word is = ' + spliceDword);

			letsplay(player);
			scores();
		}
	}		
		
}





