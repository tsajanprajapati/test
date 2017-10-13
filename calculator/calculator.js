'use strict';

$(function(){
    // 
    var row1data = ['7', '8', '9', '.', '+/-', 'BS', 'CE', 'AC'];
    var row2data = ['4', '5', '6', '0', '+', '-', '*', '/'];
    var row3data = ['1', '2', '3', '000', '='];
    
    var $r1c = [];
    var $r2c = [];
    var $r3c = [];
    
    var $divCalcPos = $("#calc");
    
    var $row1 = $("<div>", { "id": "row1", "class": "row1"});
    // $divSample1.text('7');

    var $row2 = $("<div>", { "id": "row2", "class": "row2"});
    // $divSample2.text('8');
    
    var $row3 = $("<div>", { "id": "row3", "class": "row3"});
    // $divSample3.text('9');

    $divCalcPos.append($row1);
    $divCalcPos.append($row2);
    $divCalcPos.append($row3);
    
    for (var i = 0; i < 8; i++){
        $r1c[i] = $("<button>", {"id": "r1c"+i, "class" : "r1c"+i});
        $r1c[i].text(row1data[i]);
        
        $row1.append($r1c[i]);
    }
    
     for (var i = 0; i < 8; i++){
        $r2c[i] = $("<button>", {"id": "r2c"+i, "class" : "r2c"+i});
        $r2c[i].text(row2data[i]);
        
        $row2.append($r2c[i]);
    }
    
     for (var i = 0; i < 5; i++){
        $r3c[i] = $("<button>", {"id": "r3c"+i, "class" : "r3c"+i});
        $r3c[i].text(row3data[i]);
        $row3.append($r3c[i]);
    }



    var $divDisplay1 = $("<div>", { "id": "display1", "class": "display1"});
    $divDisplay1.text('');
    $divCalcPos.append($divDisplay1);
    var msg = '';
    
    for (var i = 0; i < 4; i++){
        $r1c[i].on('click', function(e) {
            var aaa = this;
            msg += aaa.textContent;
            $divDisplay1.text(msg);
        });
    }
    
    for (var i = 0; i < 8; i++){
      
        $r2c[i].on('click', function(e) {
            var aaa = this;
            msg += aaa.textContent;
            $divDisplay1.text(msg);
        });
    }
    
    for (var i = 0; i < 4; i++){
        $r3c[i].on('click', function(e) {
            var aaa = this;
            msg += aaa.textContent;
            $divDisplay1.text(msg);
        });
    }
    
    $r1c[7].on('click', function(e) {
        msg = '';
        $divDisplay1.text(msg);
    });
    
    $r1c[5].on('click', function(e) {
        msg = msg.slice(0, -1);
        $divDisplay1.text(msg);
    });
    
    $r3c[4].on('click', function(e) {
        
        try {
            eval(msg); 
        } catch (e) {
            if (e instanceof SyntaxError) {
                msg = "syntax error";
                $divDisplay1.text(msg);
                msg = ""; 
                return;
            }
            else {
                throw(e);
            }
        }
        var ans = eval(msg);
        msg = ans.toString();
        $divDisplay1.text(msg);
    });
    
    $r1c[6].on('click', function(e) {
        do{
            msg = msg.slice(0, -1);
        }
        while (!isNaN(parseInt(msg.slice(-1))) | msg.slice(-1) == '.')
        $divDisplay1.text(msg);
    });
    
    $r1c[4].on('click', function(e) {
       var ans = eval(msg);
       ans = ans * (-1);
       msg = ans.toString();
        $divDisplay1.text(msg);
    });

    
});