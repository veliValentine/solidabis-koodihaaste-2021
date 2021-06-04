const V1_ROUTE = '/api/v1';

const MIN_VELOCITY = 0;
const MAX_VELOCITY = 30000;

const MIN_DISTANCE = 0;

const parseVelocity = (req, property = 'velocity') => {
  const velocity = Number(req.params[property]);
  if (Number.isNaN(velocity)) throw new Error('Velocity not a number');
  if (velocity <= MIN_VELOCITY) throw new Error('Velocity must be bigger than 0');
  if (velocity > MAX_VELOCITY) throw new Error(`Velocity is bigger than MAX_VALUE (${MAX_VELOCITY})`);
  return velocity;
};
const parseDistance = (req) => {
  const distance = Number(req.params.distance);
  if (Number.isNaN(distance)) throw new Error('Distance not a number');
  if (distance < MIN_DISTANCE) throw new Error('Distance is less than 0');
  return distance;
};

const status400 = (res, message) => res.status(400).json({ error: message });

const status404 = (res, message) => res.status(404).json({ error: message });

const sendData = (res, info, data1, data2 = null, difference = null) => {
  res.json({
    info,
    data1,
    data2,
    difference,
  });
};

module.exports = {
  V1_ROUTE,
  parseVelocity,
  parseDistance,
  status400,
  status404,
  sendData,
};
