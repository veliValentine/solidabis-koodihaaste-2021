const isValidNumber = (number) => {
  if (!number || typeof number !== 'number' || Number.isNaN(number)) return false;
  if (number < 0) return false;
  return true;
};

const argumentsAreValidNumbers = (...inputs) => {
  if (inputs[0] !== inputs.filter(filterFalsyValues).length - 1) {
    throw new Error('Missing arguments');
  }
  const invalidArguments = inputs.filter(filterInvalidValues).length;
  if (invalidArguments) {
    throw new TypeError('Argument not a number');
  }
};

const filterFalsyValues = (value) => value;
const filterInvalidValues = (value) => !isValidNumber(value);

module.exports = {
  isValidNumber,
  argumentsAreValidNumbers,
};
