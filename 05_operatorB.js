function greaterNumber(num1, num2) {
    var greate = num1 > num2 ? num1 : num2; 
    console.log('The greater number between', num1, 'and', num2, 'is:', greate); 
  }
  
  var n1 = 10;
  var n2 = -10;
  greaterNumber(n1, n2);
  
  var n3 = 800;
  var n4 = 899;
  greaterNumber(n3, n4); 
  console.log("=========================================================================");
  
  function isEvenOrOddNum(oddeven) {
    var evenodd = oddeven % 2 === 0 ? 'even' : 'odd';
    console.log('given number is',oddeven, 'is',evenodd);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);
console.log("=========================================================================");

function wordLength(word) {
    const lengthIsEven = (word.length % 2 === 0) ? 'EVEN' : 'ODD';
    return `Given word is:- ${word} and its length is:- ${word.length} ==>${lengthIsEven}`;
}
console.log(wordLength('JavaScript'));
console.log(wordLength('developer'));
console.log(wordLength('Google'));