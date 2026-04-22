// Funktionen als Werte und Parameter – Lösung

// Aufgabe 1
function greetUser(name) {
    return "Hallo, " + name + "!";
}

const greet = greetUser;
console.log(greet("Max")); // "Hallo, Max!"


// Aufgabe 2
function getFullName(user) {
    return user.firstName + " " + user.lastName;
}

const formatUser = getFullName;

const user = { firstName: "Anna", lastName: "Müller" };
console.log(formatUser(user)); // "Anna Müller"


// Aufgabe 3
const greetArrow = (name) => {
    return "Hallo, " + name + "!";
};

console.log(greetArrow("Max")); // "Hallo, Max!"


// Aufgabe 4
const greetShort = (name) => "Hallo, " + name + "!";

console.log(greetShort("Max")); // "Hallo, Max!"


// Aufgabe 5
function doublePrice(number) {
    return number * 2;
}

function calculate(number, operation) {
    return operation(number);
}

console.log(calculate(5, doublePrice)); // 10
