'use strict';

$(function(){
    console.log("test");
    var divBtn1 = $('#btn1');
    var divBtn2 = $('#btn2');
    var divBtn3 = $('#btn3');
    var divBtn4 = $('#btn4');
    
    
    
    var divBox1 = $('#box1');
    
    divBtn1.on('click', function () {
        divBox1.removeClass();
        divBox1.addClass('box_red');
    });
    
    divBtn2.on('click', function () {
        divBox1.removeClass();
        divBox1.addClass('box_green');
    });
    
    divBtn3.on('click', function () {
        divBox1.removeClass();
        divBox1.addClass('box_blue');
    });
    
    divBtn4.on('click', function () {
        divBox1.removeClass();
        divBox1.addClass('box_black');
    });
    
});
