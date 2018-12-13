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
        this.stringReturn();
        for (var i = 0; i < letterArray.length; i++) {
            var currentLetter = letterArray[i];
            // console.log(currentLetter);
            currentLetter.letterGuessed(character);
        }
        this.stringReturn();
    }
}

module.exports = Word;