const array = [1,2,3,4,5,6,7,8,9,10,11,12];
var sum = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        sum.push(array[i])
    }
    
}
console.log(sum);
console.log('==============================');
const arrayNum = [1,2,3,5,7,8,10,15,20];
var multi = [];
for (let i = 0; i < array.length; i++) {
    if (arrayNum[i] %5 === 0) {
        multi.push(arrayNum[i])
    }
    
}
console.log(multi);