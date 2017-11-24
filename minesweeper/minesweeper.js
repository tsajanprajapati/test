'use strict';

$(function(){
    // 
    var $divMain = $("#mines");
    var cell = [];
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
    var idx = 0;
    for (var i = 0; i<5; i++) {
        for (var j = 0; j<5; j++){
            // $cell[i,j] = $("<div>", { "id": i +','+ j, "class": "row" + i + " " + "column" + j });
            // $divMain.append($cell[i,j]);
            // $cell[i,j].on('click', function(e) {
            //     $(this).css("background-color","blue");
            //     btnClicked(this.id);
            // });
            
            cell[idx] = {
                box: $("<div>", { "id": i +','+ j, "class": "row" + i + " " + "column" + j }),
                clicked: false,
                cellX: i,
                cellY: j
            };
            
            $divMain.append(cell[idx].box);
            // ($cell[i,j].box).on('click', function(e) {
            //     $(this).css("background-color","blue");
            //     console.log($cell[i,j].cellX, $cell[i,j].cellY);
            // });
            idx++;
        } 
    }
    
    console.log(cell[0]);
    console.log(cell[1]);
    console.log(cell[2]);
    
    // ($cell[0,0].box).on('click', function(e) {
    //             $(this).css("background-color","blue");
    // });
    
    
    // function btnClicked(btnId) {
    //     console.log(btnId);
    //     console.log(btnId.slice(-1));
    //     console.log(btnId.slice(-2));
    // }
    
    
});