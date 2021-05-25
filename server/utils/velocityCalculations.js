const { isValidNumber } = require('./validators');

const calculateTime = (distance, velocity) => {
  if (!isValidNumber(distance) || !isValidNumber(velocity)) {
    throw new TypeError('Invalid arguments');
  }
  return distance / velocity;
};

const calculateTimeDifference = (distance, velocity1, velocity2) => {
  if (!isValidNumber(distance) || !isValidNumber(velocity1) || !isValidNumber(velocity2)) {
    throw new TypeError('Invalid arguments');
  }
  return calculateTime(distance, velocity2) - calculateTime(distance, velocity1);
};

module.exports = {
  calculateTime,
  calculateTimeDifference,
};
