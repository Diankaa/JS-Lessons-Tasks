/** 
 * @description Invoking functions sum() and mul() in the context of the arguments that pass to them
 * @property {Number} number1 - value 1
 * @property {Number} number 2 - value 2
 * @property {function} sum Returns the sum of values
 * @property {function} mul Returns the mul of values
 * @returns {Number}
 */  

var calculator = { 
    number1: 2,
    number2: 3
 };

 function sum() {
     return this.number1 + this.number2;
 };

 function mul() {
    return this.number1 * this.number2;
};
console.log(sum.call(calculator));
console.log(mul.call(calculator));
console.log(typeof(calculator));
