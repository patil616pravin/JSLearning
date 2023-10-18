// Step 1: Create a constructor function
function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
  }
  
  // Step 2: Create objects and log their details
  const yesBank = new Bank("Yes Bank", "Mumbai", "YESB0001", "12345");
  const sbiBank = new Bank("State Bank of India", "New Delhi", "SBIN0001", "54321");
  const mahBank = new Bank("Maharashtra Bank", "Pune", "MAHB0001", "98765");
  const axisBank = new Bank("Axis Bank", "Bangalore", "AXIS0001", "56789");
  
  console.log(`Bank Details for Yes Bank: ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode}`);
  console.log(`Bank Details for SBI Bank: ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode}`);
  console.log(`Bank Details for Mah Bank: ${mahBank.bankName}, ${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode}`);
  console.log(`Bank Details for Axis Bank: ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode}`);
  
  // Step 3: Add openTime on the prototype object
  Bank.prototype.openTime = "9 AM IST";
  
  // Step 4: Add closeTime on the prototype object
  Bank.prototype.closeTime = "6 PM IST";
  
  // Step 5: Log openTime and closeTime of sbiBank
  console.log(`SBI Bank Opening Time: ${sbiBank.openTime}`);
  console.log(`SBI Bank Closing Time: ${sbiBank.closeTime}`);
  
  // Step 6: Log bankName and closeTime of axisBank
  console.log(`Axis Bank Name: ${axisBank.bankName}`);
  console.log(`Axis Bank Closing Time: ${axisBank.closeTime}`);
  
  // Step 7: Log bankName, branchCode, and openTime of yesBank
  console.log(`Yes Bank Name: ${yesBank.bankName}`);
  console.log(`Yes Bank Branch Code: ${yesBank.branchCode}`);
  console.log(`Yes Bank Opening Time: ${yesBank.openTime}`);
  