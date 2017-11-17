'use strict';

$(function(){
    var $divMain = $("#mines");
    var $box = [][100];
    
    for (var i = 0; i< 5; i++) {
        for (var j = 0; j< 5; j++) {
            // var $row1 = $("<div>", { "id": "row1", "class": "row1"});
            $box[i][j] = $("<div>", { "id": "box"+i+j, "class":"row"+ i});
            $divMain.append($box[i][j]);
        }
    }
});