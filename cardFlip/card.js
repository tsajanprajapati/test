'use strict';
var pos = 2;
var dispSet = [];
var check = false;

for (var i = 2; i <= 100; i +=2) {
    dispSet.push(i);
}
var disp = "";
for (var i = 0; i < dispSet.length; i++) {
    disp = disp + "," + dispSet[i];
}
console.log(disp);

for (var index = 3; index <= 100; index++) {
    for (var j = index; j <= 100; j += index) {
        var k = 0;
        check = false;
        do {
            if (dispSet[k] == j) {
                dispSet.splice(k,1);
                check = true;
            }
            k++;
        } while(k <= dispSet.length);
        if (check == false) {
            k = 0;
            while (dispSet[k] <= j) {
                k++;
            }
            dispSet.splice(k,0,j);
        }
    }
    
    var disp = "";
    for (var i = 0; i < dispSet.length; i++) {
        disp = disp + "," + dispSet[i];
    }
    console.log(disp);
}


