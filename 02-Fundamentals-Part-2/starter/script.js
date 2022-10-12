'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriverLicence = true;
// if (hasDriversLicence) console.log("I can drive");

// const interface = "Audio";

function logger() {
    console.log('My name is Ati');
}

// calling, running, ivoking the function
logger();

// function declaration
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(4, 0);
console.log(appleJuice);

// function expression
const calcAge = function (birthYear) {
    return 2022 - birthYear;
};

const age = calcAge(1975);

// arrow function
const calcAge2 = (birthYear) => 2022 - birthYear;

const yearsUntilRetirement = (birthYear) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return retirement;
};

const jonas = {
    firstName: "Jonas's",
    lastName: 'Schmidtmann',
    birthYear: 1991,
    age: null,
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    job: 'teacher',
    hasDriverLicence: function () {
        return this.age >= 18;
    },
};

console.log(
    `${jonas.firstName} is a 
  ${jonas.age == null ? jonas.calcAge() : jonas.age} years old 
  ${jonas.job} and he 
  ${jonas.hasDriverLicence() ? 'has' : 'does not have'} a driver's licence`
);
