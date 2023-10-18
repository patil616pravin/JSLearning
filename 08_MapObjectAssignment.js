class Bank {
    constructor(bankName, location, accountNo, ifsc, interestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
}
const axis_bank = new Bank('Axis Bank', 'Mumbai', '02225355454', 'AXIS00001234', 4.5);
const sbi_bank = new Bank('SBI Bank', ' Delhi', '15225325255', 'SBIN0001234', 3.5);
const icici_bank = new Bank('ICICI Bank', 'Pune', '0225565433', 'ICIC0001234', 4.0);
const kotak_bank = new Bank('Kotak Bank', 'Chennai', '0244585785', 'KKBK0001234', 4.2);
const hdfc_bank = new Bank('HDFC Bank', 'Mumbai', '02221221423', 'HDFC0001234', 4.8);
const punjab_bank = new Bank('Punjab Bank', '322212555', 'PNB001', 'PNB0001234', 3.8);

const BankMap = new Map();
BankMap.set(axis_bank.accountNo,axis_bank);
BankMap.set(sbi_bank.accountNo,sbi_bank);
BankMap.set(icici_bank.accountNo,icici_bank);
BankMap.set(kotak_bank.accountNo,kotak_bank);
BankMap.set(hdfc_bank.accountNo,hdfc_bank);
BankMap.set(punjab_bank.accountNo,punjab_bank);

const totalKeys = BankMap.keys();
for (const key of totalKeys) {
    const details = BankMap.get(key);
    console.log(`Bank Name: ${details.bankName} Account NO: ${details.accountNo} Interest Rate: ${details.interestRate}`);
}