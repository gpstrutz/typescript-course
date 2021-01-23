// String

let myName = 'Giovanni'
console.log(myName)

// Number
let age = 23
let weight = 1.89
console.log(age, weight)

// Boolean
let hasHobbies = false
console.log(hasHobbies)

// Explicited Types
let myBook: string

// Arrays
let myHobbies = ["Cook", "Play", "Read"]
let hobbies: string[] = ["Cook", "Play", "Read"]
console.log(myHobbies, hobbies)

// Tuples
let address: [string, number] = ["Av Paulista", 1023]
console.log(address)

// Enums
enum Color {
    Blue,
    Grey,
    Purple
}

let myColor: Color = Color.Blue
console.log(myColor)

enum weekDays {
    "sunday" = "sun",
    "monday" = "mon",
    "tuesday" = "tue",
    "wednesday" = "wed",
    "thursday" = "thu",
    "friday" = "fri",
    "saturday" = "sat"
}

let day: weekDays
day = weekDays["monday"]
console.log(day)


// Any
let car: any = "Volvo"
console.log(car)

car = {
    brand: "Volvo",
    model: 2020
}

console.log(car)


// Functions

function returnMyName(): string {
    return myName
}
console.log(returnMyName())

function greeting(): void {
    console.log("Hello")
}
console.log(greeting())

function sumNumbers(numA: number, numB: number): number {
    return numA + numB
}
console.log(sumNumbers(10, 20))

function squareNumbers(x: number, y: number): number {
    return x ** y
}

// Functions like Types

let squareNumber: (numA: number, numB: number) => number
squareNumber = squareNumbers

console.log(squareNumber(10, 2))


// Objects

let user: { name: string, lastname: string, age: number } = {
    name:"Giovanni",
    lastname: "Strutz",
    age: 23
}

console.log(user)



// Challange I - Employee

/*
    Criar um objeto funcionario com:
        - Array de strings com nome dos supervisores;
        - Função de bater ponto que recebe a hora (numero)
        e retorna uma string
            -> Ponto Normal ( <= 8 )
            -> Fora do Horário ( > 8 )
*/

// The challange answer are in employeeChallange.ts


// Union Types

let score: number | string
score = 10

console.log(score)

score = "Giovanni"

console.log(score)


// Challange II - Bank Account

/*
    - Convert Javascript code in Typescript code;
    - The challange's answer are in bankChallange.ts
*/