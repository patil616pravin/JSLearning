console.log("----------Two function with no arguments and no returns-----------");
console.log("---------Function 1-----------");
function HelloMessage(){
    console.log("Hello everyone");
    console.log("Pravin here");
}
HelloMessage()
console.log("-------------------------------------------------------------------");
console.log("--------------Function 2--------------");
function JS(){
    console.log("I love JS");
}
JS()
console.log("---------------Function Details with arguments -----------------");
function details(firstname,lastname,college){ 
console.log("Fisrt Name =",firstname);
console.log("last Name =" ,lastname);
console.log("College Name =",college);
}
details("Pravin","Patil","SIGCE Mumbai");

console.log("---------------Function Swap with arguments and no returns------------------");
function swap(valueOne,valueTwo){
    console.log("Before Swap ==>",valueOne,valueTwo);
    temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;
    console.log("After Swap ==>",valueOne,valueTwo);
}
swap (100,200);
swap ("Virat","Anushka");
console.log("---------------Function addthreevalue with arguments and no returns-----------------");
function addthreevalue(valueOne,valueTwo,valueThree){
    console.log("First Value ==>",valueOne);
    console.log("Second Value =>",valueTwo);
    console.log("Third Value ==>",valueThree);
    console.log("Addition of three value ==>",valueOne+valueTwo+valueThree);
}
addthreevalue(10.23,600,40);
console.log("-----------------------------------------------------------------------------");
function addthreevalue(valueOne,valueTwo,valueThree){
    console.log("First Value ==>",valueOne);
    console.log("Second Value ==>",valueTwo);
    console.log("Third Value ==>",valueThree);
    console.log("Addition of three value ==>",valueOne+valueTwo+valueThree);
}
addthreevalue(" Hello"," Good"," Evening");