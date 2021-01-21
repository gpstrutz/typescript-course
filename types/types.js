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
