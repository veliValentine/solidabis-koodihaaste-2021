const cars = require('../data/cars');
const { calculateTime, calculateTimeDifference } = require('../utils/velocityCalculations');
const { usedFuel, fuelDifference } = require('../utils/fuelCalculations');

const findCarById = (carId) => cars.find(({ id }) => id === carId);

const getConsumptionData = (car, distance, velocity) => (
  {
    carId: car.id,
    velocity,
    distance,
    time: calculateTime(distance, velocity),
    fuel: usedFuel(car.fuelFlowPer100Kilometers, distance, velocity),
  }
);

const getComparisonData = (car, distance, velocity1, velocity2) => {
  const difference = {
    time: calculateTimeDifference(distance, velocity1, velocity2),
    fuel: fuelDifference(car.fuelFlowPer100Kilometers, distance, velocity1, velocity2),
  };
  return {
    carId: car.id,
    distance,
    difference,
    data_1: getConsumptionData(car, distance, velocity1),
    data_2: getConsumptionData(car, distance, velocity2),
  };
};

module.exports = {
  cars,
  findCarById,
  getConsumptionData,
  getComparisonData,
};
