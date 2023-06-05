//Using TDD(test-driven development) to build a factorial method.
//Test code:

var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns 120 as the factorial of 5',() => {
      //setup:
      const inputNum = 5;
      const expectedResult = 120;
      //exercise:
      const result = Calculate.factorial(inputNum);
      //verify:
      assert.equal(result, expectedResult); 
    });
    it('returns 6 as the factorial of 3',() => {
      //setup:
      const inputNum = 3;
      const expectedResult = 6;
      //exercise:
      const result = Calculate.factorial(inputNum);
      //verify:
      assert.equal(result, expectedResult); 
    });
    it('returns 1 as the factorial of 0',() => {
      //setup:
      const inputNum = 0;
      const expectedResult = 1;
      //exercise:
      const result = Calculate.factorial(inputNum);
      //verify:
      assert.equal(result, expectedResult);     
    });
  });
});