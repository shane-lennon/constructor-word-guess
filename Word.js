var Letter = require('./Letter');

function Word(string) {
    this.value = string,
    this.convert = function(string) {
        var characterArray = string.split('');
        var letterArray = [];

        for (i = 0; i < characterArray.length; i++) {
            letterArray[i] = new Letter(characterArray[i]);
        }
        return letterArray;
    },
    this.letters = this.convert(this.value),
    this.print = function() {
        var string = '';    
        for(i = 0; i < this.letters.length; i++) {
            string += this.letters[i].print() + ' ';
        }
        console.log(string);
    },
    this.compareLetters = function(character) {
        for (i = 0; i < this.letters.length; i++) {
            this.letters[i].compareCharacter(character);
        }
    }
    this.guessed = function() {
        for (i = 0; i < this.letters.length; i++) {
            if (this.letters[i].guessed === false) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Word;