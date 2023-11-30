console.log("===============================================assignment 1========================");

console.log("===============================================Q1===");
const assig1=()=> {
console.log("printing without no arg and return inside arrow function:-Good Morning, Today is Wednesday");
}
assig1();
console.log("===============================================Q2===");
const multi=(num1,num2,num3=1)=>{
    const result = num1*num2*num3;
    console.log(`multiplication : ${result}`);

}
multi(5,5,2)
multi(10,4)

console.log("===============================================Q3===");
const add=(arg1,arg2,arg3,arg4,arg5)=>{
    const result = arg1+arg2+arg3+arg4+arg5;
    return result;
}
const sum = add( 100, 100, 200, 349, 756);
console.log(`addition is: ${sum}`);
const str = add("I am ", " learning ", " ES6 ", " features ", " in depth");
console.log(`Concatenated value printed:- ${str}`);