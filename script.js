$(document).ready(function() {
    var characters= ["ichigo", "rukia", "renji", "orihime", "ishida"];

    function startButtons(){
        $("#bleach-buttons").empty();
        for (i = 0; i <characters.length; i++){
            $("#bleach-buttons").append ("<button class='btn btn-success' data-character=" + characters[i] + "'>" + characters[i] + "</button>");
        }
    }
    // function AddCharacter()
    // $("#add-character").on("click", function(){
    // var input = $("#bleach-input").val().trim();
    // form.reset();
    // characters.push(input);               
    // startButtons();
    // return false;
    // });

startButtons();

 $("button").on("click", function(){
    var character = $(this).attr("data-character");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=uGJ0zJY104cwyWUctL9j9dq8Gt0tyE4V&q=" + character

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){
        var results = response.data;
        $("#characters").empty();
        for (var i=0; i < results.length; i++) {
        var characterDiv = $("<div>");
        var p = $("<p>").text("Rating: " + results[i].rating);
        var characterImage = $("<img>");

        characterImage.attr("src", results[i].images.original_still.url);
        characterImage.attr("data-still", results[i].images.original_still.url);
        characterImage.attr("data-animate", results[i].images.original.url);
        characterImage.attr("data-state", "still");
        characterImage.attr("class", "gif");
        characterDiv.append(p);
        characterDiv.append(characterImage);
        $("#characters").append(characterDiv);
    }
    });
    });
    function moveGif(){
        var state = $(this).attr("data-state");
        var animateImage = $(this).attr("data-animate");
        var stillImage = $(this).attr("data-still");

        if (state == "still") {
            $(this).attr("src", animateImage)
            $(this).attr("data-state", "animate");
        }

        else if (state == "animate") {
            $(this).attr("src", stillImage);
            $(this).attr("data-state", "still");
        }
    }


    // $("#add-character").on("click", function() {
    //     event.preventDefault();
    //     var character = $("#bleach-input").val().trim();
    //     form.reset();
    //     characters.push(character);
    //     startButtons();
    //     return false;
    // });
    
$(document).on("click", ".gif", moveGif);
});
