
$(document).ready( function() {
    $("#game-title").fadeTo(2000, 1);
    $("#start-game").delay(1500).fadeTo(2000, 1);

    $("#start-game").on("click", function () {
        $(this).fadeTo(1500, 0);
    });
    

});



