var fizzbuzz = require('../src/fizzbuzz.js');

describe("Fizzbuzz", function() {
    it("gets fizzbuzz", function() {
        fizzbuzz(15);
    });

    it("not fizzbuzz", function() {
        fizzbuzz(8);
    });
});
