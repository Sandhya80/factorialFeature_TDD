//Test driven development(Edge case included)
//Implementation code:

const Calculate = {
 factorial(inputNum) {
   //edge case for 0:
   if (inputNum === 0) {
     return 1;
   }
   for (let i = inputNum -1; i >= 1; i--) {
     inputNum *= i;
   }
   return inputNum;
 } 
 }

module.exports = Calculate;


