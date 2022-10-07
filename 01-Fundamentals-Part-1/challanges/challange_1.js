const markHeight = prompt("Mark's heigth:");
const markWeight = prompt("Mark's weight:");
const markBMI = markWeight / markHeight ** 2;

const johnHeight = prompt("John's height:");
const johnWeight = prompt("Johg's weight:");
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI:" + markBMI);
console.log("John's BMI:" + johnBMI);
console.log(markHigherBMI);

if (markHigherBMI) {
  console.log(
    `Mark's BMI ${markBMI.toFixed(1)} is higher than John's ${johnBMI.toFixed(
      1
    )}!`
  );
} else {
  console.log(
    `John's BMI ${johnBMI.toFixed(1)} is higher than Mark's ${markBMI.toFixed(
      1
    )}`
  );
}
