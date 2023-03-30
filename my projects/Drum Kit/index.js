// Detecting Button Press

// Get the number of drum buttons in the page
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop through each drum button to add a click event listener
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
};

// Detecting Keyboard Press

// Add a keydown event listener to the document
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Play the sound corresponding to the key pressed
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHTML);
            break;
    }

};

// Add animation to the button pressed or key pressed
function buttonAnimation(currentKey) {
// Get the button with the class equal to the current key
var activeButton = document.querySelector("." + currentKey);
// Add the "pressed" class to the button
activeButton.classList.add("pressed");
// Remove the "pressed" class from the button after 100ms
setTimeout(function () {
activeButton.classList.remove("pressed");
}, 100);
};
