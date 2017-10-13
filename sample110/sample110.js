'use strict';
var num = [5, 20, 80, 18, 19, 25, 3, 55, 14, 8];
var temp = 0;

// 1つ目、3つ目、4つ目、8つ目、9

var positions = [1,3,4,8,9];
var pos = ["「1st:" , "3rd:", "4th:", "8th:", "9th:"];

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


disp = "";
disp = num[0];
for (var i = 1; i < num.length; i++) {
    disp = disp + "," + num[i];
}
console.log(disp);

// 「1st:X, 3rd:X, 4th:X, 8th:X, 9th:X」
disp = pos[0] + num[positions[0]-1];
for (var i = 1; i < positions.length; i++) {
    disp += ", " + pos[i] +  num[positions[i]-1];
}
disp += "」";
console.log(disp);