"use strict";
// String
var myName = 'Giovanni';
console.log(myName);
// Number
var age = 23;
var weight = 1.89;
console.log(age, weight);
// Boolean
var hasHobbies = false;
console.log(hasHobbies);
// Explicited Types
var myBook;
// Arrays
var myHobbies = ["Cook", "Play", "Read"];
var hobbies = ["Cook", "Play", "Read"];
console.log(myHobbies, hobbies);
// Tuples
var address = ["Av Paulista", 1023];
console.log(address);
// Enums
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Grey"] = 1] = "Grey";
    Color[Color["Purple"] = 2] = "Purple";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
var weekDays;
(function (weekDays) {
    weekDays["sunday"] = "sun";
    weekDays["monday"] = "mon";
    weekDays["tuesday"] = "tue";
    weekDays["wednesday"] = "wed";
    weekDays["thursday"] = "thu";
    weekDays["friday"] = "fri";
    weekDays["saturday"] = "sat";
})(weekDays || (weekDays = {}));
var day;
day = weekDays["monday"];
console.log(day);
// Any
var car = "Volvo";
console.log(car);
car = {
    brand: "Volvo",
    model: 2020
};
console.log(car);
// Functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
function greeting() {
    console.log("Hello");
}
console.log(greeting());
function sumNumbers(numA, numB) {
    return numA + numB;
}
console.log(sumNumbers(10, 20));
function squareNumbers(x, y) {
    return Math.pow(x, y);
}
// Functions like Types
var squareNumber;
squareNumber = squareNumbers;
console.log(squareNumber(10, 2));
// Objects
var user = {
    name: "Giovanni",
    lastname: "Strutz",
    age: 23
};
console.log(user);
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
var score;
score = 10;
console.log(score);
score = "Giovanni";
console.log(score);
// Challange II - Bank Account
/*
    - Convert Javascript code in Typescript code;
    - The challange's answer are in bankChallange.ts
*/ 
