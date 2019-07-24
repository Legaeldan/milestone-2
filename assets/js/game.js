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
$(".speedControl").on("click", function () {
    $(this).addClass("btn-danger").removeClass("btn-success").siblings().removeClass("btn-danger").addClass("btn-success");
    tempo = eval(this.id);
    console.log(tempo);
});
function randomise() {
    //generates random number
    randomNum = Math.floor(Math.random() * 4);
    //Adds random number to array
    movesMade.push(randomNum);
    console.log(movesMade);
    console.log(randomNum);
};
//Brings start button and title into view
$("#start-game").on("click", function () {
    simonSound.volume = 1;
    duration = (movesMade.length * tempo);
    totalClicks = 0;
    document.getElementById("clickCounter").innerHTML = totalClicks;
    $(this).fadeOut(1500);
    $(".speedControl").fadeOut(1500);
    $(".fader").delay(1500).fadeIn(1500);  
    $("#reset").delay(1500).fadeIn(1500);  
    if (window.innerWidth > 768) {
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
function compEachTurn(tempo, i, color) {
setTimeout(function () {
    $("#"+color).delay(tempo * i).toggleClass("light");
    playSound(color);
    setTimeout(function () {
        $("#"+color).toggleClass("light");
    }, tempo / 2);
}, tempo * i);
};
//plays each iteration in array, but sound causes break
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
        console.log(possibleMoves[colour]);
        console.log(colour);
        //  }, 500 * movesMade.indexOf(colour) + 1);
    };
};
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
    console.log(playerMoves);
});
//Clears the current game and resets the clicker to 0
function clearGame() {
    simonSound.volume = 0;
    const fourbuttons = $(".fourbuttons").children();
    fourbuttons.stop(true, true).toggleClass("light").removeClass("light");
    $(".clear").stop(true, true).fadeOut(1500);
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
function playSound(color){
    simonSound.src="assets/sounds/"+color+"Sound.mp3"
    simonSound.play();
}