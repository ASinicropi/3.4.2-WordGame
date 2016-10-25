(function(){
  "use strict";

  var guessInput, guess, guessButton, output, letters,
  numLettersMatched, lettersGuessed, lettersMatched, lives,
  currentWord, words, messages, wrongLetter, wrongAnswerCount;

  function setup(){
    alphabet =
    lives = 7;
    messages = {
      win: 'You win!',
      lose: 'Game over!'
   }

     lettersGuessed = lettersMatched = '';
     numLettersMatched = 0;

    var random = Math.floor((Math.random()*(commonWords.length-1)));
    words = commonWords[random];

    var currentWord = new Array(words.length);
    var error = 0;

    for(var i=0; i < currentWord.length; i++){
      currentWord[i]="- ";
    }

    function printcurrentWord(){
      for(var i=0; i < currentWord.length; i++)
    }

    

    output = document.getElementById("output");
    man = document.getElementById("manLives");
    guessInput = document.getElementById("guessLetter");
    document.getElementById("guessLetter").value = '';

    myLives.innerHTML = "You have " + lives + " lives";
      if(lives < 1){
        lives.innerHTML = messages.lose;
      }

    guessButton = document.getElementById("guess");
    guessInput.style.display = 'inline';
    guessButton.style.display = 'inline';

   letters = document.getElementById("letters");
   letters.innerHTML = '<li class="current-word">Current word:</li>';

   function gameOver(win){
     if (win){
      output.innerHTML = messages.win;
    }else{
      output.innerHTML = messages.lose;
    }
    guessInput.style.display = guessButton.style.display = 'none';
    guessInput.value = '';
  }

    document.getElementById("resetButton").onclick = setup;















  };
}());
