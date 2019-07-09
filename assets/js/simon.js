var totalClicks = 0;
$(".four-buttons").on("click", function clicked() {
    totalClicks++;
    document.getElementById("clickCounter").innerHTML = totalClicks;
})

function clearGame() {
    totalClicks = 0;
    document.getElementById("clickCounter").innerHTML = totalClicks;
    return;
};

$(document).ready( function() {
    $("#game-title").fadeTo(2000, 1);
    $("#start-game").delay(1500).fadeTo(2000, 1);
    

    $("#start-game").on("click", function () {
        $(this).fadeOut(1500, 0);
        $("li:hidden").delay(1500).fadeIn(1500);
        $(".clicker").delay(1500).fadeIn(1500);
    });

    //Game reset or New game
    
    $("li").on("mousedown", function () {
        $(this).toggleClass("jqhover");
    }).on("mouseup", function () {
        $(this).toggleClass("jqhover");
    })
 
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


});


