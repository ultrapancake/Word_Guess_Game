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
document.addEventListener('keypress', (event) => {
    var keyCode = event.keyCode;
    var keyWord = String.fromCharCode(keyCode);
        console.log("keyWord string: " + keyWord);
    // If user's guess is correct
    if(randWord.indexOf(keyWord) > -1){
            console.log(true);
        // Add to right words array
        rightWord.push(keyWord);
            console.log("right word: " + rightWord);
         // Replace underscore with correct letter
         underScore[randWord.indexOf(keyWord)] = keyWord;
            console.log("Replace array: " + underScore);
         docUnderScore[0].innerHTML = underScore.join(' ');
        // Win
        if(underScore.join("") === randWord) {
            alert("You Win");
        }
    }else{
        wrongWord.push(keyWord);
    }
})
