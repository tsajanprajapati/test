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
    
   
    var idx = 0;
    for (var i = 0; i<5; i++) {
        for (var j = 0; j<5; j++){
            cell[idx] = {
                box: $("<div>", { "id": i +','+ j, "class": "row" + i + " " + "column" + j }),
                clicked: false,
                cellX: i,
                cellY: j
            };
            
            $divMain.append(cell[idx].box);
            idx++;
        } 
    }
    
    console.log(cell[0]);
    console.log(cell[1]);
    console.log(cell[2]);

    
    function createCallback( i ){
        return function(){
            console.log('you clicked cell' + i);
            cell[i].clicked = true;
            for (var bChk = 0; bChk < 3; bChk++) {
                if ((cell[i].cellX == BombPosX[bChk])&&(cell[i].cellY == BombPosY[bChk])) {
                    cell[i].box.css("background-color","red");
                    break;
                }
                else {
                    cell[i].box.css("background-color","blue");
                }
            }
           
            
        }
    }
    
    $(document).ready(function(){
        for(var i = 0; i < cell.length; i++) {
            (cell[i].box).click( createCallback( i ) );
        }
    });
    
    
});