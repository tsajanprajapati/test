(function () {

    'use strict';
    
     // Moment.jsのローカライズ
    moment.locale('ja');

    // =============================================
    // EVENT:index.show
    // =============================================
    kintone.events.on('app.record.create.submit', function(event) {
        var record = event.record;
        if (record.check.value === 'on'){
            record.special_name.value ='*' + record.name.value;            
        }
        else{
            record.special_name.value = record.name.value;
        }
        var str = ''
        for (var i = 0; i < record.hobby.value.length; i++){
            str += record.hobby.value[i] + ', ';
        }
        str = str.substring(0, str.length-2);
        record.memo.value = '[hobby]'+ '\n' + str +'\n'+'[job]' + '\n' + record.job.value;
        
        
        return event;
    }); 
    
    kintone.events.on('app.record.edit.submit', function(event) {
        var record = event.record;
        if (record.check.value === 'on'){
            record.special_name.value ='*' + record.name.value;            
        }
        else{
            record.special_name.value = record.name.value;
        }
        var str ='';
        for (var i = 0; i < record.hobby.value.length; i++){
            str += record.hobby.value[i] + ', ';
        }
        
        str = str.substring(0, str.length-2);
        record.memo.value = '[hobby]'+ '\n' + str +'\n'+'[job]' + '\n' + record.job.value;
        
        return event;
    }); 
    
    // kintone.events.on('app.record.detail.show', function(event) {
    //     var record = event.record;
    //     var BMI = record.weight.value/((record.height.value*record.height.value)/10000);
        
    //     var $spBmi = $(kintone.app.record.getSpaceElement("sp_bmi"));
    //     var $spanBmi = $("<span>", { id: "span_bmi"});
       
    //     $spanBmi.text(BMI);
    //     $spBmi.append($spanBmi);
        
    //     var elBMI = kintone.app.record.getSpaceElement('sp_bmi');
        
        
    //     if (BMI < 18.5){
    //         elBMI.style.color = '#0033ff';
    //     }
    //     else if (BMI >= 18.5 && BMI < 25){
    //         elBMI.style.color = '#00ff44';
    //     }
    //     else if (BMI >= 25&& BMI < 30){
    //         elBMI.style.color = '#bbff00';
    //     }
    //     else if (BMI >= 30 && BMI < 35){
    //         elBMI.style.color = '#ffff00';
    //     }
    //     else if (BMI >= 35 && BMI < 40){
    //         elBMI.style.color = '#ff0088';
    //     }
    //     else if (BMI >= 40){
    //         elBMI.style.color = '#ff0000';
    //     }
    //     else {
    //         elBMI.style.color = '#000000';
    //     }
    //      $spanBmi.addClass('bmi_law');

    //     // ---------------------------
    //     // SET AGE
    //     // ---------------------------
    //     var $spAge = $(kintone.app.record.getSpaceElement("sp_age"));
    //     var $spanAge = $("<span>", { id: "span_age"});

    //     var years = moment().diff(moment(record.birthday.value), 'years');
    //     var months = moment().diff(moment(record.birthday.value), 'months') % 12;
        
    //     $spanAge.text(years + "年 " + months + "ヶ月");
        
    //     $spAge.append($spanAge);

        
    //     return event;
    // });
    
     // =============================================
    // EVENT:detail.show
    // =============================================
    kintone.events.on('app.record.detail.show', function(event) {
        var record = event.record;
        
        // ---------------------------
        // SET BMI
        // ---------------------------
        var $spBmi = $(kintone.app.record.getSpaceElement("sp_bmi"));
        var $spanBmi = $("<span>", { id: "span_bmi"});
        
        var height = Number(record.height.value);
        var weight = Number(record.weight.value);

        var bmi = weight / ((height/100) * (height/100));
        
        $spanBmi.text(bmi);
        
        $spBmi.append($spanBmi);

        // ---------------------------
        // SET BMI COLOR
        // ---------------------------
        if ( bmi < 18.5) {
            $spanBmi.css('color', '#0033ff');
        } else if (18.5 <= bmi && bmi < 25 ) {
            $spanBmi.css('color', '#00ff44');
        } else if (25 <= bmi && bmi < 30 ) {
            $spanBmi.css('color', '#bbff00');
        } else if (30 <= bmi && bmi < 35 ) {
            $spanBmi.css('color', '#ffff00');
        } else if (35 <= bmi && bmi < 40 ) {
            $spanBmi.css('color', '#ff0088');
        } else if (40 <= bmi ) {
            $spanBmi.css('color', '#ff0000');
        } else {
            $spanBmi.css('color', '#00000');
        }

        $spanBmi.addClass('bmi_law');

        // ---------------------------
        // SET AGE
        // ---------------------------
        var $spAge = $(kintone.app.record.getSpaceElement("sp_age"));
        var $spanAge = $("<span>", { id: "span_age"});

        var years = moment().diff(moment(record.birthday.value), 'years');
        var months = moment().diff(moment(record.birthday.value), 'months') % 12;
        
        $spanAge.text(years + "年 " + months + "ヶ月");
        
        $spAge.append($spanAge);

        return event;
    });

    
    
    
     kintone.events.on('app.record.index.show', function(event) {
         
        
        var records = event.records;
        
        var elGender = kintone.app.getFieldElements('gender');
      
         
         for (var i = 0; i < elGender.length; i++) {
            var record = records[i];
            switch (record.gender.value) {
                case 'male' :
                    elGender[i].style.color = '#ff0000';
                    break;
                case 'female':
                    elGender[i].style.color = '#0000ff';
                    break;
                default:
                     elGender[i].style.color = '#ffff00';
                    break;
            }
            
        }
        return event;

    });
    
})();