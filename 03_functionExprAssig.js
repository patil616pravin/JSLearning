console.log("============Assignment==============");
console.log("============Step 1==============");
var square = function (values){
    return (values*values)

}
var result1 = square(5)
var result2 = square(6)
var result3 = square(25)
var result4 = square(100)
var result5 = square(67)
var result6 = square(89)
var result7 = square(59)

console.log(`Square of 5 is ${result1}`);
console.log(`Square of 6 is ${result2}`);
console.log(`Square of 25 is ${result3}`);
console.log(`Square of 100 is ${result4}`);
console.log(`Square of 67 is ${result5}`);
console.log(`Square of 89 is ${result6}`);
console.log(`Square of 59 is ${result7}`);

console.log("============Step 2==============");
console.log(`type of function expression is :${typeof square}`);

console.log("============Step 3==============");
let rectLength = function(value1,value2){
    //console.log("Length of rectangle is = 499");
    //console.log("Width of rectangle is = 917");
     console.log("Total Area of rectangle is :",value1*value2);
}
rectLength (499,917)

console.log("============Step 4==============");
var SwapValues = function(arg1,arg2){
    console.log("Before swap ==>",arg1,arg2);
    var temp = arg1
    arg1 = arg2
    arg2 = temp
    console.log("After swap ==>",arg1,arg2);

}
SwapValues("Mahi","Raina")
console.log("=====================================");
var swapNum = function(value1,value2){
    console.log("Before swap ==>",value1,value2);
    var temp = value1
    value1 = value2
    value2 = temp
    console.log("After swap ==>",value1,value2);
}
swapNum(55,77)

console.log("============Step 5==============");
var swap = function(){
    var string = "JS the most popular language of internet"
    var totalCharacters = string.length
    console.log("1. Total Characters in given string :",totalCharacters);

    var charAtIndex6 = string.charAt(5);
    console.log('2. Character at index 6 : ',charAtIndex6)
    var charAtIndex11 = string.charAt(10);
    console.log('3. Character at index 11 : ',charAtIndex11)

    var lastChar = string.charAt(totalCharacters - 1);
    console.log('4. Last character:', lastChar);
   
    var firstChar = string.charAt(0);
    console.log('5. First character:', firstChar);
    
    var thirdLastChar = string.charAt(totalCharacters - 3);
    console.log('6. Third last character:', thirdLastChar);

    var words = string.split(' ').length;
    var squareOfWords = words * words;
    console.log('7. Square of the total number of words:', squareOfWords);
}
swap()
