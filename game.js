// Variables
//  - lives
var lives = 10;
//  - numberWins
//  - wrongGuess
var keyInput = "";
var word = "";
var guess = [];
// Arrays
//  - letters
//  - wordPool
//  - GuessedLetters
// Boolean
var gameDone = true;

// Key Function
document.onkeyup = function (event){
    // key to lowercase
    keyInput = event.key.toLocaleLowerCase();
    // log it
    console.log("Key input: " + keyInput);
    // if keyInput is not a letter stop (return) and exit
    // keyInput is a letter
    // if keyInput matches previous input stop
    // keyInput is new letter
    guessedLetters.push(keyInput);
    // push new letter to HTML
    document.getElementById("blah").html = "<p>Guessed Letters: </p>" + guessedLetters;
    // check if keyInput is in word
}

// Check if the letter is in the word
function isKeyInWord(){
    var isInWord = false;
    // compare the keyInput with the characters of the word
    for (var i = 0; i < isInWord.length; i++){
        if (keyInput == word [i]){
            isInWord = true;
            // Replace the guessed character in guess
            guess[i] = keyInput;
        }
    }
    // if keyInput is not a match increase bad guess
    if (!isInWord){
        // play audio que
        lives--;
        if(lives < 1){
            gameDone = true;
        }
    }
}