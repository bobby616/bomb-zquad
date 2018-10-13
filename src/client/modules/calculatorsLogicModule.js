import * as calculator from './calculationModule';

const caloriesFunc = function calculate(gender, age, kilograms) {
  let calories = 0;

  if (gender === 'male') {
    if (age >= 3 && age <= 9) {
      const coeff = calculator.multiply(22.7, kilograms);
      calories = calculator.add(coeff, 499);
    } else if (age >= 10 && age <= 17) {
      const coeff = calculator.multiply(17.5, kilograms);
      calories = calculator.add(coeff, 746);
    } else if (age >= 18 && age <= 29) {
      const coeff = calculator.multiply(15.3, kilograms);
      calories = calculator.add(coeff, 679);
    } else if (age >= 30 && age <= 60) {
      const coeff = calculator.multiply(11.6, kilograms);
      calories = calculator.add(coeff, 879);
    } else if (age >= 61 && age <= 120) {
      const coeff = calculator.multiply(13.5, kilograms);
      calories = calculator.add(coeff, 487);
    }
  } else if (gender === 'female'){

    if (age >= 3 && age <= 9) {
      const coeff = calculator.multiply(22.5, kilograms);
      calories = calculator.add(coeff, 495);
    } else if (age >= 10 && age <= 17) {
      const coeff = calculator.multiply(12.2, kilograms);
      calories = calculator.add(coeff, 651);
    } else if (age >= 18 && age <= 29) {
      const coeff = calculator.multiply(14.7, kilograms);
      calories = calculator.add(coeff, 496);
    } else if (age >= 30 && age <= 60) {
      const coeff = calculator.multiply(8.7, kilograms);
      calories = calculator.add(coeff, 829);
    } else if (age >= 61 && age <= 120) {
      const coeff = calculator.multiply(10.5, kilograms);
      calories = calculator.add(coeff, 596);
    }
  }
  return calories;
};

const waterCalculator = function(age, kilos) {
  let result = 0;

  if (age >= 0 && age < 16) {
    result = calculator.multiply(kilos, 0.035);
  } else if (age < 31) {
    result = calculator.multiply(kilos * 0.040);
  } else if (age < 55) {
    result = calculator.multiply(kilos * 0.035);
  } else if (age < 66) {
    result = calculator.multiply(kilos * 0.030);
  } else {
    result = calculator.multiply(kilos * 0.020);
  }

  return result;
};

export {
  waterCalculator,
  caloriesFunc,
};
