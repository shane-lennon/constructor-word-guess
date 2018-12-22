var inquirer = require('inquirer');
var Word = require('./Word');

var testWord = new Word('cheetah');
var output = [];

var input = inquirer.prompt(
    {
      name: "letter",
      type: "input",
      message: "Guess Letter:",
      validate: function() {

      }
    }).then(function(answer) {
        console.log(answer)
        output.push(answer.letter);
        testWord.compareLetters(answer.letter);
        testWord.print();
        if (!testWord.guessed) {
          input();
        }
  });

// testWord.compareLetters('e');
// testWord.representation();