var fizzbuzz = require('../src/fizzbuzz.js');

describe("Fizzbuzz", function() {
    test("gets fizzbuzz", function() {
        fizzbuzz(15);
    });

    test("not fizzbuzz", function() {
        fizzbuzz(8);
    });
});
