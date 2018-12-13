function Letter() {
    this.trueCharacter = "";
    this.guessed = false;

    this.letterGuessed = function(input) {
        if (input === this.trueCharacter) {
            this.guessed = true;
        }
    }

    this.displayLetter = function() {
        if (this.guessed) {
            return this.trueCharacter;
        } else {
            return " _ ";
        }        
    }
}

module.exports = Letter;