const { isValidNumber } = require('./validators');

const FUEL_FLOW_SLOPE = 1.009;

const fuelPerKilometer = (fuelFlow, velocity) => {
  if (!isValidNumber(fuelFlow) || !isValidNumber(velocity)) {
    throw new TypeError('Invalid arguments');
  }
  return FUEL_FLOW_SLOPE ** (velocity - 1) * (fuelFlow / 100);
};

const fuelDifferencePerKilometer = (fuelFlow, velocity1, velocity2) => {
  if (!isValidNumber(fuelFlow) || !isValidNumber(velocity1) || !isValidNumber(velocity2)) {
    throw new TypeError('Invalid arguments');
  }
  return fuelPerKilometer(fuelFlow, velocity2) - fuelPerKilometer(fuelFlow, velocity1);
};

const usedFuel = (fuelFlowPerKilometer, distance) => {
  if (!isValidNumber(fuelFlowPerKilometer) || !isValidNumber(distance)) {
    throw new TypeError('Invalid arguments');
  }
  return fuelFlowPerKilometer * distance;
};

module.exports = {
  fuelPerKilometer,
  fuelDifferencePerKilometer,
  usedFuel,
};
