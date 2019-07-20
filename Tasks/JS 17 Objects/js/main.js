/**
* TASK 1
* @typedef {Object} skill
* @property {String} name - string 1
* @property {Number} level - string 2
* @property {function} start Concatenates two variables and returns a new string
* @returns {String}
*/

 var skill = { 
     name: 'html',
     level: 5 ,

     fullStr: function() {
         return this.name + ' - ' + this.level;
     }
    };
    console.log(skill.fullStr());


// TASK 1(method 2)

console.log(skill.name.concat(' - ',skill.level));

/** 
* TASK 2
* @method
* @name newString
* @description Adds new method to the String prototype which makes the first and last letter of the string upper case
* @memberof! String
* @return {String}
*/
 
 var str = 'string';

 String.prototype.newString = function() {
      return str[0].toUpperCase() + str.slice(1, -1) + str[str.length -1].toUpperCase();
 };
 console.log(str.newString());


/**
* TASK 3
* @constructor
* @description  Has prototype methods that return the sum and mul of values
* @param {Number} num1 value 1
* @param {Number} num2 value 2
*/

function Calculator(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
};

/**
* Returns the sum of two values
* @method
* @name sum
* @memberof! Calculator
* @instance
* @return {Number}
*/

Calculator.prototype.sum = function() {
    return this.num1 + this.num2;
};

/**
* Returns multiplication of values
* @method
* @name mul
* @memberof! Calculator
* @instance
* @return {Number}
*/

Calculator.prototype.mul = function() {
    return this.num1 * this.num2;
};

var calculator = new Calculator(5, 5);

console.log(calculator.sum());
console.log(calculator.mul());


/**
 * TASK 4
 * @constructor
 * @description Has prototype methods start(), stop(), reset()
 * @param {Number} counter - Timer counter
 */

function Timer(counter) {
  /** @type {Number} */
  this.counter = counter;
};

/**
* Starts a timer with one second interval
* @method
* @name start
* @memberof! Timer
* @instance
* @return {Number}
*/

Timer.prototype.start = function() {
  var self = this;
  this.time = setInterval(() => {
       self.counter.innerHTML++;
  }, 1000);
};

/**
* Resets the timer to 0 
* @method
* @name reset
* @memberof! Timer
* @instance
* @return {Number}
*/

Timer.prototype.reset = function() {
    this.counter.innerHTML = 0; 
    clearInterval(this.time);  
};

/**
* Stops timer interval
* @method
* @name stop
* @memberof! Timer
* @instance
* @return {Number}
*/

Timer.prototype.stop = function() {
clearInterval(this.time);
};

var count = document.querySelector('.time');
var timer = new Timer(count);

document.querySelector('.start').addEventListener('click', () => {
  timer.start();
});

document.querySelector('.reset').addEventListener('click', () => {
  timer.reset();
});

document.querySelector('.stop').addEventListener('click', () => {
  timer.stop();
});