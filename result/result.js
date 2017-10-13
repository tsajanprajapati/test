'use strict';
var resultTable = [
    [1,2,3,4,5,6,7,8],
    ["吉田","加藤","武田","田村","上原","大迫","伊藤","三原" ],
    [94,78,62,70,63,99,83,60],
    [72,49,56,83,57,33,71,49],
    [88,60,81,56,73,69,51,81],
    [86,77,50,47,69,83,88,90],
    [72,69,68,73,47,99,40,58]
    ];
    
var subjects = ["No","Name","Japanese","Mathematics","Science","Social","English"];
for(var i = 0; i < subjects.length; i++) {
    document.write(subjects[i] + "\t");
}
document.write("<br>");
// document.write("<p>" + subjects +  "</p>");

for (var i = 0 ; i < 8; i++) {
    for (var j = 0; j <= 6; j++) {
        document.write(resultTable[j][i] + "\t");
    }
    document.write("<br>");
}
var max1 = 0;
// var max2 = 0;
// var max3 = 0;
var stdntCnt = 0;
var flag = true;
var min = 0;
var maxs = [];

var rank = 0;

for (var sub = 2; sub <=6; sub++) {
    max1 = 0;
min = 0;
maxs = [];
rank = 1;
    for (var i = 0; i < 8; i ++) {              //to find index of lowest mark.
        if (resultTable[sub][min] > resultTable[sub][i]) {
            min = i;
        }
    }
    console.log(subjects[sub]);         //to display the subject name.
    // for (stdntCnt = 0; stdntCnt < 3; stdntCnt++) {
    stdntCnt = 0;
    while(stdntCnt < 3) {
        max1 = min;
        for (var i = 0; i < 8; i ++) {
            flag = true;
            for (var j = 0; j < maxs.length; j++) {
                if (i == maxs[j]) {
                    flag = false;
                }
            }
            if (flag == true) {
                if (resultTable[sub][max1] < resultTable[sub][i]) {
                    max1 = i;
                }
            }
        }
        console.log(rank,resultTable[sub][max1],resultTable[1][max1]);
        maxs.push(max1);
        // console.log(maxs.length);
        if (maxs.length > 0) {
            if (resultTable[sub][max1] != resultTable[sub][maxs[maxs.length - 2]]){
                stdntCnt++;
            }
        }
        else {
            stdntCnt++;
        }
        rank++;
    }
}