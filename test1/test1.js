'use strict';

$(function(){
    var divBtn1 = $('#btn1');
    var divBtn2 = $('#btn2');
    var divBtn3 = $('#btn3');
    
    var divBox1 = $('#box');
    
    divBtn1.on('click', function () {
        divBox1.removeClass();
        divBox1.addClass('box1');
    });
    
    divBtn2.on('click', function () {
        divBox1.removeClass();
        divBox1.addClass('box2');
    });
    
    divBtn3.on('click', function () {
        divBox1.removeClass();
        divBox1.addClass('box3');
    });
});
