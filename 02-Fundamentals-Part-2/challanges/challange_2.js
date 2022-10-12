function calcTip(bills) {
  const billsWithTip = [];
  for (let index = 0; index < bills.length; index++) {
    const bill = bills[index];
    if (50 <= bill && bill <= 300) {
      billsWithTip.push((bill * 1.15).toFixed(2));
    } else {
      billsWithTip.push((bill * 1.2).toFixed(2));
    }
  }
  return billsWithTip;
}

const result = calcTip([125, 555, 44]);
console.log(result);
