function Letter(value) {
    this.value = value,
    this.placeholder = '_',
    this.guessed = false,
    this.print = function() {
        if (this.guessed) {
            return this.value;
        }
        return this.placeholder;
    },
    this.compareCharacter = function(character){
        if (character.toUpperCase() === this.value.toUpperCase()){
            this.guessed = true;
            return true;
        }
        return false;
    }
}

module.exports = Letter;