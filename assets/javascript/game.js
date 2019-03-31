// THIS WAS GUIDED THROUGH INSTRUCTIONAL VIDEO AS WELL AS TUTOR
// Missing would be that I didn't have the time to add more css to it. I  really wanted to show the images and have a girl screaming every time the player lost.
// JAVA SCRIPT IS COMPREHENDABLE BUT FOR SURE CHALLENGING. 
// still could not remember how to change the user key to accept uppercase letters
//ALSO COULD NOT FIGURE OUT HOW TO CATCH BLANK SPACES BETWEEN WORDS 



//THIS IS ALL VARIABLES FOR HANGMAN HORROR MOVIE GAME 


// KEEPS TRACK OF HOW MANY TIMES A LETTER CAN BE USED 
var lettersAlpha = ["a","b","c",
"d","e","f",
"g","h","i",
"j","k","l",
"m","n","o",
"p","q","r",
"s","t","u",
"v","w","x",
"y","z"];


// THIS ARRAY HAS ALL THE POSSIBLE MOVIE CHOICES 
var movies =[ "scream",
"fridaythethirteenth",
"childsplay",
"it",
"halloween",
"houseofwax",
"promnight",
"anightmareonelmstreet",
"itfollows",
"theexorcist",
"theshining",
"lasthouseontheleft",
"getout",
"sinister",
"thetexaschainsawmassacre",
"saw",
"paranormalactivity"];


//THIS ARRAY IS GOING TO HOLD THE COMPUTERS GUESS OF MOVIE
var computerGuess = "";
//THIS ARRAY HOLDS ALL THE LETTERS IN THE COMPUTER GUESS MOVIE
var lettersInMovie = [];
//THE NUMBER OF BLANKS IN MOVIE WORD 
var numBlanks = 0;
//BLANKS AND SUCCESSFUL GUESSES 
var blanksAndWins =[];
//LETTERS OF INCORRECT GUESSES SO FAR 
var guessesSoFar = [];



//THESE VARIABLES ARE MY COUNTERS 
//MUST START AT ZERO TO ADD TO IN FUNCTIONS BELOW
var winCount = 0;
var loseCount = 0;
//MUST START GUESSES LEFT AT 10 SO I CAN DEDUCT WITH EACH INCORRECT GUESS
var guessesLeft = 10;
var rightGuessCounter = 0;


//THE WAY THE GAME WORKS IS BECAUSE OF FUNCTIONS
//video was a good base but could not get game to restart every time the player won or lost 
// TUTOR CAME IN HEAVILY HERE 

//ALL FUNCTIONS BELOW 

function reset()
{
	//THIS IS THE FUNCTION THAT GRABS A MOVIE BY RANDOM (computerGuess)
	computerGuess = movies[Math.floor(Math.random() * movies.length)];
	//TUTOR
	//SPLITS THE COMPUTER GUESS INTO INDIVIDUAL LETTERS! THIS PART WAS CRUCIAL FOR GAME TO WORK AS INTENDED 
	lettersInMovie = computerGuess.split(" ");
	//GETS NUMBER OF BLANKS ACCORDING TO HOW MANY LETTERS ARE IN THE MOVIE
	numBlanks = lettersInMovie.length;
	
	//RESETTING ALL VARIABLES 
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 10;
	guessesSoFar =[];
	blanksAndWins =[];
	lettersAlpha = ["a","b","c",
	"d","e","f",
	"g","h","i",
	"j","k","l",
	"m","n","o",
	"p","q","r",
	"s","t","u",
	"v","w","x",
	"y","z"];
	test=false;
	// EVOKING FUNCTION
	startGame();
}


