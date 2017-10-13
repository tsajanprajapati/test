(function () {

    'use strict';

    // =============================================
    // EVENT:index.show
    // =============================================
    kintone.events.on('app.record.index.show', function(event) {
        var records = event.records;
        
        //------------------------------------------
        // CREATE DOM
        // -----------------------------------------
        var $indexHeader = $(kintone.app.getHeaderMenuSpaceElement());
        var $btnSample1 = $("<button>", { id: "btn_sample1"}).append(" button1");
        
        $indexHeader.append($btnSample1);
        
        var $btnArea = $('#btnArea');
        var $btnSample2 = $("<button>", { id: "btn_sample2"}).append(" button2");
        
        $btnArea.append($btnSample2);
        
        var $formArea = $('#formArea');
        var $txtInput1 = $("<input>", {id: "txt_input1"});
        var $txtInput2 = $("<input>", {id: "txt_input2"});
        
        
        $formArea.append($txtInput1);
        $formArea.append($txtInput2);
        
        
        
        // ----------------------------
        // EVENT HANDLER
        // -----------------------------
        $btnSample1.on('click', function(e) {
            alert('click button1!');
        }); // end $btnSample1.onClick
        
        $btnSample2.on('click', function(e) {
            var str = $('#txt_input1').val() + $('#txt_input2').val()
            alert('input data:' + str);
        }); // end $btnSample2.onClick
        
        return event;
    }); 
})();