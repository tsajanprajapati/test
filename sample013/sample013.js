'use strict';

$(function(){
    var divBtn1 = $('#btn1');
    var divBtn2 = $('#btn2');
    var divBtn3 = $('#btn3');
    
    var disp1 = $('#display1');
    var disp2 = $('#display2');

    divBtn1.on('click', function () {
    });
    
    divBtn2.on('click', function () {
    });
    
    divBtn3.on('click', function () {
        disp1.text(Number(divBtn1.text())+Number(divBtn2.text()));
        disp2.text(divBtn1.text() + divBtn2.text());
    });
});
