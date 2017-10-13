'use strict';
var num = [5, 20, 80, 18, 19, 25, 3, 55, 14, 8];
var temp = 0;

var disp = "";
disp = num[0];
for (var i = 1; i < num.length; i++) {
    disp = disp + "," + num[i];
}
console.log(disp);

for (var i = 0; i < (num.length - 1); i++) {
    for (var j = i + 1; j < num.length; j++) {
        if (num[i] > num[j]) {
            temp = num[j];
            num[j] = num[i];
            num[i] = temp;
        }
    }
}
disp = "「"+num[0];
for (var i = 1; i < num.length; i++) {
    disp = disp + "," + num[i];
}
disp += "」";
console.log(disp);