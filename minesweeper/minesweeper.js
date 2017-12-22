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
    
    
    // console.log(BombPosX);
    // console.log(BombPosY);
    
   
   
   //create box objects
    var idx = 0;
    for (var i = 0; i<5; i++) {
        for (var j = 0; j<5; j++){
            cell[idx] = {
                box: $("<div>", { "id": i +','+ j, "class": "row" + i + " " + "column" + j }),
                clicked: false,
                cellX: i,
                cellY: j,
                Num: 0,
                bomb: false
            };
            if (cell[idx].Num != 0) {
                cell[idx].box.text(cell[idx].Num);
            }
            $divMain.append(cell[idx].box);
            idx++;
        } 
    }
    
    
    
    // console.log(cell[0]);
    // console.log(cell[1]);
    // console.log(cell[2]);
    
    
    //assign bombs
    for (var i=0; i<3; i++) {
        for (var j=0; j<cell.length; j++){
            if((cell[j].cellX == BombPosX[i]) && (cell[j].cellY == BombPosY[i])){
                cell[j].bomb = true;
               
            }
        }
    }
    
    
    
    //assign numbers
    for (var j=0; j<cell.length; j++){
        if (cell[j].bomb == true) {
                if((j-6) >= 0){
                    if ((cell[j].cellX-cell[j-6].cellX)==1){
                        
                        cell[j-6].Num++;
                    }
                }
                if((j-5) >= 0){
                        cell[j-5].Num++;
                }
                if((j-4) >= 0){
                    if (cell[j-4].cellX != cell[j].cellX){
                        cell[j-4].Num++;
                    }
                }
                if((j-1) >= 0){
                    if (cell[j-1].cellX == cell[j].cellX){
                        cell[j-1].Num++;
                    }
                }
                if((j+1) <= 24){
                    if (cell[j+1].cellX == cell[j].cellX){
                        cell[j+1].Num++;
                    }
                }
                if((j+4) <= 24){
                    if (cell[j+4].cellX != cell[j].cellX){
                        cell[j+4].Num++;
                    }
                }
                if((j+5) <= 24){
                    cell[j+5].Num++;
                }
                if((j+6) <= 24){
                    if ((cell[j+6].cellX-cell[j].cellX)==1){
                        cell[j+6].Num++;
                    }
                }
        }
    }

    
    
    //function for cell clicked
    function createCallback( i ){
        return function(){
            // console.log('you clicked cell' + i);
            // console.log(cell[i].cellX,cell[i].cellY);
            cellOpen(i);
        }
    }
    
    //function for cell open
    function cellOpen(i) {
        if (cell[i].clicked == false) {
            cell[i].clicked = true;
            if(cell[i].bomb == true) {
                bombClicked(i);
            }
            else {
                if (cell[i].Num != 0) {
                    cell[i].box.text(cell[i].Num);
                }   
                cell[i].box.css("background-color","blue");
                if (cell[i].Num == 0) {
                    emptyClicked(i);
                }
            }
        }
    }
    
    
    //click event
    $(document).ready(function(){
        for(var i = 0; i < cell.length; i++) {
            (cell[i].box).click( createCallback( i ) );
        }
    });
    
    
    function bombClicked(i){
        for(var j=0;j<25; j++) {
            cell[j].clicked = true;
            if (cell[j].bomb == true) {
                cell[j].box.css("background-color","red");
            }
        }
        alert('Game Over');
    }
    
    
    //when empty cell is clicked
    function emptyClicked(j) {
        console.log('empty clicked');
        if((j-6) >= 0){
            if ((cell[j].cellX-cell[j-6].cellX)==1){
                console.log(j-6);
                cellOpen(j-6);
            }
        }
        if((j-5) >= 0){
            console.log(j-5);
            cellOpen(j-5);
        }
        if((j-4) >= 0){
            if (cell[j-4].cellX != cell[j].cellX){
                console.log(j-4);
                cellOpen(j-4);
            }
        }
        if((j-1) >= 0){
            if (cell[j-1].cellX == cell[j].cellX){
                console.log(j-1);
                cellOpen(j-1);
            }
        }
        if((j+1) <= 24){
            if (cell[j+1].cellX == cell[j].cellX){
                console.log(j+1);
                cellOpen(j+1);
            }
        }
        if((j+4) <= 24){
            if (cell[j+4].cellX != cell[j].cellX){
                console.log(j+4);
                cellOpen(j+4);
            }
        }
        if((j+5) <= 24){
            console.log(j+5);
            cellOpen(j+5);
        }
        if((j+6) <= 24){
            if ((cell[j+6].cellX-cell[j].cellX)==1){
                console.log(j+6);
                cellOpen(j+6);
            }
        }
    }
    
    
});