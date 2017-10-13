'use strict';
var num = [5, 20, 80, 18, 19, 25, 3, 55, 14, 8];
var max = num[0];
var min = num[0];

var disp = "";
disp = num[0];
for (var i = 1; i < num.length; i++) {
    disp = disp + "," + num[i];
}
console.log(disp);


for (var i = 1; i < num.length; i++) {
    if (max < num[i]) {
        max = num[i];
    }
    if (min > num[i]) {
        min = num[i];
    }
}

// 「min:X / max:X」

disp =  "「min:" + min + " / max:" + max + "」";
console.log(disp);