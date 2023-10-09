

const bankSbi = {
  bankName: "SBI Bank",
  accountantName: "Pravin Patil",
  accountNumber: 2245876549,
  Branch: "Kalyan",
  IFSC: "SBINO00056",
};

//Create the object → ‘bankLocation’ using literals with properties: street, city, pin
const bankLocation = {
  street: "Shivaji Chowk",
  city: "Kalyan",
  pin: 421102,
};

//Clone the step 1 ( bankSbi ) and step 2 ( bankLocation ) objects using Object.assign( )

const clonedbankSbi = Object.assign(bankSbi);
const clonedbankLocation = Object.assign(bankLocation);

console.log("cloned banksbi :", clonedbankSbi);
console.log("cloned banklocation :", clonedbankLocation);

//Create the object using object literals → rateOfInterest with properties
const rateOfInterest = {
  homeLoanInterest: 5.1,
  personalLoanInterest: 8.2,
  dueInterest: 3.2,
};
console.log(rateOfInterest);
const sbiDetails = Object.assign(bankSbi, bankLocation, rateOfInterest);
console.table(sbiDetails);


for (const key in sbiDetails) {
  if (Object.hasOwnProperty.call(sbiDetails, key)) {
    const element = sbiDetails[key];
    console.log(`${key}: ${sbiDetails[key]}`);
  }
}
