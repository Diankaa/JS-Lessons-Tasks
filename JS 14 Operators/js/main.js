// TASK 1

/** 
* @type {Function}
* @description Take the number user write, compare it with 1, 0, -1 and return result
* @returns {Number} 
*/ 

function getNumber(){
 var number = prompt('Введіть число');
   if(number > 0) {
       console.log(1)
   } else if(number < 0) {
       console.log(-1);
   } else {
       console.log(0);
   }
};
getNumber();

// TASK 2(Rewtite if..else statement to ternary operator)

/** 
* @type {Function}
* @description Compare value of its var with 0
* @returns {Boolean} The comparison result
*/ 
  
function getResult(){
  var a = 1;
  var n;
  n  = (a > 0) ? true : false;
  return n;
};
console.log(getResult());

// TASK 3

/** 
* @type {Function}
* @description compares the number user write in a switch statement 
* @returns {String} 
*/ 

function compareNumber(){
  var number = +prompt('Введіть число');

  switch (number) {
      case 1:
          console.log('a');
          break;
      case 2:
          console.log('b');
          break;
      case 3:
          console.log('c');
          break;
    
      default:
          console.log('z');
   }
}
compareNumber();

// TASK 4

/** 
* @type {Function}
* @description Using the for loop returns squares of numbers from 1 to 9
* @returns {Number} Square of number
*/ 

function getSquareNumber(){
  for(var i = 1; i < 10; i++){
    console.log(Math.pow(i, 2));
 }
};
getSquareNumber();

// TASK 5

/** 
* @type {Function}
* @description Using the while loop returns squares of numbers
* @returns {Number} Square of number
*/ 

function getSquareNumbers(){
  var i = 0;
  while (i < 10) {
    console.log(Math.pow(i, 2));
    i++;
 }
};
getSquareNumbers();

// TASK 6

/** 
* @type {Function}
* @description Take two numbers, compare them and return a bigger one
* @param {Number} num1 
* @param {Number} num2
* @returns {Number} Bigger number
*/ 

function getBiggerNum(num1, num2) {
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
}

console.log(getBiggerNum(5, 10));