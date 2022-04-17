const { argumentsAreValidNumbers } = require('./validators');

const calculateTime = (distance, velocity) => {
  argumentsAreValidNumbers(2, distance, velocity);
  return distance / velocity;
};

const calculateTimeDifference = (distance, velocity1, velocity2) => {
  argumentsAreValidNumbers(3, distance, velocity1, velocity2);
  return calculateTime(distance, velocity2) - calculateTime(distance, velocity1);
};

module.exports = {
  calculateTime,
  calculateTimeDifference,
};
