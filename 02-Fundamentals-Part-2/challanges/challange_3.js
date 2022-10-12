function calcBMI(height, weight) {
  return (weight / height ** 2).toFixed(2);
}

function compareBMIs(person1, person2) {
  let higher = null;
  let lower = null;
  if (person1.bmi() > person2.bmi()) {
    higher = person1;
    lower = person2;
  } else if (person2.bmi() >= person1.bmi()) {
    higher = person2;
    lower = person1;
  } else {
    return `Both people have the same BMI`;
  }
  return `${higher.name}'s BMI (${higher.bmi()}) is higher than ${
    lower.name
  }'s BMI (${lower.bmi()}) `;
}

const mark = {
  name: "Mark",
  weight: 78,
  height: 1.69,
  bmi: function () {
    return calcBMI(this.height, this.weight);
  },
};

const john = {
  name: "John",
  weight: 92,
  height: 1.95,
  bmi: function () {
    return calcBMI(this.height, this.weight);
  },
};

console.log(compareBMIs(mark, john));
