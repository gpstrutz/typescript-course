"use strict";
// noImplicityAny
function sum(a, b) {
    return a + b;
}
// strictNullChecks
function greet(isMorning) {
    let greeting;
    if (isMorning) {
        greeting = 'Good Morning';
    }
    else {
        greeting = 'Good Night';
    }
    return greeting;
}
//# sourceMappingURL=compiler.js.map