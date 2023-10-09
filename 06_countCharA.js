
function countCharA(inputString) {
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === 'a' || inputString[i] === 'A') {
        count++;
      } 
    }
    console.log(count);
    return count;
  }
  console.log("Sum of num a & A available in I AM Learning JavaScript, The Language of internet is :")
  countCharA("I AM Learning JavaScript, The Language of internet");
  console.log("Sum of num a & A available in I AM Learning JavaScript, My favourite movie is LAggAn :")
  countCharA("My favourite movie is LAggAn"); // Output: 3
  
  "My favourite movie is LAggAn"
 