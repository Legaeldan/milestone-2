var totalClicks = 0;


$(document).ready( function() {
    $("#game-title").fadeTo(2000, 1);
    $("#start-game").delay(1500).fadeTo(2000, 1);

    $("#start-game").on("click", function () {
        $(this).fadeOut(1500, 0);
        $("li:hidden").delay(1500).fadeIn(1500);
    });
    $("li").on("mousedown", function () {
        $(this).toggleClass("jqhover");
    }).on("mouseup", function () {
        $(this).toggleClass("jqhover");
    })

    $(".four-buttons").on("click", function () {
        totalClicks++;
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



