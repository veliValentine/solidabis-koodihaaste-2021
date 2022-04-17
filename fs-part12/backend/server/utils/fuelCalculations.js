const { argumentsAreValidNumbers } = require('./validators');

const FUEL_FLOW_SLOPE = 1.009;

const fuelPerKilometer = (fuelFlow, velocity) => {
  argumentsAreValidNumbers(2, fuelFlow, velocity);
  return FUEL_FLOW_SLOPE ** (velocity - 1) * (fuelFlow / 100);
};

const fuelDifferencePerKilometer = (fuelFlow, velocity1, velocity2) => {
  argumentsAreValidNumbers(3, fuelFlow, velocity1, velocity2);
  return fuelPerKilometer(fuelFlow, velocity2) - fuelPerKilometer(fuelFlow, velocity1);
};

const usedFuel = (fuelFlow, distance, velocity) => {
  argumentsAreValidNumbers(3, fuelFlow, distance, velocity);
  return fuelPerKilometer(fuelFlow, velocity) * distance;
};

const fuelDifference = (fuelFlow, distance, velocity1, velocity2) => {
  argumentsAreValidNumbers(4, fuelFlow, distance, velocity1, velocity2);
  return usedFuel(fuelFlow, distance, velocity2) - usedFuel(fuelFlow, distance, velocity1);
};

module.exports = {
  fuelPerKilometer,
  fuelDifferencePerKilometer,
  usedFuel,
  fuelDifference,
};
