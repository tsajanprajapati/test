'use strict';

var a = 0;
var b = 0;
var sum = 0;
sum = a + b;
while (sum <= 50) {
    console.log(a + " + " + b +" = " + sum );
    a = sum;
    b++;
    sum = a + b;
}