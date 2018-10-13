const add = function (x, y) {
  return x + y;
};

const substract = function (x, y) {
  return x - y;
};

const multiply = function (x, y) {
  return x * y;
};

const divide = function (x, y) {
  return x / y;
};

const pow = function (num, power) {
  let number = 1;
  for (let i = 0; i < power; i++) {
    number *= num;
  }
  return number;
};

export {
  add,
  substract,
  multiply,
  divide,
  pow,
};