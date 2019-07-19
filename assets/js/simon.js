//Document ready function to fade in title and start
$(document).ready(function () {
    $("#game-title").fadeIn(2000);
    $("#logo").delay(1500).fadeIn(2000).delay(500).fadeOut(2000);
    $("#start-game").delay(5500).fadeIn(2000);
});

const easy = 1000;
const medium = 600;
const hard = 300;
const possibleMoves = ['red', 'green', 'yellow', 'blue'];
var totalClicks = 0;
var movesMade = [];
var playerMoves = [];
var randomNum = 0;
var tempo = easy;
var duration = 0;

    //sound files defined below
    var simonSound = document.createElement("audio");
    simonSound.volume = 1;
    simonSound.autoplay = true;
    function greenSound() {
        simonSound.src = "assets/sounds/simonSound2.mp3";
        simonSound.play();
    }
    function redSound() {
        simonSound.src = "assets/sounds/simonSound1.mp3";
        simonSound.play();
    }
    function yellowSound() {
        simonSound.src = "assets/sounds/simonSound3.mp3";
        simonSound.play();
    }
    function blueSound() {
        simonSound.src = "assets/sounds/simonSound4.mp3";
        simonSound.play();
    }

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
    $(this).fadeOut(1500, 0);
    $("li").delay(1500).fadeIn(1500);
    $(".clicker").delay(1500).fadeIn(1500);
    document.getElementById("levelNo").innerHTML = "Level:" + (movesMade.length + 1);
    $("#levelNo").delay(1500).fadeIn(1500);
    randomise();
    setTimeout(function() {
        computerTurn();
    }, 3000);
});

//plays each iteration in array, but sound causes break
function computerTurn() {
    document.getElementById("levelNo").innerHTML = "Level:" + (movesMade.length);
    playerMoves = [];
    for (let i = 0; i < movesMade.length; i++) {
        var colour = movesMade[i];
        var endColour = possibleMoves[colour];
   // setTimeout(function() {
    if (endColour === "red") {
        setTimeout(function () {
            $("#red").delay(tempo * i).toggleClass("jqhover");
            redSound();
            setTimeout(function () {
                $("#red").toggleClass("jqhover");
            }, tempo / 2);
        }, tempo * i);
    } else if (endColour === "green") {
        setTimeout(function () {
            $("#green").delay(tempo * i).toggleClass("jqhover");
            greenSound();
            setTimeout(function () {
                $("#green").toggleClass("jqhover");
            }, tempo / 2);
        }, tempo * i);
    } else if (endColour === "yellow") {
        setTimeout(function () {
            $("#yellow").delay(tempo * i).toggleClass("jqhover");
            yellowSound();
            setTimeout(function () {
                $("#yellow").toggleClass("jqhover");
            }, tempo / 2);
        }, tempo * i);
    } else {
        setTimeout(function () {
            $("#blue").toggleClass("jqhover");
            blueSound();
            setTimeout(function () {
                $("#blue").toggleClass("jqhover");
            }, tempo / 2);
        }, tempo * i);
    };
    console.log(possibleMoves[colour]);
    console.log(colour); 
    //  }, 500 * movesMade.indexOf(colour) + 1);
    };
};

$(".four-buttons").on("click", function () {
    playerMoves.push(possibleMoves.indexOf(this.id));
    var lastMove = playerMoves.length - 1;
    if (playerMoves.length == movesMade.length && playerMoves[lastMove] == movesMade[lastMove]) {
        totalClicks++;
        duration = (movesMade.length * tempo);
        document.getElementById("clickCounter").innerHTML = totalClicks;
        $("#playing").fadeOut(500).delay(duration + 1000).fadeIn(1500);
        $("#waiting").fadeIn(1500).delay(duration).fadeOut(500);
        randomise();
        setTimeout(function () {
            computerTurn();
        }, 1000);
    } else if (playerMoves[lastMove] == movesMade[lastMove]) {
        totalClicks++;
        document.getElementById("clickCounter").innerHTML = totalClicks;
    } else if (playerMoves[lastMove] !== movesMade[lastMove] && totalClicks == 0) {
        $("#gameOver").modal();
        document.getElementById("gameOverModal").innerHTML = "Unlucky! You got " + totalClicks + "! Try again and maybe this time you can try and get at least " + (totalClicks + 1) + "?!";
        clearGame();
    } else {
        $("#gameOver").modal();
        document.getElementById("gameOverModal").innerHTML = "Congratulations! You got " + totalClicks + "! Try again and maybe this time you can get " + (totalClicks + 1) + "!";
        clearGame();
    };
    console.log(playerMoves);
});

    //Clears the current game and resets the clicker to 0
    function clearGame() {
        $("li").fadeOut(1500);
        $(".clicker").fadeOut(1500);
        $("#levelNo").fadeOut(1500);
        $("#start-game").delay(1500).fadeIn(1500, 0);
        totalClicks = 0;
        document.getElementById("clickCounter").innerHTML = totalClicks;
        movesMade = [];
        playerMoves = [];
        return;
    };


    //reset button tied to clearGame function
    $("#reset").on("click", clearGame);

    //Toggle the light up function when clicked
    $("li").on("mousedown touchstart", function () {
        $(this).addClass("jqhover");
    }).on("mouseup touchend", function () {
        $(this).removeClass("jqhover");
    }).on("mouseout", function () {
        $(this).removeClass("jqhover");
    });


    $(".four-buttons").on("click", function () {
        if (this.id == "red") {
            redSound();
        } else if (this.id == "blue") {
            blueSound();
        } else if (this.id == "green") {
            greenSound();
        } else if (this.id == "yellow") {
            yellowSound();
        };
    });