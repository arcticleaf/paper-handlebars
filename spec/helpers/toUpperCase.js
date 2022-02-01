const Lab = require('lab'),
      lab = exports.lab = Lab.script(),
      describe = lab.experiment,
      it = lab.it,
      testRunner = require('../spec-helpers').testRunner;

describe('toUpperCase helper', function() {
    const context = {
        string: "I Love PIZZA",
        number: 365,
        object: {},
        array: [1, 2, 3]
    };

    const runTestCases = testRunner({context});

    it('should convert string to upper case', function(done) {
        runTestCases([
            {
                input: '{{toUpperCase string}}',
                output: 'I LOVE PIZZA',
            },
            {
                input: '{{toUpperCase "hello"}}',
                output: 'HELLO',
            },
        ], done);
    });

    it('should properly handle values other than strings', function(done) {
         runTestCases([
            {
                input: '{{toUpperCase number}}',
                output: '365',
            },
            {
                input: '{{toUpperCase 5}}',
                output: '5',
            },
            {
                input: '{{toUpperCase object}}',
                output: '[object Object]',
            },
            {
                input: '{{toUpperCase array}}',
                output: '1,2,3',
            },
        ], done);
    });
});
