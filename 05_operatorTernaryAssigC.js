console.log("===========Ternary Assignment=============");
console.log("===========Step 1=============")
function maleMarriageEligibility(gender,age,boyname){
    var result = gender=='male' && age>=21 
    ? `Hey, ${boyname} you are eligible for marriage,Congrats!`
    : `Sorry, ${boyname} you are not eligible for marriage, try next time.`;
    return result 
}
var result = maleMarriageEligibility("male","25","Billgates");
console.log(result);

var result = maleMarriageEligibility("male","17","Stew Jobs");
console.log(result);

console.log("===========Step 2=============")
function femaleMarriageEligibility (gender,age,girlname){
    var result = gender=="female" && age>=18
    ? `Hey, ${girlname} you are eligible for marriage,Congrats!`
    : `Sorry, ${girlname} you are not eligible for marriage, try next time.`;
    return result
}
var result= femaleMarriageEligibility("female","16","Jenifer")
console.log(result);

var result= femaleMarriageEligibility("female","25","Malinda Gates")
console.log(result);
