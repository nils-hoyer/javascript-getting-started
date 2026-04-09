// Transfer – Online Banking – Lösungen

const accounts = [
  { id: 1, owner: "Anna",  iban: "DE89370400440532013000", balance: 1240.50, isActive: true  },
  { id: 2, owner: "Ben",   iban: "DE75512108001245126199", balance:  320.00, isActive: false },
  { id: 3, owner: "Clara", iban: "DE62200400600543510700", balance: 5890.00, isActive: true  },
  { id: 4, owner: "David", iban: "DE91100000000123456789", balance:   75.20, isActive: true  },
];

// Aufgabe 1
const newAccount = { id: 5, owner: "Eva", iban: "DE12345678901234567890", balance: 500.00, isActive: true };
accounts.push(newAccount);
console.log(accounts);

// Aufgabe 2
function printAccount(account) {
  console.log(account.owner);
  console.log(account.balance);
}

accounts.forEach(a => printAccount(a));

// Aufgabe 3
const activeAccounts = accounts.filter(a => a.isActive);
console.log(activeAccounts);

const clara = accounts.find(a => a.owner === "Clara");
console.log(clara);

// Aufgabe 4
accounts.forEach(a => {
  const info = "Inhaber: " + a.owner + " | IBAN: " + a.iban + " | Kontostand: " + a.balance;
  console.log(info);
});

// Aufgabe 5
const owners = accounts.map(a => a.owner);
console.log(owners);

// Bonus
function checkBalance(account) {
  if (account.balance < 100) {
    console.log(account.owner + ": Achtung: Niedriger Kontostand");
  } else {
    console.log(account.owner + ": Kontostand in Ordnung");
  }
}

accounts.forEach(a => checkBalance(a));
