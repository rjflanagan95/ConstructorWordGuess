var Letter = require("./letter");

function Word(currentWord) {
    this.currentWord = currentWord;
    letterArray = [];

    // creating the array of letter objects
    for (var i = 0; i < currentWord.length; i++) {
        var newLetter = new Letter(currentWord[i])
        newLetter.trueCharacter = currentWord[i];
        (letterArray).push(newLetter);
    }

    this.stringReturn = function() {
        var dispString = "";
        for (var i = 0; i < letterArray.length; i++) {
            var dispCharacter = letterArray[i].displayLetter();
            dispString += dispCharacter;
        }
        console.log(dispString + "\n");
    }

    this.checkWord = function(character) {
        // assuming the guess will not match any letters of the word
        var noMatches = true;
        // check each Letter object in the array
        for (var i = 0; i < letterArray.length; i++) {
            var currentLetter = letterArray[i];
            // if that object has not already been guessed correctly
            if (!currentLetter.guessed) {
                // check to see if the new guess matches it
                if (currentLetter.letterGuessed(character)) {
                    // if it matches, changes the boolean to false
                    noMatches = false;
                }
            }
        }
        this.stringReturn();
        return noMatches;
    }

    this.checkIfComplete = function() {
        var wordGuessed = false;
        var correctLetters = 0;
        // check each letter again and count the number of correctly guessed letters
        for (var i = 0; i < letterArray.length; i++) {
            var currentLetter = letterArray[i];
            if (currentLetter.guessed) {
                correctLetters += 1;
            }
        }
        // if all letters have been guessed, change the boolean to true
        if (correctLetters === letterArray.length) {
            wordGuessed = true;
        }
        return wordGuessed;
    }
}

module.exports = Word;