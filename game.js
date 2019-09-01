// Create an array of options
    var word = ["SpiderMan", "BatMan", "Flash", "WonderWoman", "GreenArrow", "BlackPanther", "CaptainAmerica", "Hawkeye", "Hulk", "Thor"];
// Select Random Word
    var randNum = math.floor(math.random()) * word.length);
    var randWord = word[randNum];
    var underScore = [];
    console.log("Random Word Chosen " + randWord);
// User's Guess
    var correctWord = [];
    var wrongWord= [];

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
    console.log("Keyboard input event: " + event);
    var keyCode = event.keyCode;
    console.log("keyCode event " + keyCode);
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
    }
})
