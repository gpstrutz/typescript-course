"use strict";
// Challenge 2 -> Bank Account
let newAccount = {
    balance: 3456,
    deposit(depositValue) {
        this.balance += depositValue;
    }
};
let newClient = {
    name: 'Ana Silva',
    contacts: ['34567890', '98765432'],
    bankAccount: newAccount
};
console.log(newClient);
//# sourceMappingURL=bankChallenge.js.map