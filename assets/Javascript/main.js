// Global Variables
//=======================================================================

//Arrays and Vars
var wordOptions = ["doomed", "damned", "snuff", "haunted", "diary", "pygmy", "rant", "survivor"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksPlusCorrect =[];
var wrongGuess = [];

//Game Counters
var winCount = 0;
var lossCount = 0;
var guessLeft = 10;

//Functions
//=======================================================================

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split ("");
    console.log(lettersInWord.length);
    numBlanks = lettersInWord.length;
    console.log("the numblank is:"+numBlanks); 
    //Resets
     guessLeft = 10;
     wrongGuess = [];
     blanksPlusCorrect =[];

    //Populate Blanks
    for (var i=0; i<numBlanks; i++){
        blanksPlusCorrect.push("_"); 
       
    }

    //Show in HTML
    document.getElementById("word-guess").innerHTML = blanksPlusCorrect.join(" ");
    document.getElementById("wrong-guess").innerHTML = wrongGuess;
    document.getElementById("guess-counter").innerHTML = guessLeft;
    document.getElementById("win-counter").innerHTML = winCount;
    document.getElementById("loss-counter").innerHTML = lossCount;

    // Test/Debug
console.log(selectedWord);
console.log(lettersInWord);
console.log(numBlanks); 
console.log(blanksPlusCorrect);
}

//Is letter in wordz
function checkLetter (letter){
    
    var goodLetter = false

    for (var i=0; i<numBlanks; i++){
        if(selectedWord[i] === letter) {
            goodLetter = true;
        }
    }

// Put letters in word
        if(goodLetter){
            for (var i=0; i<numBlanks; i++){
                if(selectedWord[i] === letter) {
                blanksPlusCorrect[i] = letter;
                guessLeft --;
                }
            }
        }
        else {
            wrongGuess.push(letter);
            guessLeft--;
        } 
       
console.log(blanksPlusCorrect);

}

//Round over
function roundComplete(){
console.log("Win-counter" +winCount + "| Loss-counter"+ lossCount + "| Guess-counter" + guessLeft);

document.getElementById("guess-counter").innerHTML = guessLeft;
document.getElementById("word-guess").innerHTML = blanksPlusCorrect.join(" ");
document.getElementById("wrong-guess").innerHTML = wrongGuess.join(" ");


if (lettersInWord.toString() == blanksPlusCorrect.toString()){
    winCount ++;
    alert("You've Won!");

    document.getElementById("win-counter").innerHTML = winCount;

    startGame();
}

else if (guessLeft == 0){
    lossCount ++;
    alert("You've Lost!");

    document.getElementById("loss-counter").innerHTML = lossCount;

    startGame();
}
}
//Main Process
//=======================================================================

//Starts Game
startGame();

//Clicks
document.onkeyup = function(event){
    var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetter(letterGuess);
    roundComplete();

    //Test/Debug
    console.log(letterGuess);
    
}
