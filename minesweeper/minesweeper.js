'use strict';

$(function(){
    // 
    var $divMain = $("#mines");
    var $cell = [5,5];
    var BombPosX = [];
    var BombPosY = [];
    // var rand = 0;
    // Math.floor((Math.random() * 10) + 1);
    for (var i = 0; i < 3; i++) {
        BombPosX[i] = Math.floor(Math.random() * 4);
        BombPosY[i] = Math.floor(Math.random() * 4);
    }
    console.log(BombPosX);
    console.log(BombPosY);
    
    // $cell[0,0] = $("<div>", { "id": "box0", "class": "box0"});
    // $divMain.append($cell[0,0]);
    
    for (var i = 0; i<5; i++) {
        for (var j = 0; j<5; j++){
            $cell[i,j] = $("<div>", { "id": "box" + i + j, "class": "row" + i + " " + "column" + j });
            $divMain.append($cell[i,j]);
            $cell[i,j].on('click', function(e) {
                alert("test");
                $(this).css("background-color","blue");
            });
        } 
    }
    
    
    
});