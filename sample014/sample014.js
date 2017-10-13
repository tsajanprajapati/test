'use strict';

$(function(){
    var para1 = $('#param1');
    var para2 = $('#param2');
    var ope = $('#ope');
    
    var btn_calc = $('#result');
    var btn_clr = $('#clear');
    
    var opertrs = ['+','-','*','/'];
    
    var i = 0;
    ope.on('click', function () {
        i++;
        if (i > 3) {
            i = 0;
        }
        ope.text(opertrs[i]);
    });
    
    btn_calc.on('click', function () {
        let val1 = Number(para1.val());
        let val2 = Number(para2.val());
       
        var result = 0;
        if (ope.text() == '+') {
            result = val1 + val2;
        }
        else if (ope.text() == '-') {
            result = val1 - val2;
        }
        else if (ope.text() == '*') {
            result = val1 * val2;
        }
        else if (ope.text() == '/') {
            result = val1 / val2;
        }
        btn_calc.text(result);
    });
    
    btn_clr.on('click', function () {
        btn_calc.text('push to calculate!')
    });
    
    
});
