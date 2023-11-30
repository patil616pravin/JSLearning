let array = [11,3,4,11,4,7,3]; 
  
function remove (array) { 
    return [...new Set(array)];
} 
console.log(remove(array));

console.log('==================================================');

const str = "How are you mate";

function convertString(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
        
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  return result;
}

console.log(convertString(str)); // Output: "HoW ArE YoU MatE"
