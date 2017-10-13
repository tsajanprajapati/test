'use strict';
var n = 20;
var m = 3;

var times = 0;
var usedMen = 0;
var half = 0;
var full =0;
var piecesNum = 0;

console.log(n);
var disp = ""
var smallPieces = [n];
var tempPieces = [];

while (smallPieces.length < n) {
    usedMen = 0;
    piecesNum = smallPieces.length;
    tempPieces = [];
    for (var i = 0; i < piecesNum; i++) {
        if (smallPieces[i] > 1){
            if (usedMen < m) {
                full = smallPieces[i];
                half = Math.floor(smallPieces[i]/2);
                smallPieces[i] = 0;
                tempPieces.push(half);
                tempPieces.push(full - half);
                usedMen++;
            }
            else {
                tempPieces.push(smallPieces[i]);
            }
        }
        else {
            tempPieces.push(smallPieces[i]);
        }
    }
    
    smallPieces = tempPieces;
    disp = "";
    for (var j = 0; j < smallPieces.length; j++) {
        
            disp = disp + "," + smallPieces[j];
    
    }
    console.log(disp);
    times++;
}
console.log(times);