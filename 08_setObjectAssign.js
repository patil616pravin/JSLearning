class Bank {
    constructor(bank_name, location, account_no, ifsc, interest_rate) {
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate;
    }
}
const axis_bank = new Bank('Axis Bank', 'Mumbai', 'AX001', 'AXIS00001234', 4.5);
const sbi_bank = new Bank('SBI Bank', ' Delhi', 'SBI001', 'SBIN0001234', 3.5);
const icici_bank = new Bank('ICICI Bank', 'Pune', 'ICICI001', 'ICIC0001234', 4.0);
const kotak_bank = new Bank('Kotak Bank', 'Chennai', 'KOT001', 'KKBK0001234', 4.2);
const hdfc_bank = new Bank('HDFC Bank', 'Mumbai', 'HDFC001', 'HDFC0001234', 4.8);
const panjab_bank = new Bank('Punjab Bank', 'New Delhi', 'PNB001', 'PNB0001234', 3.8);

const bankSet = new Set([axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, panjab_bank]);
for (const bank of bankSet) {
    console.log(`"Bank Name :"${bank.bank_name},       "Location :"${bank.location}`);
}