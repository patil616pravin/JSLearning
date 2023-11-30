const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
const arrayNum = arrayNumbers.filter( (currentValue )=> {
    return currentValue > 50;
} );
console.log(`All the numbers whivh greater than :`);
console.log(arrayNum);
console.log(`======================================================`);
const arrayEven = arrayNumbers.filter((currentValue) =>{
    return currentValue %2 ===0;

}
) 
console.log(`All even number :`);
console.log(arrayEven);
console.log(`======================================================`);
const oddNumbers = arrayNumbers.filter(number => number % 2 !== 0);

console.log(`All odd number :`);
console.log(oddNumbers)
console.log(`======================================================`);
const arrayNumb = arrayNumbers.filter (number => number %5 ==0)

console.log(`All the number which are multiple of 5 :`);
console.log(arrayNumb);
console.log(`======================================================`);
const Numbers = arrayNumbers.filter  (number => number >=20 && number<=50)

console.log(`All number which are between 20 to 50 :`);
console.log(Numbers);
console.log(`======================================================`);