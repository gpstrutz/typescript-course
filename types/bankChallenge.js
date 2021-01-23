"use strict";
// Challenge 2 -> Bank Account
var newAccount = {
    balance: 3456,
    deposit: function (depositValue) {
        this.balance += depositValue;
    }
};
var newClient = {
    name: 'Ana Silva',
    contacts: ['34567890', '98765432'],
    bankAccount: newAccount
};
console.log(newClient);
