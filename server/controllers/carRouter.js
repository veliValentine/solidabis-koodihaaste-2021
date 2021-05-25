const carRouter = require('express').Router();

const cars = require('../data/cars');
const { usedFuel, fuelDifference } = require('../utils/fuelCalculations');
const { calculateTime, calculateTimeDifference } = require('../utils/velocityCalculations');
const {
  status400,
  status404,
  parseDistance,
  parseVelocity,
} = require('./controllerHelpers');

carRouter.get('/', (_req, res) => res.json(cars));

carRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  if (!id) {
    return status400(res, 'missing id');
  }
  const car = findCarById(id);
  if (!car) {
    return status404(res, `Car with id: ${id} not found`);
  }
  return res.json(car);
});

carRouter.get('/:id/:distance/:velocity', (req, res) => {
  const { id } = req.params;
  const distance = parseDistance(req);
  const velocity = parseVelocity(req);
  if (!id || !distance || !velocity) {
    return status400(res, 'missing or invalid params.');
  }
  const car = findCarById(id);
  if (!car) {
    return status404(res, `Car with id: ${id} not found`);
  }
  return res.json(getConsumptionData(car, distance, velocity));
});

carRouter.get('/:id/:distance/:velocity1/:velocity2', (req, res) => {
  const { id } = req.params;
  const distance = parseDistance(req);
  const velocity1 = parseVelocity(req, 'velocity1');
  const velocity2 = parseVelocity(req, 'velocity2');
  if (!id || !distance || !velocity1 || !velocity2) {
    return status400(res, 'missing or invalid params.');
  }
  const car = findCarById(id);
  if (!car) {
    return status404(res, `Car with id: ${id} not found`);
  }
  const difference = {
    time: calculateTimeDifference(distance, velocity1, velocity2),
    fuel: fuelDifference(car.fuelFlowPer100Kilometers, distance, velocity1, velocity2),
  };
  return res.json({
    carId: car.id,
    distance,
    difference,
    data_1: getConsumptionData(car, distance, velocity1),
    data_2: getConsumptionData(car, distance, velocity2),
  });
});

const getConsumptionData = (car, distance, velocity) => (
  {
    carId: car.id,
    velocity,
    distance,
    time: calculateTime(distance, velocity),
    fuel: usedFuel(car.fuelFlowPer100Kilometers, distance, velocity),
  }
);

const findCarById = (carId) => cars.find(({ id }) => id === carId);

module.exports = carRouter;
