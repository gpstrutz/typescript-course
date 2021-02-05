// noImplicityAny
function sum(a: any, b: any) {
    return a + b
}

// strictNullChecks
function greet(isMorning: boolean) {
    let greeting: string

    if( isMorning ) {
        greeting = 'Good Morning'
    } else {
        greeting = 'Good Night'
    }

    return greeting
}