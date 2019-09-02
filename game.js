// Create an array of options
    var word = ["spider", "pig", "dog", "cat", "cow", "bird", "horse"];
// splitting letters in array
var random = "";
var letters= [];
var blanks = 0;

var underScore = [];

// User's Guess
var rightWord = [];
var wrongWord= [];
var remainingGuess= 5;

// wins and losses base variables
var wins = 0;
var losses = 0;

// Game function to run on resets
function game(){
    // move randNum into this function
    random = word[Math.floor(Math.random() * word.length)];
        console.log("randNum: " + random)
    // create for loop to create underscore and later place guessed letter
    letters = random.split("");
    blanks= letters.length;
    for(var i = 0; i < blanks; i++){
        underScore.push("_");
    }
        console.log("underScore: " + underScore)
    // push underscores to rand-word class
    document.getElementById("rand-word").innerHTML=" " + underScore.join(" ");
}

// Reset Function
function reset(){
    remainingGuess= 5;
    wrongWord= [];
    underScore= [];
    game();
    console.log(remainingGuess, wrongWord, underScore);
}
// run the game function

game();

// Get user's guess
document.onkeyup = function(event) {
    var keyCode = event.keyCode;
    var keyWord = String.fromCharCode(keyCode).toLowerCase();
        console.log("keyWord string: " + keyWord);
    // Check the inputed letters
    var letterWord = false;

    for(var i= 0; i<blanks; i++){
        if(random[i] == keyWord){
            letterWord = true;
        }
    }
    if(letterWord){
        for(var i=0; i < blanks; i++){
            if(random[i]== keyWord){
                underScore[i] = keyWord;
            }
        }
    }else{
        wrongWord.push(keyWord);
        remainingGuess --;
    }
    console.log(underScore);
    // Check if win or lose
    if(letters.toString() == underScore.toString()){
        // wins +1
        wins++;
        // Run the reset function
        reset();
        // push # of wins to HTML
        document.getElementById("tracking-number").innerHTML=""+ wins;
    }else if (remainingGuess === 0){
        // losses +1
        losses++;
        // Run the reset function
        reset();
        // push # of losses to HTML
        document.getElementById("losses").innerHTML="" + losses;
    }

    // push guessed word to underscores on HTML 
    document.getElementById("rand-word").innerHTML=" " + underScore.join(" ");
    // push # of remaining guesses to HTML
    document.getElementById("remaining-guesses").innerHTML=" " + remainingGuess;

}
