function Letter() {
    this.trueCharacter = "";
    this.guessed = false;

    this.letterGuessed = function(input) {
        if (input === this.trueCharacter) {
            this.guessed = true;
        }
        return this.guessed;
    }

    this.displayLetter = function() {
        if (this.guessed) {
            return this.trueCharacter;
        } else {
            return "-";
        }        
    }
}

module.exports = Letter;