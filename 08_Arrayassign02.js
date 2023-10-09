const arrayNumber = [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumber);
console.log("--------------------------------------------------------------------------------------------------------");
console.log("==========================Q1=============");
arrayNumber.length;
console.log(`Total total elements in array : ${arrayNumber.length}`);

console.log("==========================Q2=============");
console.log(`first Element :  ${arrayNumber[0]}`);
console.log(`last Element : ${arrayNumber[10]}`);

console.log("==========================Q3=============");
const thirdToLastElement = arrayNumber[arrayNumber.length - 3];
console.log('Third to last element:', thirdToLastElement);

console.log("==========================Q4=============");
evenNumbers = [];
for (let i = 0; i < arrayNumber.length; i++) {
  if (arrayNumber[i] % 2 == 0) {
    evenNumbers.push(arrayNumber[i]);
  }
}
console.log('Even numbers:', evenNumbers);

console.log("==========================Q5=============");
const oddNumbers = [];

for (let i = 0; i < arrayNumber.length; i++) {
  if (arrayNumber[i] % 2 !== 0) {
    oddNumbers.push(arrayNumber[i]);
  }
}
console.log('Odd numbers:', oddNumbers);

console.log("==========================Q6=============");

let sum = 0;
for (let i = 0; i < arrayNumber.length; i++) {
  if (arrayNumber[i] % 2 === 0) {
    sum += arrayNumber[i];
  }
}
console.log('Even numbers sum:',sum);

console.log("==========================Q7=============");
var addodd = 0;
for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % 2 !== 0){
        addodd += arrayNumber[i]
    }
    }
    console.log(`odd numbers sum:${addodd}`);

console.log("==========================Q8=============");
var add = 0;
for (let index = 0; index < arrayNumber.length; index++) {
    add += arrayNumber[index];
}
console.log(`sum of all elements${add}`);

console.log("==========================Q9=============");
const multiplesOfFive = [];
for (let i = 0; i < arrayNumber.length; i++) {
  if (arrayNumber[i] % 5 === 0) {
    multiplesOfFive.push(arrayNumber[i]);
  }
}
console.log('Numbers that are multiples of 5:', multiplesOfFive);

console.log("==========================Q10=============");
let num = 115;
if (arrayNumber.includes(num)){
  console.log(`number ${num}is in array`);
}else{
  console.log(`number ${num} is not in array`);
}

console.log("==========================Q11=============");
let num2 = 23;
if (arrayNumber.includes(num2)){
  console.log(`number ${num2} is in array`);
}else{
  console.log(`number ${num2} is not in array`);
}

console.log("==========================Q12=============");
arrayNumber.splice(3,0,55,56)
console.log(arrayNumber);

console.log("==========================Q13=============");
arrayNumber.splice(4,3)
console.log(arrayNumber);