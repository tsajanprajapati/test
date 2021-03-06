'use strict';
$(function(){
    var rows = 9;
    var columns = 9;
    var cellNUms = rows * columns;
    var bombNums = 10;
    var $divMain = $("#mines");
    var bombCnt = 0;
    var level = 1;
    var $gameSet = $("#gameSet");
    var cell = [];
    var BombPosX = [];
    var BombPosY = [];
    var overlapChk = false;
    
    mainGame();
    function mainGame() {
        $("#dialouge").css("visibility","hidden");
        bombCnt = 0;
        for (var i = 0; i < bombNums; i++) {
            do {
                BombPosX[i] = Math.floor(Math.random() * (rows-1));
                BombPosY[i] = Math.floor(Math.random() * (columns-1));
                overlapChk = false;
                for (var j = 0; j < i; j++) {
                    if ((BombPosX[i] == BombPosX[j])&&(BombPosY[i] == BombPosY[j])) {
                        overlapChk = true;
                    }
                }
            }while(overlapChk == true);
        }
       //create box objects
        var idx = 0;
        for (var i = 0; i<rows; i++) {
            for (var j = 0; j<columns; j++){
                cell[idx] = {
                    box: $("<div>", { "id": i +'_'+ j, "class": "row" + i + " " + "column" + j }),
                    clicked: false,
                    cellX: i,
                    cellY: j,
                    Num: 0,
                    bomb: false,
                    flag: false
                };
                if (cell[idx].Num != 0) {
                    cell[idx].box.text(cell[idx].Num);
                }
                $divMain.append(cell[idx].box);
                idx++;
            } 
        }
        //css part
        $divMain.css({
            "height": (30*rows)+(5*(rows+1)) + "px",
            "width": (30*columns)+(5*(columns+1)) + "px",
        });
        for (var i=0; i<rows; i++) {
            $(".row" + i).css({
                "position":"absolute",
                "top":((i*30)+((i+1)*5))+"px"
            });
        }
        for (var i=0; i<columns; i++) {
            $(".column" + i).css({
                "position":"absolute",
                "left":((i*30)+((i+1)*5))+"px"
            });
        }
        //assign bombs
        for (var i=0; i<bombNums; i++) {
            for (var j=0; j<cell.length; j++){
                if((cell[j].cellX == BombPosX[i]) && (cell[j].cellY == BombPosY[i])){
                    cell[j].bomb = true;
                }
            }
        }
        for(var i = 0; i< cell.length; i++) {
            if (cell[i].bomb == true){
                bombCnt++;
            }
        }
        //assign numbers
        for (var j=0; j<cell.length; j++){
            if (cell[j].bomb == true) {
                if((j-(columns+1)) >= 0){
                    if ((cell[j].cellX-cell[j-(columns+1)].cellX)==1){
                        cell[j-(columns+1)].Num++;
                    }
                }
                if((j-columns) >= 0){
                        cell[j-columns].Num++;
                }
                if((j-(columns-1)) >= 0){
                    if (cell[j-(columns-1)].cellX != cell[j].cellX){
                        cell[j-(columns-1)].Num++;
                    }
                }
                if((j-1) >= 0){
                    if (cell[j-1].cellX == cell[j].cellX){
                        cell[j-1].Num++;
                    }
                }
                if((j+1) < cellNUms){
                    if (cell[j+1].cellX == cell[j].cellX){
                        cell[j+1].Num++;
                    }
                }
                if((j+(columns-1)) <cellNUms){
                    if (cell[j+(columns-1)].cellX != cell[j].cellX){
                        cell[j+(columns-1)].Num++;
                    }
                }
                if((j+columns) <cellNUms){
                    cell[j+columns].Num++;
                }
                if((j+(columns+1)) <cellNUms){
                    if ((cell[j+(columns+1)].cellX-cell[j].cellX)==1){
                        cell[j+(columns+1)].Num++;
                    }
                }
            }
        }
        
        //click event
        $(document).ready(function(){
            for(var i = 0; i < cell.length; i++) {
                (cell[i].box).click(leftClicked(i));
            }
        });
        
        //function for cell clicked
        function leftClicked(i){
            return function(){
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
            resultChk();
        }
        //function for result check
        function resultChk() {
            var allClicked = true;
            var win = true;
            for (var i=0; i < cell.length; i++) {
                if (cell[i].clicked == false) {
                    allClicked = false;
                }
            }
            for (var i=0; i < cell.length; i++) {
                if (cell[i].bomb != cell[i].flag) {
                    win = false;
                }
            }
            if (win && allClicked) {
                $("#msg").text("You won the game.");
                $("#dialouge").css("visibility","visible");
            }
        }
        //bomb clicked
        function bombClicked(i){
            for(var j=0;j<cellNUms; j++) {
                cell[j].clicked = true;
                if (cell[j].bomb == true) {
                    cell[j].box.css("background-color","red");
                }
            }
            // alert('Game Over');
            $("#msg").text("You lost the game.");
            $("#dialouge").css("visibility","visible");
        }
        //when empty cell is clicked
        function emptyClicked(j) {
            console.log('empty clicked');
            if((j-(columns+1)) >= 0){
                if ((cell[j].cellX-cell[j-(columns+1)].cellX)==1){
                    console.log(j-(columns+1));
                    cellOpen(j-(columns+1));
                }
            }
            if((j-columns) >= 0){
                console.log(j-columns);
                cellOpen(j-columns);
            }
            if((j-(columns-1)) >= 0){
                if (cell[j-(columns-1)].cellX != cell[j].cellX){
                    console.log(j-(columns-1));
                    cellOpen(j-(columns-1));
                }
            }
            if((j-1) >= 0){
                if (cell[j-1].cellX == cell[j].cellX){
                    console.log(j-1);
                    cellOpen(j-1);
                }
            }
            if((j+1) < cellNUms){
                if (cell[j+1].cellX == cell[j].cellX){
                    console.log(j+1);
                    cellOpen(j+1);
                }
            }
            if((j+(columns-1)) < cellNUms){
                if (cell[j+(columns-1)].cellX != cell[j].cellX){
                    console.log(j+(columns-1));
                    cellOpen(j+(columns-1));
                }
            }
            if((j+columns) < cellNUms){
                console.log(j+columns);
                cellOpen(j+columns);
            }
            if((j+(columns+1)) <cellNUms){
                if ((cell[j+(columns+1)].cellX-cell[j].cellX)==1){
                    console.log(j+(columns+1));
                    cellOpen(j+(columns+1));
                }
            }
        }
    
        //rightclick event
        $(document).ready(function(){
            for(var i = 0; i < cell.length; i++) {
                (cell[i].box).contextmenu(rightClicked(i));
            }
        });
        //function for cell right clicked
        function rightClicked( i ) {
            return function(){
                if (!cell[i].clicked || cell[i].flag){
                    if (!cell[i].flag){
                        cell[i].box.css("background-color","yellow");
                        cell[i].flag = true;
                        cell[i].clicked = true;
                        resultChk();
                    }
                    else {
                        cell[i].box.css("background-color","#7e8b8c");
                        cell[i].flag = false;
                        cell[i].clicked = false;
                    }
                }
                return false;
            }
        }
        
        
    } 

    //game set part
    $gameSet.submit(function(){
        var $inputs = $('#gameSet :input');
        var values = {};
        $inputs.each(function() {
            values[this.name] = $(this).val();
        });
        // console.log(level);
        console.log(values['height']);
        if (level == 1) {
            rows = 9;
            columns = 9;
            cellNUms = rows * columns;
            bombNums = 10;
            cell = [];
            BombPosX = [];
            BombPosY = [];
        }
        else if (level == 2) {
            rows = 16;
            columns = 16;
            cellNUms = rows * columns;
            bombNums = 40;
            cell = [];
            BombPosX = [];
            BombPosY = [];
        }
        else if (level == 3) {
            rows = 16;
            columns = 30;
            cellNUms = rows * columns;
            bombNums = 99;
            cell = [];
            BombPosX = [];
            BombPosY = [];
        }
        else if (level == 4) {
            rows = Number(values['height']);
            columns = Number(values['width']);
            cellNUms = rows * columns;
            bombNums = Number(values['mines']);
            cell = [];
            BombPosX = [];
            BombPosY = [];
        }
        $divMain.empty();
        mainGame();
        event.preventDefault();
    });
    
    
    $('#gameSet input').on('change', function() {
        level = $('input[name=level]:checked', '#gameSet').val();
        
        if (level == 4) {
            $(".custom").removeAttr("disabled");
            
        }
        else {
            $(".custom").attr("disabled", "disabled");
            $(".custom").val("");
        }
        console.log(level);
    });
    
    $( "#againBtn" ).click(function() {
        $divMain.empty();
        document.newGame.submit();
        // mainGame();
    });

});