const cars = require('../data/cars');
const { calculateTime, calculateTimeDifference } = require('../utils/velocityCalculations');
const { usedFuel, fuelDifference } = require('../utils/fuelCalculations');

const findCarById = (carId) => cars.find(({ id }) => id === carId);

const getConsumptionData = (car, distance, velocity) => {
  const baseValues = {
    carId: car.id,
    velocity,
    distance,
  };
  if (distance === 0) {
    return { ...baseValues, time: 0, fuel: 0 };
  }
  return {
    ...baseValues,
    time: calculateTime(distance, velocity),
    fuel: usedFuel(car.fuelFlowPer100Kilometers, distance, velocity),
  };
};

const getComparisonData = (car, distance, velocity1, velocity2) => {
  const baseValues = {
    carId: car.id,
    distance,
    data1: getConsumptionData(car, distance, velocity1),
    data2: getConsumptionData(car, distance, velocity2),
  };
  let difference;
  if (distance === 0) {
    difference = {
      time: 0,
      fuel: 0,
    };
  } else {
    difference = {
      time: calculateTimeDifference(distance, velocity1, velocity2),
      fuel: fuelDifference(car.fuelFlowPer100Kilometers, distance, velocity1, velocity2),
    };
  }
  return {
    ...baseValues,
    difference,
  };
};

module.exports = {
  cars,
  findCarById,
  getConsumptionData,
  getComparisonData,
};
