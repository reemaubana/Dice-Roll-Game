  // generating random number(1 to 6)
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // prints dice from 1 to 6
  var firstDiceImage = "images/dice" + randomNumber1 + '.png';
  document.querySelector(".img1").setAttribute("src", firstDiceImage);

  var secondDiceImage = "images/dice" + randomNumber2 + '.png';
  document.querySelector(".img2").setAttribute("src", secondDiceImage);

  // conditions to apply to generate random number
  if (randomNumber1 == randomNumber2) {
      document.querySelector(".result").innerHTML = "It's a Draw!"
  }
  else if (randomNumber1 < randomNumber2) {
      document.querySelector(".result").innerHTML= "Player2 Wins";
  }
  else {
      document.querySelector(".result").innerHTML = "Player1 Wins";
  }
  