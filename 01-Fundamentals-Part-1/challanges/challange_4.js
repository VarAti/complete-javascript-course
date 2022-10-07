// const bill = 275;
// const bill = 40;
const bill = 430;
let tip;
const billValue = `The bill was ${bill}, the tip was ${(tip =
  50 <= bill && bill <= 300
    ? bill * 0.15
    : bill * 0.2)} and the total value is ${bill + tip}`;

console.log(billValue);
