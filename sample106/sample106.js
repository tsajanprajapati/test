'use strict';

var rem = 0;
var char = "A";
for (var i = 1; i <= 50; i++){
    rem = i % 7;
    char = String.fromCharCode(65 + rem);
    console.log (i + "/7のあまりが "+rem+" → "+ char);
}