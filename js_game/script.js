
    // setting computer choices to be a - z 
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// setting variables for game lives and score
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessChoices = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// this function will run when user selects an input the event is logged 
document.onkeyup = function(event) {

        var userGuess = event.key;
        console.log(userGuess)
        var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/*
if user guess is not equal to computer guess: 
1) keep computer guess constant
2) incriment point to guesses left
3)add user guess to guess choices
*/


// if user makes a a guess this conditional will run to see if user's guess is within the array
	if (options.indexOf(userGuess) > -1) {
//if user guess is equal; we will add increment to wins and resets the game 
        if (userGuess == computerGuess) {
            console.log("you got it right!")
            wins++;
            var winsElement = document.getElementById("wins")
            winsElement.innerText = "Wins: "+wins
            guessesLeft = 10;
            var guessesLeftElement = document.getElementById("guessesLeft")
            guessesLeftElement.innerText = "Guesses Left: "+guessesLeft;
            guessChoices = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            var yourGuessesElement = document.getElementById("yourGuesses")
            yourGuessesElement.innerText = "Your Guess: "+guessChoices;
            
        }else
// Conditional will run if it is not equal 
        if (userGuess != computerGuess) {
//creates is duplicate var, to check the array for true or false
            var isDuplicate = false;
//the amount of guesses within the array will run the amount of times the user inputs a guess
            for (var i = 0 ; i < guessChoices.length ; i++) {
//if user guess is input already the condital is true 
                if (userGuess == guessChoices[i]) { 
// if true the guess is in the array                    
                    isDuplicate = true;
//break the loop
                    break; 
                }
            }
            // checking to see if the user input is false, or not in the guessChoices array
            if (isDuplicate == false){
//decrement the guesses left
                guessesLeft--;
                var guessesLeftElement = document.getElementById("guessesLeft")
            guessesLeftElement.innerText = "Guesses Left "+ guessesLeft;
// insert user choice in the guess choice section                
                guessChoices.push(userGuess);
                var yourChoicesElement = document.getElementById("yourGuesses")
            yourChoicesElement.innerText = "Guesses so far: [ "+guessChoices+"]"            

            }
            console.log("you got it wrong");
            console.log("you got " +guessesLeft+" many tries left")
            console.log("previous guesses: "+ guessChoices)
            
        }

// checks guesses left 
        if (guessesLeft === 0) {
            guessesLeft = 10;
            var guessesLeftElement = document.getElementById("guessesLeft")
            guessesLeftElement.innerText = "Guesses left: " + guessesLeft;            

// increments losses
            losses++;
            var lossesElement = document.getElementById("losses")
            lossesElement.innerText = "Losses: " +losses             

 //reseting guess choices
            guessChoices = [];
//reset computer letter choice
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log("you lost")
        }
        
       
    }        
}


