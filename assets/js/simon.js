//Document ready function to fade in title and start
$(document).ready(function () {
    $("#game-title").fadeIn(2000);
    $("#start-game").delay(1500).fadeIn(2000);
});

const possibleMoves = ['red', 'green', 'yellow', 'blue'];
//var possibleMoves = $("#simon-main li");
var movesMade = [];
var playerMoves = [];
var gameState = "waiting...";
var moveNumber;
var randomNum = 0;

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

//Maintains and prints the total clicks
var totalClicks = 0;
$(".four-buttons").on("click", function clicked() {
    totalClicks++;
    document.getElementById("clickCounter").innerHTML = totalClicks;
});


//plays each iteration in array, but sound causes break
function computerTurn() {
    var arrayLength = movesMade.length;
    for (let i = 0; i < arrayLength; i++) {
        var colour = movesMade[i];
        var endColour = possibleMoves[colour];
   // setTimeout(function() {
    if (endColour === "red") {
            setTimeout(function() {
            $("#red").delay(1000 * i).toggleClass("jqhover");
        redSound();
        setTimeout(function() {
            $("#red").toggleClass("jqhover");
         }, 500);
            },1000 * i);
     } else if (endColour === "green") {
        setTimeout(function() {
        $("#green").delay(1000 * i).toggleClass("jqhover");
        greenSound();
        setTimeout(function() {
            $("#green").toggleClass("jqhover");
         }, 500);
        }, 1000 * i);
     } else if (endColour === "yellow") {
        setTimeout(function() {
        $("#yellow").delay(1000 * i).toggleClass("jqhover");
       yellowSound();
        setTimeout(function() {
            $("#yellow").toggleClass("jqhover");
         }, 500);
        }, 1000 * i);
     } else {
        setTimeout(function() {
        $("#blue").toggleClass("jqhover");
       blueSound();
        setTimeout(function() {
            $("#blue").toggleClass("jqhover");
         }, 500);
        }, 1000 * i);
     };
    console.log(possibleMoves[colour]);
    console.log(colour); 
    //  }, 500 * movesMade.indexOf(colour) + 1);
    };
    playerTurn();
};

function clicked(clickedID) {
    playerMoves.indexOf(clickedID);
    console.log(playerMoves.indexOf(clickedID));
    console.log(clickedID);
}

function playerTurn() {
    var arrayLength = movesMade.length;
    for (let i = 0; i < arrayLength; i++) {
        var colour = movesMade[i];
        var endColour = possibleMoves[colour];
        $(".four-buttons").onclick = function(){
            $(this).getElementById();
            console.log(id);
        };
};
};

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
    $("li").on("mousedown", function () {
        $(this).toggleClass("jqhover");
    }).on("mouseup", function () {
        $(this).toggleClass("jqhover");
    });



    $("#red").click(function() {
        redSound();
    });
    $("#green").click(function() {
        greenSound();
    });
    $("#yellow").click(function() {
        yellowSound();
    });
    $("#blue").click(function() {
        blueSound();
    });