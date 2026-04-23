// Funktionen – Lösungen

const anna = { id: 1, name: "Anna", email: "anna@example.com", isLoggedIn: true };
const ben  = { id: 2, name: "Ben",  email: "ben@example.com",  isLoggedIn: false };

// Aufgabe 1
function greetUser(name) {
  return "Hallo, " + name + "!";
}

console.log(greetUser(anna.name));
console.log(greetUser(ben.name));

// Aufgabe 2function isLoggedIn(user) {
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

// Aufgabe 4
function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log(calculateTotal(49.99, 2));  // 99.98
console.log(calculateTotal(19.99, 5));  // 99.95
console.log(calculateTotal(79.99, 1));  // 79.99

// Aufgabe 5
const products = [
  { id: 1, name: "Sneaker",  price: 49.99, inStock: true  },
  { id: 2, name: "T-Shirt",  price: 19.99, inStock: false },
  { id: 3, name: "Backpack", price: 79.99, inStock: true  },
];

function calculateEndPrice(product) {
  return product.price + 4.99;
}

function printProduct(product) {
  console.log(product.name);
  console.log(calculateEndPrice(product));
}

printProduct(products[0]); // "Sneaker", 54.98
printProduct(products[1]); // "T-Shirt", 24.98
printProduct(products[2]); // "Backpack", 84.98
