// Array Funktionen – Lösungen

const users = [
  { id: 1, name: "Anna",  email: "anna@example.com",  isLoggedIn: true  },
  { id: 2, name: "Ben",   email: "ben@example.com",   isLoggedIn: false },
  { id: 3, name: "Clara", email: "clara@example.com", isLoggedIn: true  },
  { id: 4, name: "David", email: "david@example.com", isLoggedIn: false },
];

// Aufgabe 1
users.forEach((u) => console.log(u.name));

// Aufgabe 2
const loggedIn = users.filter((u) => u.isLoggedIn);
console.log(loggedIn);

// Aufgabe 3
const found = users.find((u) => u.name === "Anna");
console.log(found);

// Aufgabe 4
const emails = users.map((u) => u.email);
console.log(emails);

// Aufgabe 5
const loggedOutNames = users
  .filter((u) => !u.isLoggedIn)
  .map((u) => u.name);
console.log(loggedOutNames);
