const carRouter = require('express').Router();

const {
  cars,
  findCarById,
  getConsumptionData,
  getComparisonData,
} = require('../service/carService');

const {
  sendData,
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
  let distance;
  let velocity;
  try {
    distance = parseDistance(req);
    velocity = parseVelocity(req);
  } catch (error) {
    if (error instanceof Error) {
      return status400(res, error.message);
    }
    throw error;
  }
  if (!id) {
    return status400(res, 'missing car id');
  }
  const car = findCarById(id);
  if (!car) {
    return status404(res, `Car with id: ${id} not found`);
  }
  const info = { distance, carId: car.id };
  return sendData(res, info, getConsumptionData(car, distance, velocity));
});

carRouter.get('/:id/:distance/:velocity1/:velocity2', (req, res) => {
  const { id } = req.params;
  let distance;
  let velocity1;
  let velocity2;
  try {
    distance = parseDistance(req);
    velocity1 = parseVelocity(req, 'velocity1');
    velocity2 = parseVelocity(req, 'velocity2');
  } catch (error) {
    if (error instanceof Error) {
      return status400(res, error.message);
    }
    throw error;
  }
  if (!id) {
    return status400(res, 'missing or invalid params.');
  }
  const car = findCarById(id);
  if (!car) {
    return status404(res, `Car with id: ${id} not found`);
  }
  const info = { distance, carId: car.id };
  const { data1, data2, difference } = getComparisonData(car, distance, velocity1, velocity2);
  return sendData(res, info, data1, data2, difference);
});

module.exports = carRouter;
