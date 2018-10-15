import {
  maleRules,
  femaleRules,
  waterRules,
} from './caseCheckModule';

const caloriesFunc = function (gender, age, kilograms) {
  if (gender === 'male') {
    return maleRules.find((human) => human.isValidAge(age)).calculateCalories(kilograms);
  } else if (gender === 'female') {
    return femaleRules.find((human) => human.isValidAge(age)).calculateCalories(kilograms);
  }
};

const waterCalculator = function (age, kilos) {
  return waterRules.find((human) => human.isValidAge(age)).calculateCalories(kilos);
};

export {
  waterCalculator,
  caloriesFunc,
};