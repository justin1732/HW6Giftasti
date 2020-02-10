$(document).ready(function() {
    var characters= ["ichigo", "rukia", "renji", "orihime", "ishida"];

    function startButtons(){
        $("#bleach-buttons").empty();
        for (i = 0; i <characters.length; i++){
            $("#bleach-buttons").append ("<button class='btn btn-success' data-character=" + characters[i] + "'>" + characters[i] + "</button>");
        }
    }
    startButtons();

    $("#add-character").on("click", function() {
        event.preventDefault();
        var character = $("#bleach-input").val().trim();
        characters.push(character);
        startButtons();
        return;
    });
});