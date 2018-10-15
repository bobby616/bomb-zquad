const rule = {
  isInValidAge(age) {
    return age >= 3 && age <= 9;
  },
  calculateCalories(kilograms) {
    return 22.5 * kilograms + 495;
  }
};


const rule2 = {
  isInValidAge(age) {
    return age >= 9 && age <= 12;
  },
  calculateCalories(kilograms) {
    return 22.5 * kilograms + 500;
  }
};

const age = 10;
const kilograms = 40;
const maleRules = [rule, rule2];
export {
  maleRules,
};