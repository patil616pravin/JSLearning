let person = {
    Name :"Jenny",
    Age : 22,
    isMarried:true,
    show:function(){
        console.log(`Hi Hello,How are you ?`);
    }
};
console.log(typeof person);
console.log(person);

//Property access 
//1.  Dot Notation
let personName = person.Name;
console.log(`Person name is : ${personName}`);

console.log(`Person age is : ${person.Age}`);

//2.  [] Notation
let nameofperson = person["Name"]
console.log(`person name is : ${nameofperson}`);

//adding property in object 
console.log("Adding properties in object ");
person.city = "Mumbai"
console.log(person);
//console.table(person);

console.log("Update properties in object ");
person.Age = 20;
console.log(person);

console.log("Delete properties from an object ");
delete person.Age;
console.log(person);

console.log("Adding method in object ");
person.show();
person.display=function(){
    console.log(`I am inside display function`);
}
console.log(person);
person.display();

console.log("==========Nested Object=========");
const personElon = {
    Name:"Elon Musk",
    Age: 54, 
    totalcompanies: 9,
    companies:{
        Tesla:{
            companyName:"Tesla",
            totalemployees:4500,
            location:"USA"
        },
        twitter: "150B USD",
        spacex:"200B USD"
    },
    kidsName: ["Deny","Weny","Rony","Randy"]
}
console.log(personElon.companies.Tesla);
console.log(personElon.kidsName[0]);
console.log(personElon.kidsName.length);
//"stew"
personElon.kidsName.push("stew");

for (const kid of personElon.kidsName){
    console.log(kid);
}
console.log(personElon.companies.Tesla);
