// This code generates a random number between 1 and 6 to simulate rolling a dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// The number is used to construct the name of the image file
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png-dice6.png

// The image source is then constructed using the image file name
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6/png

// The first image on the page is selected and its source attribute is updated with the randomly generated image source
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// The same process is repeated for the second dice image
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// The code then determines which player has won or if it is a draw based on the randomly generated numbers and updates the heading on the page accordingly
if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "🏆Player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
document.querySelector("h1").innerHTML = "🏆Player 2 wins!";
}
else {
document.querySelector("h1").innerHTML = "Draw...";
}



// Refresh

document.addEventListener('keydown', function(event) {
    if(event.code === 'Space') {
      location.reload();
    }
  });
