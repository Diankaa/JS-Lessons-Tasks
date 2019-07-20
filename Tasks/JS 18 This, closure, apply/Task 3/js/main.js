/** 
 * @type {Object}
 * @constructor Calculator
 * @description Has 2 methods that return sum and mul of two values
 * @param {Number} num1  value 1
 * @param {Number} num2  value 2
 * @property {function} sum Returns the sum of values
 * @property {function} mul Returns the mul of values
 * @returns {Number} 
 */

 function Calculator(num1, num2) {
   this.num1 = num1;
   this.num2 = num2;
   
   this.sum = function() {
       return this.num1 + this.num2;
   },
   this.mul = function() {
    return this.num1 * this.num2;
 }
};
var calculator = new Calculator(5, 5);
console.log("Сума = " + calculator.sum() ); 
console.log( "Добуток = " + calculator.mul());
