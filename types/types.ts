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