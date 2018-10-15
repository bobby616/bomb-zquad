import * as calculator from './calculationModule';

const rule1 = {
  isValidAge(age) {
    return age >= 3 && age <= 9;
  },
  calculateCalories(kilograms) {
    return calculator.add(calculator.multiply(22.5, kilograms), 495);
  },
};
const rule2 = {
  isValidAge(age) {
    return age >= 10 && age <= 17;
  },
  calculateCalories(kilograms) {
    return calculator.add(calculator.multiply(17.5, kilograms), 746);
  },
};
const rule3 = {
  isValidAge(age) {
    return age >= 18 && age <= 29;
  },
  calculateCalories(kilograms) {
    return calculator.add(calculator.multiply(15.3, kilograms), 679);
  },
};
const rule4 = {
  isValidAge(age) {
    return age >= 30 && age <= 60;
  },
  calculateCalories(kilograms) {
    return calculator.add(calculator.multiply(11.6, kilograms), 879);
  },
};
const rule5 = {
  isValidAge(age) {
    return age >= 61 && age < 121;
  },
  calculateCalories(kilograms) {
    return calculator.add(calculator.multiply(13.6, kilograms), 487);
  },
};

// female rules
const femaleRule1 = {
  isValidAge(age) {
    return age >= 3 && age <= 9;
  },
  calculateCalories(kilograms) {
    return calculator.add(calculator.multiply(22.5, kilograms), 495);
  },
};
const femaleRule2 = {
  isValidAge(age) {
    return age >= 10 && age <= 17;
  },
  calculateCalories(kilograms) {
    return calculator.add(calculator.multiply(12.2, kilograms), 651);
  },
};
const femaleRule3 = {
  isValidAge(age) {
    return age >= 18 && age <= 29;
  },
  calculateCalories(kilograms) {
    return calculator.add(calculator.multiply(14.7, kilograms), 496);
  },
};
const femaleRule4 = {
  isValidAge(age) {
    return age >= 30 && age <= 60;
  },
  calculateCalories(kilograms) {
    return calculator.add(calculator.multiply(8.7, kilograms), 829);
  },
};
const femaleRule5 = {
  isValidAge(age) {
    return age >= 61 && age <= 120;
  },
  calculateCalories(kilograms) {
    return calculator.add(calculator.multiply(10.5, kilograms), 596);
  },
};

// Water calculator rules
const waterRule1 = {
  isValidAge(age) {
    return age >= 0 && age <= 16;
  },
  calculateCalories(kilograms) {
    return calculator.multiply(kilograms, 0.035);
  },
};
const waterRule2 = {
  isValidAge(age) {
    return age >= 17 && age <= 31;
  },
  calculateCalories(kilograms) {
    return calculator.multiply(kilograms, 0.040);
  },
};
const waterRule3 = {
  isValidAge(age) {
    return age >= 31 && age <= 55;
  },
  calculateCalories(kilograms) {
    return calculator.multiply(kilograms, 0.035);
  },
};
const waterRule4 = {
  isValidAge(age) {
    return age >= 56 && age <= 66;
  },
  calculateCalories(kilograms) {
    return calculator.multiply(kilograms, 0.030);
  },
};
const waterRule5 = {
  isValidAge(age) {
    return age >= 66 && age <= 120;
  },
  calculateCalories(kilograms) {
    return calculator.multiply(kilograms, 0.020);
  },
};

const maleRules = [rule1, rule2, rule3, rule4, rule5];
const femaleRules = [femaleRule1, femaleRule2, femaleRule3, femaleRule4, femaleRule5];
const waterRules = [waterRule1, waterRule2, waterRule3, waterRule4, waterRule5];

export {
  maleRules,
  femaleRules,
  waterRules,
};