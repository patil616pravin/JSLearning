const jsonObj = `{
    "name": "Aleix meloni",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
        "street": "32 Laham st",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`;
const jobj = JSON.parse(jsonObj);
const roles = jobj.role;
console.log(`We Log Dev Here:- ${roles[0]}`);

const fullName = jobj.name;
const lastName = fullName.split(' ').slice(-1)[0];
console.log("We Log Last Name:", lastName);

const doj = jobj.doj;
const joiningYear = new Date(doj).getFullYear(); 
console.log("We Log Here Joining Year:", joiningYear);