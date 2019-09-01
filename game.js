// Create an array of options
    var word = ["spider", "pig", "dog", "cat", "cow", "bird", "horse"];
// Select Random Word
    var randNum = Math.floor(Math.random() * word.length);
    var randWord = word[randNum];
    var underScore = [];
        console.log("Random Word Chosen: " + randWord);
// User's Guess
    var rightWord = [];
    var wrongWord= [];

// HTML
var docUnderScore = document.getElementsByClassName('rand-word');

// Dynamically post underscores for length of word
var createUnderScore = () => {
    for(var i = 0; i < randWord.length; i++){
        underScore.push("_");
    }
    return underScore;
}
        console.log(createUnderScore());

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

// Push the under score function to the HTML
docUnderScore[0].innerHTML = createUnderScore().join(' ');//This function runs twice and produces double underscores

