const V1_ROUTE = '/api/v1';

const status400 = (res, message) => res.status(400).json({ error: message });

const status404 = (res, message) => res.status(404).json({ error: message });

module.exports = {
  V1_ROUTE,
  status400,
  status404,
};
