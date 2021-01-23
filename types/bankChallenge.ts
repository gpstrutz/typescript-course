// Challenge 2 -> Bank Account

/**
 * Transformar o código abaixo (JS) para Typescript
 */


/*
    let contaBancaria = {
        saldo: 3456,
        depositar(valor) {
            this.saldo += valor
        }
    }
     
    let correntista = {
        nome: 'Ana Silva',
        contaBancaria: contaBancaria,
        contatos: ['34567890', '98765432']
    }
     
    correntista.contaBancaria.depositar(3000)
    console.log(correntista)
*/

type BankAccount = {
    balance: number,
    deposit: (value: number) => void,
}

type Client = {
    name: string,
    bankAccount: BankAccount,
    contacts: string[]
}

let newAccount: BankAccount = {
    balance: 3456,
    deposit(depositValue) {
        this.balance += depositValue
    }
}

let newClient: Client = {
    name: 'Ana Silva',
    contacts: ['34567890', '98765432'],
    bankAccount: newAccount
}

console.log(newClient)