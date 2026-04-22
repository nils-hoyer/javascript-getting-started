// Bonus: Vergleiche & if/else – Lösung

// Aufgabe 1
const user1 = { userName: "Anna", isLoggedIn: true };

if (user1.isLoggedIn) {
    console.log("Willkommen, Anna!");
} else {
    console.log("Bitte einloggen.");
}


// Aufgabe 2
const user2 = { userName: "Max", role: "admin" };

if (user2.role === "admin") {
    console.log("Admin-Zugang.");
} else {
    console.log("Kein Admin-Zugang.");
}


// Aufgabe 3
const user3 = { userName: "Tom", age: 20 };

if (user3.age >= 18) {
    console.log("Zugang erlaubt.");
} else {
    console.log("Kein Zugang.");
}


// Aufgabe 4
const user4 = { userName: "Max", isLoggedIn: true, role: "admin" };

if (user4.isLoggedIn && user4.role === "admin") {
    console.log("Admin-Bereich betreten.");
} else {
    console.log("Kein Zugriff.");
}


// Aufgabe 5
const user5 = { userName: "Max", role: "moderator" };

if (user5.role === "admin" || user5.role === "moderator") {
    console.log("Zugang gewährt.");
} else {
    console.log("Kein Zugang.");
}
