function Letter(value) {
    this.value = value,
    this.placeholder = '_',
    this.guessed = false,
    this.check = function() {
        if (this.guessed) {
            return this.value;
        }
        return this.placeholder;
    }
    this.compareCharacter = function(character){
        if (character === this.value){
            this.guessed = true;
        }
    }
}