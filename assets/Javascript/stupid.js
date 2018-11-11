//Global Variables
//==============================================================================================================================
    //computer picks
var computerPick = ["doomed", "damned", "snuff", "haunted", "diary", "lullaby", "damned", "pygmy", "rant", "choke", "survivor"];

var computerWord = "";
var lettersWord = [];
var blanksLetters = [];
var blanks = 0;
var guessLetters = [];


//Scoring
var numWins = 0;
var numLoss = 0;
var totalGuess = 8;


//Show in HTML

// var wordText = document.getElementById("word-guess");
// var letterText = document.getElementById("wrong-guess");
// var winText = document.getElementById("win-counter");
// var lossText = document.getElementById("loss-counter");
// var guessText = document.getElementById("guess-counter");





//Functions
//===================================================================================
//computer picks word


    computerWord = computerPick[Math.floor(Math.random()* computerPick.length)];
    console.log(computerWord);

    document.onkeyup = function(event){
        var playerLetter = String.fromCharCode(event.keyCode).toLowerCase();
        for (var i= 0;i<blanks; i++){
            if(lettersWord[i] === playerLetter){
                totalGuess --;
                blanksLetters.join(" ");
                document.getElementById("word-guess").innerHTML = blanksLetters;
            }
            else if(lettersWord[i] !== playerLetter){
                totalGuess --;
                guessLetters.join(" ");
                document.getElementById("wrong-guess").innerHTML = guessLetters;
                console.log(playerLetter);
                }
        }
    }
    
    lettersWord = computerWord.split("");
    console.log(lettersWord);
    blanks = lettersWord.length;
    console.log(blanks);

    //resets
    totalGuess = 8;
    guessLetters = [];
    blanksLetters =[];


    //populate underscores
    for (i=0; i<blanks; i++){
        blanksLetters.push("_");
        console.log(blanksLetters);
        document.getElementById("word-guess").innerHTML = blanksLetters;
    }

    


//Calls
//==================================================================================



    

    
    
    

    

