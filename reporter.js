/**
 * Created by tthlex on 23/10/15.
 */



var figlet = require('figlet');
module.exports = function LegoReporter(runner) {
    var passes = 0;
    var fails = 0;
    var failedTest = [];
    var passedtests = [];

    var displayTestResults = function(test) {
        console.log("LEGO TEST Result");
        if(passedtests.length > 0){
            console.log("Number of Passed Test:", passedtests.length);
        }

        if(failedTest.length > 0){
            console.log("Number of Failed Test:", failedTest.length);
        }

        process.exit(fails);

    };
    runner.on('pass', function (test) {
        passes++;
        //console.log(test);
        passedtests.push(test);
    });

    runner.on('fail', function (test) {
        fails++;
        //console.log(test);
        failedTest.push(test);
    });

    runner.on('end', displayTestResults)
};