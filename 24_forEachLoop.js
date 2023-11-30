console.log(`======== forEach() loop to traverse Set  ===============`);
const setOfRollNum = new Set();
setOfRollNum.add(11);
setOfRollNum.add(22);
setOfRollNum.add(11);
setOfRollNum.add(33);
setOfRollNum.add(22);
setOfRollNum.add(44);
setOfRollNum.add(55);

setOfRollNum.forEach( (value)=> {
    console.log(value);
} );


console.log(`======== forEach() loop to traverse Map  ===============`);
const map = new Map();
map.set(11, 'Jenny');
map.set(22, 'Bill');
map.set(33, 'Elon');
map.set(44, 'Stew');

map.forEach( (value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
} );