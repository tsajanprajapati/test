(function () {

    'use strict';

    // =============================================
    // EVENT:index.show
    // =============================================
    kintone.events.on('app.record.index.show', function(event) {
        var records = event.records;
        
        for (var i = 0; i < records.length; i++) {
            
            var record = records[i];
            
            console.log('== ' + i + ' ==');
            console.log(record.name.value);
            console.log(record.color.value);
            console.log(record.count.value);
            console.log(record.memo.value);
        }
        
        return event;
    }); // end kintone.events.on [app.record.index.show]
    
    
    // =============================================
    // EVENT:detail.show
    // =============================================
    kintone.events.on('app.record.detail.show', function(event) {
        var record = event.record;
        
        console.log(record.name.value);
        console.log(record.color.value);
        console.log(record.count.value);
        console.log(record.memo.value);
        
        return event;
    }); // end kintone.events.on [app.record.detail.show]
    
    
    // =============================================
    // EVENT:create.submit
    // =============================================
    kintone.events.on('app.record.create.submit', function(event) {
        var record = event.record;
        
        record.name.value = 'car';
        record.color.value = 'blue';
        record.count.value = 12345;
        record.memo.value = 'default memo';
            
        return event;
    });  // end kintone.events.on [app.record.create.submit]
    
    
    // =============================================
    // EVENT:edit.submit
    // =============================================
    kintone.events.on('app.record.edit.submit', function(event) {
        var record = event.record;
        
        record.memo.value = record.memo.value + record.name.value;
        
        return event;
    }); // end kintone.events.on [app.record.edit.submit]
})();