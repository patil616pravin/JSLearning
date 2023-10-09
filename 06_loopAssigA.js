var str = "I am very good IT developer"
var count = 0;
var vowelsCap = "AEIOU";
for (let index =0; index <str.length-1; index++) {
    var char = str.charAt(index).toUpperCase();
    if(vowelsCap.includes(char)){
        count = count + 1;
    }  
}
console.log(`Total number of vowels are: ${count}`);

console.log('==============================================');
var result=0
for (let index = 1; index <=5;index++) {
    result = result + index * index * index;
    
}
console.log(`sum of cube of 1 to 5: ${result}`);
console.log('==============================================');
function oddPositionedChars(str){
    for (let index = 0; index < str.length-1; index++) {
        if (index%2!=0 && str.charAt(index)!=" ") {
            console.log(str.charAt(index));
        }
        
    }

}
oddPositionedChars("Hard work always pays back");
console.log('==============================================');
oddPositionedChars("Soon I will be UI IT champ");

