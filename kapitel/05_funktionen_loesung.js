// Funktionen – Lösungen

// Aufgabe 1
function greetUser(name) {
  return "Hallo, " + name + "!";
}

console.log(greetUser("Anna"));
console.log(greetUser("Ben"));

// Aufgabe 2
const anna = { id: 1, name: "Anna", email: "anna@example.com", isLoggedIn: true };
const ben  = { id: 2, name: "Ben",  email: "ben@example.com",  isLoggedIn: false };

function isLoggedIn(user) {
  return user.isLoggedIn;
}

console.log(isLoggedIn(anna));
console.log(isLoggedIn(ben));

// Aufgabe 3
function logoutUser(user) {
  user.isLoggedIn = false;
}

console.log(anna);
logoutUser(anna);
console.log(anna);
