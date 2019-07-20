// TASK 1

/** 
* @type {Function}
* @description  Accepts random integer in a range between min number and max number and determines if a number is odd or even
* @returns {Number} Even or odd random number
*/  

function getNumber() {
    var num = getRandomNumber(1, 10);
    if(num % 2 == 0) {
        console.log(num + ' - парне число');
    } else {
        console.log(num + ' - непарне число');
    };
};

function getRandomNumber(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1) ) + min;
    return num;
};

getNumber();

// TASK 2(method 1)

var arr = ['lorem', 'ipsum', 'is', 'simply', 'dummy'];

/** 
* @type {Function}
* @description Convert array to string and makes first letter of each word to Uppercase 
* @param {Array}
* @returns {String}
*/  

function getString(arr){
    var str = [];
    arr.forEach(item => {
        str.push(item[0].toUpperCase() + item.slice(1))
    });
    return str;
};
console.log(getString(arr).join(' '));

// TASK 2(method 2)

var slice = (arr) =>
arr[0].toUpperCase() + arr.slice(1);

var result = ['lorem', 'ipsum', 'is', 'simply', 'dummy'].map(slice).join(' ');

console.log(result);

// or

var str = arr.map((item) =>
    item[0].toUpperCase() + item.slice(1)).join(' ');
    console.log(str);

// TASK 2(method 3)
function getStr(arr) {
   var str = [];
   for (var i = 0; i < arr.length; i++) {
       str.push(arr[i][0].toUpperCase() + arr[i].slice(1));
   };
   return str;
};
console.log(getStr(arr).join(' '));

// TASK 3

/** 
* @type {Function}
* @description Accepts two string and returns the longest one
* @param {String} str1
* @param {String} str2
* @returns {String} The longest String
* @example 
*
* //returns Skill
* result('Skill', 'Up');
* 
*/  

var result = (str1, str2) =>
    str1.length > str2.length ? console.log(str1) : console.log(str2);
    
result('Skill', 'Up');

