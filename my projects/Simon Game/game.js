// Define an array of button colours used in the game
var buttonColours = ["red", "blue", "green", "yellow"];

// Initialize an empty array for the game pattern and the user's clicked pattern
var gamePattern = [];
var userClickedPattern = [];

// Initialize some game variables
var started = false;
var level = 0;

// Listen for a key press event on the document and start the game if it hasn't started yet
$(document).keypress(function () {
  if (!started) {
    // Update the level title to show the current level
    $("#level-title").text("Level " + level);
    // Generate the next sequence of button presses
    nextSequence();
    // Set the started variable to true to prevent the game from starting multiple times
    started = true;
  }
});

// Listen for a button click event on a button with class "btn"
$(".btn").click(function () {
  // Get the ID of the button that was clicked
  var userChosenColour = $(this).attr("id");
  // Add the clicked colour to the user's clicked pattern array
  userClickedPattern.push(userChosenColour);
  // Play the corresponding sound and animate the button press
  playSound(userChosenColour);
  animatePress(userChosenColour);
  // Check if the user's clicked pattern matches the game pattern up to the current level
  checkAnswer(userClickedPattern.length - 1);
});

// Check if the user's clicked pattern matches the game pattern up to the current level
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // If the user has correctly matched the game pattern up to the current level, generate the next sequence of button presses
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    // If the user has incorrectly matched the game pattern, play the "wrong" sound, add the "game-over" class to the body element, and reset the game
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  };
};

// Generate the next sequence of button presses
function nextSequence() {
  // Reset the user's clicked pattern array
  userClickedPattern = [];
  // Increment the level and update the level title to show the new level
  level++;
  $("#level-title").text("Level " + level);
  // Choose a random colour from the buttonColours array and add it to the game pattern array
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  // Animate the button press corresponding to the chosen colour and play the corresponding sound
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
};

// Animate the button press by adding and removing the "pressed" class
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
};

// Play the sound corresponding to the given name
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

// Reset the game variables to start over
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
};