function startGame()
{
	//CHOOSES MOVIE RANDOMLY FROM MOVIE ARRAY 
	computerGuess = movies[Math.floor(Math.random() * movies.length)];
	//SPLITS THE COMPUTER GUESS INTO INDIVIDUAL LETTERS! pretty much the same function as above 
	//CANNOT PUT IN DOUBLE QUOTES BC IT CHANGES THE UNDERSCORES TO JUST ONE. MUST ASK WHY THAT IS 
	lettersInMovie = computerGuess.split('');
	//GETS THE NUMBER OF BLANKS ACCORDING TO HOW MANY LETTERS ARE IN THE MOVIE 
	numBlanks = lettersInMovie.length;
	
	//RESET ALL VARIABLES 
	rightGuessCounter = 0;
	guessesLeft = 10;
	guessesSoFar =[];
	blanksAndWins =[];
	lettersAlpha = ["a","b","c",
					  "d","e","f",
					  "g","h","i",
					  "j","k","l",
					  "m","n","o",
					  "p","q","r",
					  "s","t","u",
					  "v","w","x",
					  "y","z"];


//INSERT LOOP HERE 
	//WILL UPDATE UNDERSCORES BASED ON HOW MANY LETTERS ARE IN THE MOVIE WORD
	// !!!!TUTOR CALLED THIS "POPULATION" MUST GOOGLE THAT TERM FOR JAVASCRIPT !!!!!
	for(var i = 0; i< numBlanks; i++)
	{
		blanksAndWins.push("_");
		document.getElementById("underscore").innerHTML = blanksAndWins;
	}

	//UPDATES HTML FILE VIA DOM MANIPULATION 
	document.getElementById("underscore").innerHTML = blanksAndWins.join(" ");
	document.getElementById("guesses-left").innerHTML = guessesLeft;
	document.getElementById("wins").innerHTML = winCount;
	document.getElementById("loses").innerHTML = loseCount;
	document.getElementById("guesses-so-far").innerHTML = guessesSoFar;
	//TESTING 
	console.log(computerGuess);
	console.log(lettersInMovie);
	console.log(numBlanks);
	console.log(blanksAndWins);
}


// THIS FUNCTION TAKES THE PLAYERS INPUT (USERKEY) AND COMPARES IT TO SEE IF ITS A CORRECT MATCH (compareLetters)
function compareLetters(userKey)
{

				//IF USER KEY IS FOUND IN "COMPUTERGUESS" THEN IT WILL EXECUTE THIS FUNCTION FIRST
				if(computerGuess.indexOf(userKey) > -1)
				{
					//A FOR LOOP FOR THE NUMBER OF BLANKS(LETTERS) IN THE MOVIE 
					for(var i = 0; i < numBlanks; i++)
					{
						//THE CODE BELOW WILL ACKNOWLEDGE THE CORRECT LETTER FROM PLAYER AS WELL AS ADD TO THE RIGHT GUESS COUNTER 
						//AND UPDATE UNDERSCORES IN HTML FILE 
						if(lettersInMovie[i] === userKey)
						{
							rightGuessCounter++;
							blanksAndWins[i] = userKey;
							document.getElementById("underscore").innerHTML = blanksAndWins.join(" ");
						}	
					}
					//Test / Debug
					console.log(blanksAndWins);
				}
				//OR IF THE PLAYERS INPUT (userKey) IS THE WRONG LETTERS (guessesSoFar) IT WILL RUN THIS FUNCTION THAT PUSHES THE PLAYERS INPUT TO GUESSES SO FAR AND
				// ALSO WILL DEDUCT ONE FROM THE AMOUNT OF GUESSES LEFT (guessesLeft)
				else
				{
					guessesSoFar.push(userKey);
					guessesLeft--;
					//UPDATES HTML IN GUESSES LEFT AND GUESSES SO FAR IN HTML VIA DOM 
					document.getElementById("guesses-left").innerHTML = guessesLeft;
					document.getElementById("guesses-so-far").innerHTML = guessesSoFar;
			
				}
			
			
		
}

//THIS IS THE FUNCTION THAT UPDATES MY COUNTER VARIABLES 
function winLose()
{
	// WHEN ALL UNDERSCORES OF THE MOVIE ARE FILLED WITH CORRECT LETTERS 
	if(rightGuessCounter === numBlanks)
	{
		//UPDATING WINS NUMBER IN HTML FILE 
		winCount++;
		//MAKING CHANGES IN HTML FILE VIA DOM ALSO GIVING AN ALERT ON THEIR WIN 
		document.getElementById("wins").innerHTML = winCount;
		alert("You Got Lucky! It Won't Happen Again!");
		reset();
	}
	//OR ONCE THE PLAYER HITS ZERO ON "GUESSES LEFT" THEY LOSE
	else if(guessesLeft === 0)
	{
		// UPDATING LOSES NUMBER IN HTML FILE
		loseCount++;
		//MAKING CHANGES IN  HTML FILE VIA DOM AND GIVING ALERT THAT THEY LOST THIS ROUND 
		document.getElementById("loses").innerHTML = loseCount;
		alert("You Didn't Survive This Slasher Film");
		reset();
	}
}



//THE MAIN BODY OF CODE 
//TUTOR SAYS THIS INITIATES THE CODE (MUST FIGURE OUT WHAT HE MEANT, NOTES W4D3)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
startGame();

document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < lettersAlpha.length; i++)
	{	
		if(letterGuessed === lettersAlpha[i] && test === true)
		{
			var spliceDword = lettersAlpha.splice(i,1);

			compareLetters(letterGuessed);
			winLose();
		}
	}		
		
}


