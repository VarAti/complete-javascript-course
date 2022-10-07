const dolphinsData1 = [96, 108, 89];
const dolphinsData2 = [97, 112, 81];
const dolphinsData3 = [97, 112, 101];

let sum = 0;
let isMoreThan100Dolphin = false;

for (let index = 0; index < dolphinsData2.length; index++) {
  const element = dolphinsData2[index];
  if (element >= 100) isMoreThan100Dolphin = true;
  sum += element;
}

const dolphinsAverage = (sum / 3).toFixed(1);

const koalasData1 = [88, 91, 110];
const koalasData2 = [109, 95, 86];
const koalasData3 = [88, 91, 106];

sum = 0;
let isMoreThan100Koala = false;

for (let index = 0; index < koalasData2.length; index++) {
  const element = koalasData2[index];
  if (element >= 100) isMoreThan100Koala = true;
  sum += element;
}

const koalasAverage = (sum / 3).toFixed(1);

if (dolphinsAverage > koalasAverage && isMoreThan100Dolphin) {
  console.log(`Dolphins win, avg:${dolphinsAverage}`);
} else if (koalasAverage > dolphinsAverage && isMoreThan100Koala) {
  console.log(`Koalas win, avg:${koalasAverage}`);
} else if (
  koalasAverage === dolphinsAverage &&
  isMoreThan100Dolphin &&
  isMoreThan100Koala
) {
  console.log(
    `Draw! Koala's avg:${koalasAverage}, Dolphin's avg:${dolphinsAverage}`
  );
} else {
  console.log(
    `Nobody win the trophy! Koala's avg:${koalasAverage}, Dolphin's avg:${dolphinsAverage}`
  );
}
