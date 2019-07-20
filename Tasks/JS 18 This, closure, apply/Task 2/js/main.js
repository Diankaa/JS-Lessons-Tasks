/** 
 * @type {Object}
 * @description Methods of the Object return the sum and mul of two values
 * @property {Number} number1 - value 1
 * @property {Number} number2 - value 2
 * @property {function} sum Returns the sum of values
 * @property {function} mul Returns the mul of values
 * @returns {Number}
 */ 

var calculator = {
  number1: 2, 
  number2: 3,
  sum: function() {
      return this.number1 + this.number2;
  },
  mul: function() {
      return this.number1 * this.number2;
  }
}
console.log(calculator.sum());
console.log(calculator.mul());
console.log(typeof(calculator));
