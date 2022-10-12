'use strict';

function calcTotal(bill) {
    if (50 <= bill && bill <= 300) {
        return Number((bill * 1.15).toFixed(2));
    } else {
        return bill * 1.2;
    }
}
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        sum += value;
    }
    return (sum / arr.length).toFixed(2);
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const totals = [];

for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    totals.push(calcTotal(bill));
}

console.log(totals);
console.log(calcAverage(totals));
