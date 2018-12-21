require('Letter');

function Word(string) {
    this.value = string;
    this.convert = function(string) {
        var characterArray = string.split('');
        var letterArray = [];
        console.log(characterArray);
        for (i = 0; i < characterArray.length; i++) {
            letterArray[i] = new Letter(characterArray[i]);
        }

        return letterArray;
    }
    this.letters = this.convert(this.value);
    this.representation = function() {
        var string = ''
        for(i = 0; i < this.letters.length; i++) {
            string += this.letters[i].check();
        }
        return string;
    }
    this.compareLetters = function(character) {
        for (i = 0; i < this.letters.length; i++) {
            this.letters[i].compareCharacter(character);
        }
    }
}

var gameWord = new Word('test');

console.log(gameWord.letters);