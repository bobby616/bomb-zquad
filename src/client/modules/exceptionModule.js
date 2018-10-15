const InvalidAgeException = function () {
  return {
    error: 'This age is invalid!',
  };
};

const InvalidWeightException = function () {
  return {
    error: 'This weight is invalid!',
  };
};

const InvalidGenderException = function () {
  return {
    error: 'Select a gender!',
  };
};

export {
  InvalidAgeException,
  InvalidWeightException,
  InvalidGenderException,
};