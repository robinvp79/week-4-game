$( document ).ready(function() {
    
    $('.crystalImage').on('click', function(){
      counter = counter + parseInt($(this).data('num'));
      
      $('#yourNumber').text(counter);
      if (counter == numberToGuess){
        alert('You won!!!!');
      }else if( counter > numberToGuess){
        alert('You lost!');
      }
    });

    var numberToGuess = Math.floor(Math.random() * 101) + 19;
    var counter = 0;
    var redNumber = Math.floor(Math.random() * 11) + 1;
    var blueNumber = Math.floor(Math.random() * 11) + 1;
    var yellowNumber = Math.floor(Math.random() * 11) + 1;
    var greenNumber = Math.floor(Math.random() * 11) + 1;
    var winGames = 0;
    var lossGames = 0;

    $('#compNumber').text(numberToGuess);
    $('#playerScore').text(counter);

    $('#red').on('click',function(){
      counter = counter + redNumber;
      $('#playerScore').text(counter);
      document.getElementById("audioPlay").play();
      checkWin();
    })

    $('#blue').on('click',function(){
      counter = counter + blueNumber;
      $('#playerScore').text(counter);
      document.getElementById("audioPlay").play();
      checkWin();
    })    

    $('#yellow').on('click',function(){
      counter = counter + yellowNumber;
      $('#playerScore').text(counter);
      document.getElementById("audioPlay").play();
      checkWin();
    })

    $('#green').on('click',function(){
      counter = counter + greenNumber;
      $('#playerScore').text(counter);
      document.getElementById("audioPlay").play();
      checkWin();
    })

    function checkWin() {
      if (counter == numberToGuess){
        $('#message').text('You Won!');
        winGames ++;
        $('#wins').text('Wins: ' + winGames);
        document.getElementById("audioStart").play();
        resetGame();
      }else if( counter > numberToGuess){
        $('#message').text('You Lost!');
        lossGames ++;
        $('#losses').text('Losses: ' + lossGames);
        document.getElementById("audioStart").play();
        resetGame();
      }
    }

    function resetGame() {
      numberToGuess = Math.floor(Math.random() * 101) + 19;
      counter = 0;
      redNumber = Math.floor(Math.random() * 11) + 1;
      blueNumber = Math.floor(Math.random() * 11) + 1;
      yellowNumber = Math.floor(Math.random() * 11) + 1;
      greenNumber = Math.floor(Math.random() * 11) + 1;
      $('#compNumber').text(numberToGuess);
      $('#playerScore').text(counter);
    }

  });