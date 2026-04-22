// Mini-Projekt: Online Banking – Lösung

// Datenstrukturen
const accounts = [
    { id: 1, owner: "Anna",  balance: 1200, isActive: true  },
    { id: 2, owner: "Max",   balance: 350,  isActive: true  },
    { id: 3, owner: "Clara", balance: 0,    isActive: false },
];

const transactions = [
    { id: 1, accountId: 1, type: "einzahlung",  amount: 500,  description: "Gehalt"      },
    { id: 2, accountId: 1, type: "auszahlung",  amount: 80,   description: "Miete"       },
    { id: 3, accountId: 1, type: "auszahlung",  amount: 20,   description: "Einkaufen"   },
    { id: 4, accountId: 2, type: "einzahlung",  amount: 200,  description: "Überweisung" },
    { id: 5, accountId: 2, type: "auszahlung",  amount: 50,   description: "Tanken"      },
];


// ---
// Feature 1: Kontoverwaltung
// ---

// Aufgabe 1.1
function addAccount(accounts, newAccount) {
    accounts.push(newAccount);
    return accounts;
}

console.log(addAccount(accounts, { id: 4, owner: "Tom", balance: 100, isActive: true }));


// Aufgabe 1.2
function updateBalance(accounts, id, newBalance) {
    const account = accounts.find(function(a) { return a.id === id; });
    account.balance = newBalance;
    return accounts;
}

console.log(updateBalance(accounts, 1, 1500));


// Aufgabe 1.3
function deleteAccount(accounts, id) {
    return accounts.filter(function(a) { return a.id !== id; });
}

console.log(deleteAccount(accounts, 3));


// ---
// Feature 2: Kontobewegungen abrufen
// ---

// Aufgabe 2.1
function getTransactions(transactions, accountId) {
    return transactions.filter(function(t) { return t.accountId === accountId; });
}

console.log(getTransactions(transactions, 1));


// Aufgabe 2.2
function getBalance(transactions, accountId) {
    const accountTransactions = getTransactions(transactions, accountId);
    let balance = 0;
    accountTransactions.forEach(function(t) {
        if (t.type === "einzahlung") {
            balance += t.amount;
        } else {
            balance -= t.amount;
        }
    });
    return balance;
}

console.log(getBalance(transactions, 1)); // 400


// ---
// Feature 3: Kontobewegungen ausgeben
// ---

// Aufgabe 3.1
function printTransactions(transactions) {
    transactions.forEach(function(t) {
        console.log(t.type + " | " + t.amount + " € | " + t.description);
    });
}

printTransactions(getTransactions(transactions, 1));


// Aufgabe 3.2
function printByType(transactions, type) {
    const filtered = transactions.filter(function(t) { return t.type === type; });
    filtered.forEach(function(t) {
        console.log(t.type + " | " + t.amount + " € | " + t.description);
    });
}

printByType(transactions, "einzahlung");
printByType(transactions, "auszahlung");
