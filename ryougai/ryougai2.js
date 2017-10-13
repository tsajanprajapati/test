'use strict';
var remHun = 0;
var remFif = 0;
var remTen = 0;
var amount = 1000;
console.log(amount);
var coins = [];
var i = 0;
var disp = "";
for (var fHun = 2; fHun >= 0; fHun--) {
    for (i = 0; i < coins.length; i++) {
        if (coins[i] == 500) {
            coins.splice(i,1);
        }
    }
    for (i = 0 ; i < fHun; i++) {
        coins.push(500);
    }
    // console.log(coins);
    remHun = 1000 - (fHun * 500);
    remHun = remHun / 100;
    for (var hun = remHun; hun >= 0; hun--) {
        for (i = 0; i < coins.length; i++) {
            if (coins[i] === 100) {
                coins.splice(i,1);
            }
        }
        for (i = 0 ; i < hun; i++) {
            coins.push(100);
        }
        remFif = 1000 - (fHun * 500 + remHun * 100);
        remFif = remFif / 50;
        for (var fifty = remFif; fifty >= 0; fifty--) {
            for (i = 0; i < coins.length; i++) {
                if (coins[i] === 50) {
                    coins.splice(i,1);
                }
            }
            for (i = 0 ; i < fifty; i++) {
                coins.push(50);
            }
            
            remTen = 1000 - (fHun * 500 + remHun * 100 + remFif * 50);
            remTen = remTen / 10;
            for (var ten = remTen; ten >= 0; ten--) {
                for (i = 0; i < coins.length; i++) {
                    if (coins[i] === 10) {
                        coins.splice(i,1);
                    }
                }
                for (i = 0 ; i < ten; i++) {
                    coins.push(10);
                }
                // console.log(coins);
                disp = "";
                for (var m = 0; m < coins.length; m++) {
                    disp = disp + "," + coins[m];
                }
                console.log(disp);
            }
        }
    }
}