const express = require('express');
const carRouter = require('./controllers/carRouter');
const { V1_ROUTE } = require('./controllers/controllerHelpers');

const app = express();

app.use(express.json());

app.get(`${V1_ROUTE}/health`, (_req, res) => res.send('ok'));

app.use(`${V1_ROUTE}/cars`, carRouter);

module.exports = app;
