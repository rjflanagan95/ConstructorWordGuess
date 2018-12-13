var Word = require("./word");

var wordArray = ["canopy", "octagon", "cucumber", "gazelle", "application", "notebook"];

var randomNum = Math.floor(Math.random() * wordArray.length);
var wordToGuess = wordArray[randomNum];
console.log(wordToGuess);
var newWord = new Word(wordToGuess);
newWord.checkWord("c");
newWord.checkWord("a");
newWord.checkWord("o");
newWord.checkWord("n");