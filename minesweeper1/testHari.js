'use strict';

$(function(){


var $divMain = $("#mines");

$divMain.css({"height":"320px", "width":"320px","background-color":"blue"});

var box=[];
var bomb=[];
var random = 0;
var idx= 0;
for (var i= 0; i<5; i++) {
    for (var j= 0; j<5; j++){
        box[i*5+j] = $("<div>", { "id": i +'_'+ j, "class": "row" + i + " " + "column" + j });
        box[i * 5 + j].css({"position":"absolute", "left": 25 + (60 * j), "top": 25 + 60 * i, "height": 30 +"px", "width": 30+"px" });
        box[i * 5 + j].css("background-color","green");
        box[i * 5 + j].text(i * 5 + j);
        $divMain.append(box[i * 5 + j]);
        
        box[i*5+j].on('click',function() {
            idx = box.indexOf(box[i*5+j]);
            alert(idx);
        });
    }
}

// for (var i=0; i< box.length; i++){
//     box[i].on('click',function() {
//         idx = box.indexOf(box[i]);
//         alert(idx);
//     });
// }

for (var i=0; i<25; i++) {
    bomb[i] = false;
}

for (var i=0; i<3; i++) {
    random = Math.floor(Math.random() * 25);
    bomb[random] = true;
}


//click event
// $(document).ready(function(){
//     for(var i = 0; i < box.length; i++) {
//         (box[i]).click( boxClicked( i ) );
//     }
// });

// function boxClicked(idx){
//     return function(){
        
//         box[idx].text();
//         if (bomb[idx] == true) {
//             //alert ("bomb clicked");
//             box[idx].css({ "background-color": "red"});
//         }
//         else {
//             //alert("not bomb");
//             box[idx].css({ "background-color": "yellow"});
//         }
//     }
// }

});