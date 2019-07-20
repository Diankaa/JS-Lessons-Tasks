// TASK 1

var arr = [
    [1,2,3],
    [4,5,6], 
    [7,8,9]
];

var sum = 0;

/** 
* @type {Function}
* @description  Returns the sum of two-dimensional array  
* @param {Array}
* @returns {Number} The sum of all numbers
* @example
* //returns 45
* getSumArray( [[1,2,3],[4,5,6], [7,8,9]);
*/  
  

function getSumArray(array){
    array.forEach(value => {
        Array.isArray(value) ? getSumArray(value) : sum+= value;
    });
    return sum;
}
        
console.log(getSumArray(arr))


// TASK 1(method 2)

var sum = arr => arr.reduce((res, el) => res + (Array.isArray(el) ? sum(el) : el), 0);
console.log(sum(arr));


// TASK 1(method 3)

function getSum(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr[i].length; j++) {
            sum+=arr[i][j];
        }
    }
    return sum;
};

console.log(getSum(arr));

// TASK 2

var arr = [];
var tmp = 0;

/** 
* @description  Adds numbers to array via the prompt until the user clicks Cancel 
* @returns {Array} 
*/  
    
do{
    tmp = prompt('Введіть число');
    if(tmp != null  && tmp != ''){
        arr.push(tmp);
    }
} while(tmp != null);
    
console.log(arr);

// TASK 2(method 2)

var arr = [];
var tmp = 0;

for(var i = 0; i = true; i++) {
    tmp = prompt('Введіть число');
    if(tmp == null){
        break;
    } else {
        if(tmp != null && tmp != '') {
            arr.push(tmp);
        }
    }
};

console.log(arr);
 
// TASK 3

   var str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';
/**
* @type {Function}
* @description  Splits the string and determines words longer than 5 symbols
* @param {String} 
* @returns {String} words longer tnan 5 symbols
*/  

function findWords(str) {
    var strSplit = str.split(' ');
    var arr = [];
    for(var i = 0; i < strSplit.length; i++) {
        if(strSplit[i].length > 5) {
            arr.push(strSplit[i]);
            var words = arr.join(' ');
        };
    }
    return words;
};

console.log(findWords(str));
   
// TASK 3(method 2)

var str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';
var words = [];

str.split(' ').reduce((result, el) => (el.length > 5 ? words.push(el) : result),'');

console.log(words.join(' '));

// TASK 3(method 3)

var str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit'.split(' ');
var arr = [];

var words = str.map(function(item) {
   return item.length > 5 ? arr.push(item) : arr;
})
console.log(arr.join(' '));

// TASK 4

var arr = [1, 9, 22, 7, 6];

/** 
* @type {Function}
* @description Adds a number to a specified index of Array
* @param {Array} arr
* @returns {Array} 
* @example 
* addNumber([1, 9, 22, 7, 6]);
*         // => [1, 9, 22, 8, 7, 6]
*/  

function addNumber(arr){
     arr.splice(3, 0, 8);
     return arr;
}
console.log(addNumber(arr));

// TASK 5

/** 
* @type {Function}
* @description  Fills the array with random numbers 
* @param {Number} number - length of Array
* @returns {Array} Random numbers
* @example 
* randomNumberArray(5);
* // => ([3, 5, 7, 9, 1])
*/  

 function getRandomNum(min, max){
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}

function randomNumberArray(number) {
    var arr = [];
    for(var i = 0; i < number; i++) {
        arr.push(getRandomNum(1, 100))
    }
    return arr;
}

console.log(randomNumberArray(100));
 
// TASK 6
 
var arr = [1, 4, 6, 7];
var num = [];
var tmp = prompt('Введіть число');
arr.push(tmp);

/** 
@type {function}
* @description  Checks whether there is a number in the array that 
 is entered by user through the prompt
* @returns {Number} number that is entered through the prompt
*/

function checkNum(){
for(var i = 0; i < arr.length; i++) {
    if(arr[i] == tmp){
        num.push(tmp);
    }
  }
  return num.join('');
};
console.log(checkNum());

