'use strict';

$(function(){
    var divBtn1 = $('#btn1');
    var divBtn2 = $('#btn2');
    var divBtn3 = $('#btn3');

    divBtn1.on('click', function () {
        alert(divBtn1.text());
    });
    
    divBtn2.on('click', function () {
        // alert(divBtn2.text());
        divBtn2.text("happy");
    });
    divBtn3.on('click', function () {
        // alert(divBtn3.text());
        divBtn3.text("sad");
        divBtn1.text("angry");
    });
    
});
