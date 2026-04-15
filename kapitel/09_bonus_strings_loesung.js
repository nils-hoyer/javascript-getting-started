// Bonus: Strings – Lösungen

const user = {
  id: 1,
  name: "Anna",
  email: "  anna@example.com  ",
};

// Aufgabe 1
const greeting = "Hallo, " + user.name + "! Deine E-Mail: " + user.email.trim();
console.log(greeting);

// Aufgabe 2
const cleanEmail = user.email.trim();
console.log(cleanEmail);

// Aufgabe 3
console.log(cleanEmail.includes("@example.com"));

// Aufgabe 4
console.log(user.name.toLowerCase());

// Aufgabe 5
console.log(cleanEmail.endsWith("@example.com"));
