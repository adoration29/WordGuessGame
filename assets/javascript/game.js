
//create secretWord
var wordletters = ["B","L","E","S"]

// ask user for guess letter
var guessedletters =["-","-","-","-"]

function guessedLetters(letter) {
    var goodGuess = false;
    var moreGuess = false;

    for (var i =0; i < wordletters.length; i++){
        if (wordletters[i]==letter) {
            guessedletters[i] = letter;
            goodGuess = true;
        }

    if (guessedletters[i] == "-"){
        moreGuess = true;
    }
}

if (goodGuess) {

    console.log("You got a letter!");
    console.log(guessedletters.join(""));

    if (!moreGuess) {
        console.log("YOU WIN");
    }
    
    }

else {
 console.log("Nope, Guess again!");
} 
}

