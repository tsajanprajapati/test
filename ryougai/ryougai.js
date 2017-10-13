'use strict';
var amount = 1000;
var coins = [amount];
var tempCoins = [];
var num = amount/10;
var availableCoins = [500,100,50,10];
var eachNum = 0;
var disp = "";
var j = 0;
var i = 0;

console.log(amount);
while (coins.length < num) {
    i = coins.length - 1;
    while (coins[i] == 10) {
        i--;
    }
    
    if(coins[i] == 1000) {
        j = 0;
    }
    else if (coins[i] == 500) {
        j = 1;
    }
    else if (coins[i] == 100) {
        j = 2;
    }
    else if (coins[i] == 50) {
        j = 3;
    }
    
    eachNum = coins[i] / availableCoins[j];
    for (var k = 0; k < coins.length; k++) {
        if (k === i) {
            for (var l = 0; l < eachNum; l++) {
                tempCoins.push(availableCoins[j]);
            }
        }
        else {
            tempCoins.push(coins[k]);
        }
    }
    coins = tempCoins;
    tempCoins = [];
    disp = "";
    for (var m = 0; m < coins.length; m++) {
            disp = disp + "," + coins[m];
    }
    console.log(disp);
}