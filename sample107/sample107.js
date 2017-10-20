'use strict';
var result = "";
for (var i = 1; i<= 60; i++) {
    result = "";
    if (i % 3 == 0) {
        result += "Fizz";
    }
    if (i % 5 == 0) {
        result += "Buzz";
    }
    if (result == "") {
        result = i;
    }
    
    console.log(i + "----->" + result);
}