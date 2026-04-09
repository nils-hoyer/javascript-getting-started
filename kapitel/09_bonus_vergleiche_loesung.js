// Bonus: Vergleiche & if/else – Lösungen

const user = {
  name: "Anna",
  age: 17,
  role: "admin",
  isLoggedIn: true,
};

// Aufgabe 1
if (user.isLoggedIn) {
  console.log("Willkommen, " + user.name + "!");
} else {
  console.log("Bitte einloggen.");
}

// Aufgabe 2
if (user.role === "admin") {
  console.log("Admin-Zugang.");
} else {
  console.log("Kein Admin-Zugang.");
}

// Aufgabe 3
if (user.age >= 18) {
  console.log("Zugang erlaubt.");
} else {
  console.log("Kein Zugang.");
}