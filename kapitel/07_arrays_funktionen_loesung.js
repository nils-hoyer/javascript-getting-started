// Array Funktionen – Lösung

const users = [
    { id: 1, userName: "Max",  email: "max@example.com",  isLoggedIn: true  },
    { id: 2, userName: "Anna", email: "anna@example.com", isLoggedIn: false },
    { id: 3, userName: "Tom",  email: "tom@example.com",  isLoggedIn: true  },
];

// Aufgabe 1
users.forEach(function(user) {
    console.log(user.userName);
});


// Aufgabe 2
const loggedInUsers = users.filter(function(user) {
    return user.isLoggedIn;
});
console.log(loggedInUsers);


// Aufgabe 3
const anna = users.find(function(user) {
    return user.userName === "Anna";
});
console.log(anna);


// Aufgabe 4
const emails = users.map(function(user) {
    return user.email;
});
console.log(emails);


// Aufgabe 5
const notLoggedInNames = users
    .filter(function(user) {
        return !user.isLoggedIn;
    })
    .map(function(user) {
        return user.userName;
    });
console.log(notLoggedInNames);
