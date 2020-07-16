const user = {
  name: "Mariana",
  transactions: [],
  balance: 0,
};

function createTransaction(transactions) {
  user.transactions.push(transactions);
  if (transactions.type == "credit") {
    user.balance += transactions.value;
  } else if (transactions.type == "debit") {
    user.balance -= transactions.value;
  }
}

function getHigherTransactionByType(type) {
let checker = 0;
    for (transaction of user.transactions) {
    if(transaction.type == type)
      if (transaction.value > checker) {
        checker = transaction.value;
        more = transaction;
      }
    }
    console.log(more);
}

function getAverageTransactionValue() {
    let sum = 0
    let  Average = 0
    for (transaction of user.transactions) {
        sum += transaction.value
        Average = sum / user.transactions.length
    }
    console.log(Average)
}

function getTransactionsCount() {
    let count = {
          credit: 0,
          debit: 0
    }
    for (transaction of user.transactions) {
        if(transaction.type == "credit") {
            count.credit++
        }else if(transaction.type == "debit") {
            count.debit++
        }
    }
    console.log(count)
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "credit", value: 30 });
createTransaction({ type: "credit", value: 30 });
createTransaction({ type: "credit", value: 30 });
createTransaction({ type: "credit", value: 30 });
createTransaction({ type: "debit", value: 180 });

console.log(`O Saldo atual é de R$${user.balance}`)

getHigherTransactionByType("credit")
getHigherTransactionByType("debit")

getAverageTransactionValue()
getTransactionsCount()