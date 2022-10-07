let js = "amazing";
console.log(5 + 3 + 5 - 2);

console.log("Jonas"); // "Jonas" -> value
console.log(23); // 23 -> value

let firstName = "Jonas"; // firstName -> variable, 'Jonas' -> value
console.log(firstName);

let PI = 3.1413;

let myFirstJob = "Programmer"; // use descriptive variable names

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);

let year;
console.log(year); // value is undefined
console.log(typeof year); // variable type is undefined

console.log(typeof null); // variable type is object -> bug

// const firstName1 = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year1 = 2037;
// const jonas =
//   "I'm " +
//   firstName1 +
//   ", a " +
//   (year1 - birthYear) +
//   " years old " +
//   job +
//   " !";

// console.log(jonas);

// const jonasNew = `I'm ${firstName1}, a ${year1 - birthYear} years old ${job}.`;
// console.log(jonasNew);
const age = 17;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young! Wait another ${yearsLeft} years :`);
}
const inputYear = "1991";
console.log(Number(inputYear));
