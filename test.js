//=============================================================================
// [file]test.js
// [memo]
//=============================================================================
(function () {

    'use strict';

    // =============================================
    // EVENT:detail.show
    // =============================================
    kintone.events.on('app.record.detail.show', function(event) {
        
        alert('testdsgfs');

    }); // end kintone.events.on [app.record.detail.show]

})();