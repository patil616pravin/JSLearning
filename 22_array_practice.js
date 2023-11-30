const array_Numbers = [20,11,40,25,23,11,9,9,60,20,19]
//remove duplicate element from array
let newArray = Array.from (new Set (array_Numbers))
console.log(newArray);
console.log('=============================');
//array in asending order
var sortedArray = newArray.sort((a,b) => {
    return a>b ? 1 : -1
})
console.log(sortedArray);
console.log('=============================');
//Greatest number from array
console.log(sortedArray[sortedArray.length-1]);
console.log('=============================');
//lowest number from array
console.log(sortedArray[0]);
console.log('=============================');
console.log(sortedArray[sortedArray.length-2]);
console.log('=============================');
console.log(sortedArray[1]);

