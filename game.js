// Create an array of options
    var word = ["spider", "pig", "dog", "cat", "cow", "bird", "horse"];
// splitting letters in array
var randNum = "";
var letters= [];
var blanks = 0;

var underScore = [];
// User's Guess
var rightWord = [];
var wrongWord= [];
var remainingGuess= 5;

// Game function to run on resets
function game(){
    // move randNum into this function
    randNum = Math.floor(Math.random() * word.length);
        console.log("randNum: " + randNum)
    // create for loop to create underscore and later place guessed letter
    letters = randNum.split("");
    blanks= letters.length;
    for(var i = 0; i < blanks; i++){
        underScore.push("_");
    }
        console.log("underScore: " + underScore)
    // push underscores to rand-word class
    document.getElementsByClassName('rand-word').innerHTML=" " + underScore.join(" ");
}

// Reset Function
function reset(){
    remainingGuess= 5;
    wrongWord= [];
    underScore= [];
    game();
    console.log(remainingGuess, wrongWord, underScore);
}

// Get user's guess
document.onkeyup = function(event) {
    var keyCode = event.keyCode;
    var keyWord = String.fromCharCode(keyCode).toLowerCase();
        console.log("keyWord string: " + keyWord);
    // Check the inputed letters
    var letterWord = false;

    for(var i= o; i<blanks; i++){
        if(randNum[i] == keyWord){
            letterWord = true;
        }
    }
    if(letterWord){
        for(var i=0; i < blanks; i++){
            if(randNum[i]== keyWord){
                underScore[i] = keyWord;
            }
        }
    }else{
        wrongWord.push(keyWord);
        remainingGuess --;
    }
    console.log(underScore);
    // Check if win or lose
    
}
