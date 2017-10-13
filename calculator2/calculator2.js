'use strict';

$(function(){
    var numberdata = ['7','8','9','.','4','5','6','0','1','2','3','000'];
    var functiondata = ['+/-', 'BS', 'CE', 'AC'];
    var operatordata = ['+', '-', '*', '/'];
    var equalData = '=';
    
    var $numberKeys = [];
    var $functionKeys = [];
    var $operatorKeys = [];
    var $equalKey;
    var currentNum = "";
    var displayExp = "";
    var number = [];
    var sign = [];
    var numCounter = 0;
    var signCounter = 1;
    
    
    
    // 
    var $divCalcPos = $("#calc");
    
    var $displayBar = $("<div>", { "id": "display", "class": "display"});
    $divCalcPos.append($displayBar);
    $displayBar.text("0");

    var $numbers = $("<div>", { "id": "number", "class": "number"});
    $divCalcPos.append($numbers);
    
    var $functions = $("<div>", { "id": "function", "class": "function"});
    $divCalcPos.append($functions);
    
    var $operations = $("<div>", { "id": "operation", "class": "operation"});
    $divCalcPos.append($operations);
    
    
    
    //for number keys
    for (var i = 0; i < 12; i++){
        // DOM
        $numberKeys[i] = $("<button>", {"id": "number"+ i, "class" : "number" +i});
        $numberKeys[i].text(numberdata[i]);
        $numbers.append($numberKeys[i]);

        //events for number keys
        $numberKeys[i].on('click', function(e) {
            var current = this;
            currentNum += current.textContent;
            displayExp += current.textContent;
            $displayBar.text(displayExp);
        });
    }
    
    
    //for operator keys
    for (var i = 0; i < 4; i++){
        //DOM
        $operatorKeys[i] = $("<button>", {"id": "operator"+i, "class" : "operator"+i});
        $operatorKeys[i].text(operatordata[i]);
        $operations.append($operatorKeys[i]);
        
        
        //event for operator keys
        $operatorKeys[i].on('click', function(e) {
            number[numCounter] = currentNum;
            currentNum = "";
            numCounter++;
            
            var current = this;
            sign[signCounter] = current.textContent;
            signCounter++;
            
            displayExp += current.textContent;
            $displayBar.text(displayExp);
        });
    }
    
    //for functionkeys
    for (var i = 0; i < 4; i++){
        $functionKeys[i] = $("<button>", {"id": "function"+i, "class" : "function"+i});
        $functionKeys[i].text(functiondata[i]);
        $functions.append($functionKeys[i]);
    }
    
    //for equal key
    $equalKey = $("<button>", {"id": "equal", "class" : "equal"});
    $equalKey.text(equalData);
    $divCalcPos.append($equalKey);
    
    
    //event for equal key
    $equalKey.on('click', function(e) {
        var stxChk = true;
        number[numCounter] = currentNum;
        number.forEach(function(element) {
            if (element == "") {
                stxChk = false
            }
        });
        
        if (stxChk == true) {
            var i = 1
            while (i < signCounter) {
                if (sign[i] == "/") {
                    var r = Number(number[i-1]) / Number(number[i]);
                    for(var j = i; j < numCounter; j++) {
                        number[j] = number[j+1];
                        sign[j] = sign[j+1];
                    }
                    number[i-1] = String(r);
                    number[numCounter] = "";
                    sign[signCounter] = "";
                    numCounter--;
                    signCounter--;
                    i = 0
                }
                else if (sign[i] == "*") {
                    var r = Number(number[i-1]) * Number(number[i]);
                    for(var j = i; j < numCounter; j++) {
                        number[j] = number[j+1];
                        sign[j] = sign[j+1];
                    }
                    number[i-1] = String(r);
                    number[numCounter] = "";
                    sign[signCounter] = "";
                    numCounter--;
                    signCounter--;
                    i = 0
                }
                i++;
            }
            
            var result = Number(number[0]);
            for (i = 1; i <= numCounter; i++) {
                if (sign[i] == "+") {
                    result = result + Number(number[i]);
                }
                else if (sign[i] == "-") {
                    result = result - Number(number[i]);
                }
            }
        
           
            displayExp = String(result);
            currentNum = String(result);
            $displayBar.text(displayExp);
            
            if (displayExp == "Infinity") {
                displayExp = "";
                currentNum = "";
            }
            
            signCounter = 1;
            numCounter = 0;
        }
        else {
            displayExp = "Syntax Error";
            $displayBar.text(displayExp);
            displayExp = "";
            currentNum = "";
            signCounter = 1;
            numCounter = 0;
            number = [];
            sign = [];
        }
    });
    
    
    //for AC button
    $functionKeys[3].on('click', function(e) {
        currentNum = "";
        displayExp = "";
        number = [];
        sign = [];
        numCounter = 0;
        signCounter = 1;
        $displayBar.text("0");
    });
    
    //for +/- button
    $functionKeys[0].on('click', function(e) {
        number[numCounter] = currentNum;
        var stxChk = true;
        number.forEach(function(element) {
            if (element == "") {
                stxChk = false
            }
        });
        
        if (stxChk == true) {
            var i = 1
            while (i < signCounter) {
                if (sign[i] == "/") {
                    var r = Number(number[i-1]) / Number(number[i]);
                    for(var j = i; j < numCounter; j++) {
                        number[j] = number[j+1];
                        sign[j] = sign[j+1];
                    }
                    number[i-1] = String(r);
                    number[numCounter] = "";
                    sign[signCounter] = "";
                    numCounter--;
                    signCounter--;
                    i = 0
                }
                else if (sign[i] == "*") {
                    var r = Number(number[i-1]) * Number(number[i]);
                    for(var j = i; j < numCounter; j++) {
                        number[j] = number[j+1];
                        sign[j] = sign[j+1];
                    }
                    number[i-1] = String(r);
                    number[numCounter] = "";
                    sign[signCounter] = "";
                    numCounter--;
                    signCounter--;
                    i = 0
                }
                i++;
            }
            
            var result = Number(number[0]);
            for (i = 1; i <= numCounter; i++) {
                if (sign[i] == "+") {
                    result = result + Number(number[i]);
                }
                else if (sign[i] == "-") {
                    result = result - Number(number[i]);
                }
            }
            result = result * (-1);
            $displayBar.text(result);
            displayExp = result;
            currentNum = result;
            
            signCounter = 1;
            numCounter = 0;
        }
        else {
            displayExp = "Syntax Error";
            $displayBar.text(displayExp);
            displayExp = "";
            currentNum = "";
            signCounter = 1;
            numCounter = 0;
            number = [];
            sign = [];
        }
        
    });
    
    //for BS button
    $functionKeys[1].on('click', function(e) {
        if (currentNum != "") {
            displayExp = displayExp.slice(0, -1);
            currentNum = currentNum.slice(0,-1);
        }
        else {
            displayExp = displayExp.slice(0, -1);
            signCounter--;
            sign.pop();
            numCounter--;
            currentNum = String(number[numCounter]);
            number.pop();
        }
        if (displayExp == "") {
            displayExp = "0";
        }
        $displayBar.text(displayExp);
    });
    
    
    //for CE button
    $functionKeys[2].on('click', function(e) {
        while (currentNum != "") {
            displayExp = displayExp.slice(0, -1);
            currentNum = currentNum.slice(0,-1);
        }
        if (displayExp == "") {
            displayExp = "0";
        }
        
        $displayBar.text(displayExp);
    });
    
    
    
    
    //events for keyboard
    // $("body").keyup(function(e) {
    //     //for backspace
    //     if(e.which == 8) {
    //         if (currentNum != "") {
    //             displayExp = displayExp.slice(0, -1);
    //             currentNum = currentNum.slice(0,-1);
    //         }
    //         else {
    //             displayExp = displayExp.slice(0, -1);
    //             signCounter--;
    //             sign.pop();
    //             numCounter--;
    //             currentNum = String(number[numCounter]);
    //             number.pop();
    //         }
    //         if (displayExp == "") {
    //             displayExp = "0";
    //         }
    //         $displayBar.text(displayExp);
    //     }
        
    //     //for operator keys
    //     if(e.which == 107 || e.which == 106|| e.which == 109|| e.which == 111) {
    //         number[numCounter] = currentNum;
    //         currentNum = "";
    //         numCounter++;
            
    //         var current = String.fromCharCode(e.which-64);
    //         sign[signCounter] = current;
    //         signCounter++;
            
    //         displayExp += current;
    //         $displayBar.text(displayExp);
    //     }
        
        
    //     // for equal(enter) key
    //     if (e.which == 13) {
    //          number[numCounter] = currentNum;
    //     var i = 1
    //     while (i < signCounter) {
    //         if (sign[i] == "/") {
    //             var r = Number(number[i-1]) / Number(number[i]);
    //             for(var j = i; j < numCounter; j++) {
    //                 number[j] = number[j+1];
    //                 sign[j] = sign[j+1];
    //             }
    //             number[i-1] = String(r);
    //             number[numCounter] = "";
    //             sign[signCounter] = "";
    //             numCounter--;
    //             signCounter--;
    //             i = 0
    //         }
    //         else if (sign[i] == "*") {
    //             var r = Number(number[i-1]) * Number(number[i]);
    //             for(var j = i; j < numCounter; j++) {
    //                 number[j] = number[j+1];
    //                 sign[j] = sign[j+1];
    //             }
    //             number[i-1] = String(r);
    //             number[numCounter] = "";
    //             sign[signCounter] = "";
    //             numCounter--;
    //             signCounter--;
    //             i = 0
    //         }
    //         i++;
    //     }
        
    //     var result = Number(number[0]);
    //     for (i = 1; i <= numCounter; i++) {
    //         if (sign[i] == "+") {
    //             result = result + Number(number[i]);
    //         }
    //         else if (sign[i] == "-") {
    //             result = result - Number(number[i]);
    //         }
    //     }
    
       
    //     displayExp = String(result);
    //     currentNum = String(result);
    //     $displayBar.text(displayExp);
        
    //     if (displayExp == "Infinity") {
    //         displayExp = "";
    //         currentNum = "";
    //     }
        
    //     signCounter = 1;
    //     numCounter = 0;
    //     }
    // });
    
    // //key press for numberkeys
    // $("body").keypress(function(e) {
    //     if(e.which >= 48 && e.which <= 57) {
    //         //events for number keys
    //         var current = String.fromCharCode(e.which);
    //         currentNum += current;
    //         displayExp += current;
    //         $displayBar.text(displayExp);
    //     }
    // });
});