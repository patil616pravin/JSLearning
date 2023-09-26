var greet = 'Good Morning';

console.log("========= length property =============");
var totalLength = greet.length;
console.log('Length of the string is: ', totalLength);

console.log("========== charAt() =============== ");
var charAt5 = greet.charAt(5);
console.log("Character at index  is: ", charAt5);
console.log('Char stored at index 5 is: ', greet.charAt(5));

var lastIndexChar = greet.charAt(greet.length-3);
console.log('Last index char is: ', lastIndexChar);

console.log("========== concatenation =============== ");
var firstName = "Jenny";
var lastName = " Gates"
var result = firstName.concat(lastName);
console.log(result);

console.log("========== indexOf =============== ");
var indexOfM = greet.indexOf('M');
console.log('Index of M is: ', indexOfM);

 console.log(greet.indexOf('nin'));

 console.log('Index of char z:',greet.indexOf('z'));

 console.log('Index of char D:',greet.indexOf('D'));
 console.log('Index of char o is:', greet.indexOf('o'));

 console.log("========== replace =============== ");
var result =greet.replace('Morning', "Afternoon");
console.log(result);
var result = greet.replace(' ', "-");
console.log(result);

console.log("========== includes() =============== ");
var result = greet.includes('Morning');
console.log("Is Morning word available: ", result);
var result = greet.includes('nin');
console.log("Is nin word available: ", result);
var result = greet.includes('good');
console.log("Is good word available: ", result);

console.log("========== search() =============== ");
var greet = "Good Morning";
var result = greet.search('orn');
console.log(result);
var result = greet.search('after');
console.log(result);

console.log("========== slice() =============== ");
var greet = 'Hello Good Morning!';
var result = greet.slice(6);
console.log(result);
var result = greet.slice(6, 10);
console.log(result);

console.log("========== split() =============== ");
var result = greet.split(" ");
console.log(result);

//WAP to count the total number words
var str = "I am UI Developer";
var words = str.split(" ");
console.log(words);
console.log(`Total words is: , ${words.length}`);
// console.log(typeof words);

// String template
console.log(`I am "UI" Developer `);
var num1 = 10;
var num2 = 20;
var result = num1 + num2;
console.log("Addition of ", num1, "and ", num2, "is :", result);
console.log(` Addition of ${num1} and ${num2}  is: ${result}`);

console.log(`====  1. Arithmetic Operator ====`);
// + - *
var num1 = 10;
var num2 = 2;
var result = num1 * num2;
console.log(`Multiplication result is: ${result}`);

var result = num1 ** 3;
console.log(`Exponential result is: ${result}`);

var result = num1 / num2;
console.log(`Division result is: ${result}`);

var result = num1%num2;
console.log(`Modulus result is: ${result}`);

console.log(`Modulus result is: ${10 % 3}`);

console.log(`Modulus result is: ${15 % 4}`);