let professor={
    name:"Sir Gajanan",
    age:35,
    subject:"FrontEnd Development",
    className:"CodeMind",
    teachingAbility:"Superb",
  
}
console.log(`(01===>) Object:professor=======================================================`);
console.log(professor);
console.log(`(02===>)Adding 'degree' object into 'professor object================================='`);
professor.degree={
    engineering:"CSC",
    PHD:"Adv Computing",
    MTech:"CSC",
}
console.log(professor.degree);

console.log(`(03===>)Adding array "certificates" into object 'professor===================='`);

professor.certificates=["Hacker Rank Participation","Certification in IFE Course","Certification in Adv Programming"];
console.log(professor.certificates);

console.log(`(04===>)Adding new property totalExperience:"14 Years"=====================`);
professor.totalExperience="14 Years";
console.log(professor.totalExperience);

console.log(`(05===>) Modifying age property=============== `);
professor.age=30;
console.log(professor.age);

console.log(`(06===>)Adding new certificate at last of array========`);
professor.certificates.push("Oracle Certified");
console.log(professor.certificates);

console.log(`(07===>) Log the last element of certificate array=========`);

let index=professor.certificates.length;
console.log(professor.certificates[index-1]);

console.log(`(08====>)Log complete Object============================`);
console.log(professor);

console.log(`Traverse array --> certificates using for of loop=============`);

for(const element of professor.certificates){
    console.log(element);
}