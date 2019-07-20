// TASK 1

 var name = 'Diana';
 var student;
 student = name;
 console.log(student);

// TASK 2

a = 6; b = 3; 
console.log(a > b); // true
a = 3; b = 3; 
console.log(a == b); // true
a = 3; b = 6;
console.log(a != b); // true
a = 1; b=' '; 
console.log(a === b); //false
console.log('B' > 'A', 'a' > 'Z'); // true, true
a = false; b = 0; 
console.log(a >= b); // true
console.log(('2' === 2) ? 'ok' : 'not'); //'not'

// TASK 3

a = 5; b = 3;

console.log((a > b ) && (a === b)); //false
console.log(true && 0 && ('a' < 'Z')); // 0
console.log((a > b) || true || ('2'== 2) || (false == '')); // rtue
console.log((a < b) && (0 == false)); //false

var c = !(2 == 2) || (true && '') //false
if(c) {
    console.log(true);
} else {
    console.log(false);
};
