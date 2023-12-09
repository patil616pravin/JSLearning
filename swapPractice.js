// var array = [1,2,3,4,5,6,7,8,9,10]
// for (let index = 0; index < array.length; index++) {
//     var evenNum = [index];
//    if (evenNum %2 === 0 ) {
//     console.log(evenNum);
//    }
    
// }
// console.log('======================================');
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let index = 0; index < array.length; index++) {
//     number = index
//     if ((number & 1) === 0) {
//         console.log(`${number},is even`);
        
//     } else {
//         console.log(`${number},is odd`);
        
//     }
// }
// console.log('======================================');
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var i = 0; i < array.length; i++) {
//   var number = array[i];
//   if ((number & 1) === 0) {
//     console.log(number + " is even");
//   } else {
//     console.log(number + " is odd");
//   }
// }
// console.log('======================================');
// //remove 30 from array
// var array2 = [10,20,30,30,30,40,50];

// // Using the filter method
// array2 = array2.filter(function(value) {
//     return value !== 30;
// });

// console.log(array2);
// console.log('======================================');
// //remove duplicate element from array
// var array2 = [10,20,30,60,30,40,50,60,20]
// const newArray = [...new Set(array2)]
// console.log(newArray);

// console.log('======================================');

// const fruits = ["Mango","Orange","Banana","Strawberry"];
// console.log(fruits);
// console.log(...fruits);
// console.log('======================================');

// const arrayNum = [11,3,4,11,4,7,3]
// const uniqueArray = [...new Set (arrayNum)]
// console.log(uniqueArray);
// console.log('======================================');
// //Clone Object 
// const  emp = {
//   emp_name : "Pravin",
//   company : "TCS"

// }
// console.log(emp);
// const clonedObject = Object.assign({},emp)
// console.log(clonedObject);
// console.log('======================================');
// //merge object 
// const empee = {
//   emp_name : "Pravin",
//   company : "TCS"

// }
// const emp_address = {
//   city : "Pune",
//   pin : 421102
// }

// const merge_object = Object.assign({},empee,emp_address)
// console.log(merge_object);
// console.log('======================================');

// const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num === 2) return true;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// const primeNumbers = array.filter((num) => isPrime(num));

// console.log("Prime numbers in the array:", primeNumbers);
// console.log('======================================');

// const arraynum = [5,10,12,15,17,20,23,25,30,34,35];
// const multiValue = [];
// for (let i = 0; i < array.length; i++) {
// if (arraynum[i] %5 === 0) {
//   multiValue.push(arraynum[i])
// }
  
// }
// console.log(multiValue);
// console.log('======================================');
// const nums = [10,8,2,5]
// const sum = nums.reduce((runningtotal,value)=>{
//   return runningtotal + value
// })
// console.log(sum);
// console.log('======================================');
// let str="hello"
// for (let index = str.length-1; index >= 0; index--) {
//   const element = array[index];
//   console.log(element);
// }
// console.log('======================================');
// const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11]
// arrayNumbers.unshift(10)
// console.log(arrayNumbers);
// console.log('======================================');
// console.log('20'- -'2');
// console.log('======================================');
// function factorial(n) {
//   if (n === 0 || n === 1) {
//       return 1;
//   } else {
//       return n * factorial(n - 1);
//   }
// }

// var result = factorial(5);
// console.log("The factorial of 5 is: " + result);
// console.log("======================================================");
// var array = [1,2,3,4,5,6,7,8,9,10]
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   if (element %2===0) {
//     console.log(element,"even");
//   }
//   else
//    console.log(element,"odd");
// }
// console.log("======================================================");
// var array = [1,2,3,4,5,6,7,8,9,10]
// var array2 =[...array]
// console.log(array2);
// console.log("======================================================");
// var fact = factorial(5)
// console.log(fact);
console.log("======================================================");
let array = [10,8,6,5,2,3]
 var value = array.sort((a,b)=>a-b)
 console.log(value);
console.log("======================================================");
var value = array.sort((a,b)=>{
  return a>b? 1 : -1
})
 console.log(value);
