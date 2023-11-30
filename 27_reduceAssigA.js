const array_numbers = [20,11,40,25,37,49,9,90,60,2,19];
const sum = array_numbers.reduce( (runningTotal, value)=>{
    return runningTotal + value;
});
console.log(sum);
console.log('================================');
const multi = array_numbers.filter( (value) => {
    return value %5 == 0;
})
console.log(multi);
console.log('================================');
const sumNum = multi.reduce( (runningTotal,value) => {
    return runningTotal + value
})
console.log(sumNum);