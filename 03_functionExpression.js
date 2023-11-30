var show = function(){
    console.log(`Inside Function Expression...`);
}
show();

var add = function(value1, value2){
    console.log(value1+value2);
}
add(20, 10);

var square = function(value){
    return value * value;
}
var result = square(25);
console.log(`Square of 25 is ${result}`);

var girlAge = 19;
if (girlAge>=18) {
    console.log(`You could go inside office`);
    console.log(`Have you informed your parent`);
    console.log(`Signed.. Congrats!!!`);
}
console.log(`Daily life`);

var elonAge = 16;
// If age is greater than equal 18 then allow for vote else no.
if (elonAge>=18) {
    console.log(`Welcome.. Elon`);
    console.log(`Please let me mark your finger with ink`);
    console.log(`Please now vote`);
} else {
    console.log(`Yet you are not eligible for vote`);
    console.log(`Try next time please!`);
}
console.log(`==================`);