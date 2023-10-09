var arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log("Log first and last element : ",arrayFruits[0],arrayFruits[arrayFruits.length-1]);   
console.log("====================================");
console.log("Add Papaya element before the Banana :");
arrayFruits.unshift("Papaya");
console.log(arrayFruits);
console.log("====================================");
console.log("Remove Mango from the array :");
 arrayFruits.splice(4,1)
console.log(arrayFruits);
console.log("====================================");
console.log("Add Pineapple element at last position :");
arrayFruits.push("Pineapple");
console.log(arrayFruits);
console.log("====================================");
console.log("Insult Dragon fruit element before Water melan :");
arrayFruits.splice(4,0,"Dragon fruit")
console.log(arrayFruits);
console.log("====================================");
console.log("Replace Orange with Kiwi : ");
arrayFruits.splice(2,1,"kivi");
console.log(arrayFruits);
console.log("====================================");
console.log("elements starting from the 1 to 4");
var ele = arrayFruits.slice(1,4)
console.log(ele);
console.log("====================================");
console.log("Only select last 3 elements & log on console :");
var arrayFruits = ["Papaya","Banana","Kivi","Apple","Dragon fruits","Water Melon","Pineapple"];
const arraySliced = arrayFruits.slice(4)
console.log(arraySliced);


