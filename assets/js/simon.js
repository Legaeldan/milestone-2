$(document).ready( function() {
    $("#game-title").fadeTo(2000, 1);
    $("#start-game").delay(1500).fadeTo(2000, 1);

    $("#start-game").on("click", function () {
        $(this).fadeOut(1500, 0);
        $("li:hidden").delay(1500).fadeIn(1500);
    });
    $("li").on("click", function () {
        $(this).toggleClass("jqhover");
    });

});



