//Document ready function to fade in title and start
$(document).ready(function () {
    $("#game-title").fadeIn(2000);
    $("#logo").delay(1500).fadeIn(2000).delay(500).fadeOut(2000);
    $(".mainControls").delay(5500).fadeIn(2000);
});
const simonSound = document.createElement("audio");
const easy = 1000;
const medium = 600;
const hard = 300;
const possibleMoves = ['red', 'green', 'yellow', 'blue'];
var totalClicks = 0;
var movesMade = [];
var playerMoves = [];
var randomNum = 0;
var tempo = easy;
var duration = (movesMade.length * tempo);
/**Sets the tempo for the next game based on the id of the button clicked. */
$(".speedControl").on("click", function () {
    $(this).addClass("btn-danger").removeClass("btn-success").siblings().removeClass("btn-danger").addClass("btn-success");
    tempo = eval(this.id);
    return tempo;
});
/**Generates random number, and pushes to moveMade array. */
function randomise() {
    randomNum = Math.floor(Math.random() * 4);
    movesMade.push(randomNum);
};
/**Removes the start section, and brings the game board into view.
 * Initiates the first random number generation, and switches to the computers turn
 * after animation has ended.
 */
$("#start-game").on("click", function () {
    simonSound.volume = 1;
    duration = (movesMade.length * tempo);
    totalClicks = 0;
    document.getElementById("clickCounter").innerHTML = totalClicks;
    $(this).fadeOut(1500);
    $(".speedControl").fadeOut(1500);
    $(".fader").delay(1500).fadeIn(1500);  
    $("#reset").delay(1500).fadeIn(1500);  
    if (window.innerWidth > 767) {
        $("#clicker").delay(1500).fadeIn(1500);
    }
    document.getElementById("levelNo").innerHTML = "Level:1";
    randomise();
    $("#waiting").delay(1500).fadeIn(1500).delay(duration).fadeOut(500);
    $("#playing").delay(duration + 3000).fadeIn(1500);
    setTimeout(function () {
        computerTurn();
    }, 3000);
});
/**Sets delay and colour lighting for each iteration of the computer turn loop. */
function compEachTurn(tempo, i, color) {
setTimeout(function () {
    $("#"+color).delay(tempo * i).toggleClass("light");
    playSound(color);
    setTimeout(function () {
        $("#"+color).toggleClass("light");
    }, tempo / 2);
}, tempo * i);
};
/**Initiates the computer turn loop based on array length of movesMade.
 * Disables input until completed.
 */
function computerTurn() {
    document.getElementById("levelNo").innerHTML = "Level:" + (movesMade.length);
    playerMoves = [];
    duration = (tempo * movesMade.length)
    $("#simon-main").addClass("disableInput");
    for (let i = 0; i < movesMade.length; i++) {
        const colour = movesMade[i];
        const endColour = possibleMoves[colour];
        compEachTurn (tempo, i, endColour)
        setTimeout(function () {
            $("#simon-main").removeClass("disableInput");
        }, duration);
    };
};
/**Tells the system what to do once buttons are clicked. Checks against array of moves to follow.
 * Enables the fail modal for when the player makes a wrong move.
 */
$(".four-buttons").on("click", function () {
    playerMoves.push(possibleMoves.indexOf(this.id));
    playSound(this.id);
    var lastMove = playerMoves.length - 1;
    const clicker = document.getElementById("clickCounter");
    const gameOverMessage = document.getElementById("gameOverModal");
    if (playerMoves.length == movesMade.length && playerMoves[lastMove] == movesMade[lastMove]) {
        totalClicks++;
        clicker.innerHTML = totalClicks;
        $("#playing").fadeOut(500).delay(duration + 1000).fadeIn(1500);
        $("#waiting").fadeIn(1500).delay(duration).fadeOut(500);
        randomise();
        setTimeout(function () {
            computerTurn();
        }, 1000);
    } else if (playerMoves[lastMove] == movesMade[lastMove]) {
        totalClicks++;
        clicker.innerHTML = totalClicks;
    } else if (playerMoves[lastMove] !== movesMade[lastMove] && totalClicks == 0) {
        $("#gameOver").modal();
        gameOverMessage.innerHTML = "Unlucky! You got " + totalClicks + "! Try again and maybe this time you can try and get at least " + (totalClicks + 1) + "?!";
        clearGame();
    } else {
        $("#gameOver").modal();
        gameOverMessage.innerHTML = "Congratulations! You got " + totalClicks + "! Try again and maybe this time you can get " + (totalClicks + 1) + "!";
        clearGame();
    };
});
/**Clears the game board from view, and brings the start menu back into view. */
function clearGame() {
    simonSound.volume = 0;
    const fourbuttons = $(".fourbuttons").children();
    fourbuttons.stop(true, true).toggleClass("light").removeClass("light");
    $(".clear").stop(true, true).fadeOut(1500);
    $("li").stop(true, true).on("mousedown touchstart mouseout");
    $(".mainControls").delay(1500).fadeIn(1500, 0);
    movesMade = [];
    playerMoves = [];
};
//reset button tied to clearGame function
$("#reset").on("click", clearGame);
//Toggle the light up function when clicked
$("li").on("mousedown touchstart", function () {
    $(this).addClass("light");
}).on("mouseup touchend mouseout", function () {
    $(this).removeClass("light");
});
/**Creates the sound file link based on colour of argument input. */
function playSound(color){
    simonSound.src="assets/sounds/"+color+"Sound.mp3"
    simonSound.play();
}