const Lab = require('lab'),
      lab = exports.lab = Lab.script(),
      describe = lab.experiment,
      it = lab.it,
      testRunner = require('../spec-helpers').testRunner;

describe('str_replace helper', function() {
    const context = {
        string: "My name is Albe Albe Albe",
        substr: "Albe",
        newSubstr: "Alex",
        object: {}
    };

    const runTestCases = testRunner({context});

    it('should replace all by default', function(done) {
        runTestCases([
            {
                input: '{{str_replace string substr newSubstr}}',
                output: 'My name is Alex Alex Alex',
            },
            {
                input: '{{str_replace "Your name is none" "none" "Bob"}}',
                output: 'Your name is Bob',
            },
        ], done);
    });

    it('should replace one if given token', function(done) {
        runTestCases([
            {
                input: '{{str_replace string substr newSubstr "i"}}',
                output: 'My name is Alex Albe Albe',
            },
        ], done);
    });

    it('should only handle string', function(done) {
         runTestCases([
            {
                input: '{{str_replace 5 5 5}}',
                output: 'Invalid Input',
            },
            {
                input: '{{str_replace object "none" "Bob"}}',
                output: 'Invalid Input',
            },
        ], done);
    });
});
