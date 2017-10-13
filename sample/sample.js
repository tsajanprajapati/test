'use strict';

$(function(){

    // ---------------------------
    // DOM
    // ---------------------------
    var divBase = $("#base");

    var divButton = $("<div>", { "id": "button", "class": "button"});
    divButton.text('CHANGE COLOR!');

    divBase.append(divButton);
    var clickCounter = 0;
    var clickColor = 0;
    // ---------------------------
    // EVENT
    // ---------------------------
    divButton.on('click', function(){
        clickCounter++;
        clickColor++;
        divButton.text(clickCounter);
        
        
        //by using clickColor variable
        // if (clickColor == 1) {
        // divButton.css({"background-color": "#0000ff"});
        // }
        // else if (clickColor == 2) {
        //     divButton.css({"background-color": "#00ff00"});
        // }
        // else if (clickColor == 3) {
        //     divButton.css({"background-color": "#ff0000"});
        //     clickColor = 0;
        // }
        
        // alert((divButton).css("background-color"));
         
         
        //checking the condition of backgroundcolor
        // if ((divButton).css("background-color") == "rgb(255, 0, 0)" ) {
        //     divButton.css({"background-color": "#0000ff"});
        // }
        // else if ((divButton).css("background-color") == "rgb(0, 0, 255)" ) {
        //     divButton.css({"background-color": "#00ff00"});
        // } else if ((divButton).css("background-color") == "rgb(0, 255, 0)" ) {
        //     divButton.css({"background-color": "#ff0000"});
        // }
        
        
        
        //to shrink the size
        divButton.css({"width": "100px"});
        divButton.css({"height": "100px"});
        
    });
});