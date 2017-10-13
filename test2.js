//=============================================================================
// [file]test2.js
// [memo]
//=============================================================================
(function () {

    'use strict';

    // =============================================
    // EVENT:detail.show
    // =============================================
    kintone.events.on('app.record.detail.show', function(event) {
        
        alert('hello world!');
 console.log('== first ==');
            console.log('window.location.href');
            
            window.location.href = 'http://www.socym.co.jp/'
            
            console.log('== second ==');
            console.log(window.location.href);
    }); // end kintone.events.on [app.record.index.show]

})();