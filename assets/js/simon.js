$(document).ready( function() {
    $("#game-title").fadeIn(2000);
    $("#start-game").delay(1500).fadeIn(2000);
    
});

//Brings start button and title into view
$("#start-game").on("click", function () {
    $(this).fadeOut(1500, 0);
    $("li").delay(1500).fadeIn(1500);
    $(".clicker").delay(1500).fadeIn(1500);
});

//Maintains and prints the total clicks
var totalClicks = 0;
$(".four-buttons").on("click", function clicked() {
    totalClicks++;
    document.getElementById("clickCounter").innerHTML = totalClicks;
})


//Clears the current game and resets the clicker to 0
function clearGame() {
    $("li").fadeOut(1500);
    $(".clicker").fadeOut(1500);
    $("#start-game").delay(1500).fadeIn(1500, 0);
    totalClicks = 0;
    document.getElementById("clickCounter").innerHTML = totalClicks;
    return;
};

$("#reset").on("click", clearGame);

//Toggle the light up function when clicked
$("li").on("mousedown", function () {
    $(this).toggleClass("jqhover");
}).on("mouseup", function () {
    $(this).toggleClass("jqhover");
});

    //sound files defined below
    var simonSound = document.createElement("audio");
    simonSound.volume = 1;

    $(".red-circle").click(function () {
        simonSound.src = "assets/sounds/simonSound1.mp3";
        simonSound.play();
    });

    $(".green-circle").click(function () {
        simonSound.src = "assets/sounds/simonSound2.mp3";
        simonSound.play();
    });
    $(".yellow-circle").click(function () {
        simonSound.src = "assets/sounds/simonSound3.mp3";
        simonSound.play();
    });
    $(".blue-circle").click(function () {
        simonSound.src = "assets/sounds/simonSound4.mp3";
        simonSound.play();
    });

