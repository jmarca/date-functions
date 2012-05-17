/* global exports, require, console */

var df = require('../lib/date-functions.js');
var source='/data/counties/hourly/2009/06019.json';
var expected='/data/counties/hourly/2009/Fresno.json';

exports.testParse = function(test){
    test.expect(5);
    var datestring = "2005-10-05 12:13 am"
    var d = Date.parseDate(datestring,"Y-m-d g:i a")
    test.ok(d.getFullYear()==2005, "parsed year");
    test.ok(d.getMonth()+1 ==10,   "parsed month");
    test.ok(d.getDate()==5, "parsed date");
    test.ok(d.getHours()==0, "parsed hour");
    test.ok(d.getMinutes()==13, "parsed minutes");
    test.done();
};

exports.testFormat = function(test){
    var formats = ["Y-m-d"
                  ,"n/j/y"
                  ,"l, M jS, Y"
                  ,"Y-m-d H:i:s"
                  ,"D \\t\\h\e jS"
                  ,"Y \\week W"];

    var expecting = ["2005-10-05"
                    ,"10/5/05"
                    ,"Wednesday, Oct 5th, 2005"
                    ,"2005-10-05 00:13:00"
                    ,"Wed the 5th"
                    ,"2005 week 40"]

    var datestring = "2005-10-05 12:13 am"
    var d = Date.parseDate(datestring,"Y-m-d g:i a")
    test.expect(6);
    for(var i=0; i<6; i++){
        test.equal(d.dateFormat(formats[i]),expecting[i], 'format '+formats[i])
    }
    test.done();
};
