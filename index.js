var Word = require("./word");
var inquirer = require("inquirer");
var newWord;
var totalGuesses = 12;
var guessesRemaining;

var selectNewWord = function() {
    var wordArray = ["canopy", "octagon", "cucumber", "gazelle", "application", "notebook"];

    var randomNum = Math.floor(Math.random() * wordArray.length);
    var wordToGuess = wordArray[randomNum];
    newWord = new Word(wordToGuess);
    newWord.stringReturn();
    loop();
}

var checkGuess = function(guess) {
    // checkWord() returns a boolean
    // if it returns true, the input didn't match any letters in the word, so the user loses a guess
    if (newWord.checkWord(guess)) {
        guessesRemaining -= 1;
    }
    checkGame();
}

var checkGame = function() {
    if (guessesRemaining <= 0) {
        console.log("You're out of guesses :(");
        endGame();
    } else if (newWord.checkIfComplete()) {
        console.log("You guessed the word!");
        endGame();
    } else {
        loop();
    }
}

var endGame = function() {
    inquirer.prompt([
        {
            type: "list",
            message: "Want to play again?",
            choices: ["Yes", "No"],
            name: "again"
        }
    ]).then(function(response) {
        if (response.again === "Yes") {
            game();
        } else {
            console.log("Have a nice day!");
        }
    }).catch(function(error) {
        if (error) {
            console.log(error);
        }
    });
}

var loop = function() {
    console.log("Guesses left: " + guessesRemaining);
    inquirer.prompt([
        {
            type: "input",
            message: "guess a letter",
            name: "guess"
        }
    ]).then(function(response) {
        if ((response.guess).length !== 1) {
            console.log("Input must be one character only!");
            loop();
        } else {
            checkGuess(response.guess);
        }
    }).catch(function(error) {
        if (error) {
            console.log(error);
        }
    });
}

var game = function() {
    guessesRemaining = totalGuesses;
    selectNewWord();
}

game();