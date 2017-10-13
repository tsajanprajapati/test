'use strict';

$(function(){
    var calcBtn = $('#calc');
    var paramBtn = $('#param');
    var clrBtn = $('#clear');
    var signBtn = $('#sign');
    var resultDsp = $('#result');
    
    paramBtn.on('click', function () {
        var num = Number(paramBtn.text())
        num += 1;
        paramBtn.text(num);
    });
    
    signBtn.on('click', function () {
        if (signBtn.text() == '+') {
            signBtn.text('-');
        }
        else {
            signBtn.text('+');
        }
    });
    
    calcBtn.on('click', function () {
        var num1 = Number(paramBtn.text())
        var result = 0;
        if (signBtn.text() == '+') {
            result = num1 * 3;
        }
        else {
            result = -(num1 * 3);
        }
        
        resultDsp.text(result);
    });
    
    clrBtn.on('click', function () {
       signBtn.text('+');
       paramBtn.text('0');
       resultDsp.text('0');
    });
});
