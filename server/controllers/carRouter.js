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
  const distance = parseDistance(req);
  const velocity = parseVelocity(req);
  if (!id || Number.isNaN(distance) || !velocity) {
    return status400(res, 'missing or invalid params.');
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
  const distance = parseDistance(req);
  const velocity1 = parseVelocity(req, 'velocity1');
  const velocity2 = parseVelocity(req, 'velocity2');
  if (!id || Number.isNaN(distance) || !velocity1 || !velocity2) {
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
