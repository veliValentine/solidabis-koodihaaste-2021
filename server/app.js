const express = require('express');
const path = require('path');
const carRouter = require('./controllers/carRouter');
const { V1_ROUTE } = require('./controllers/controllerHelpers');

const app = express();

const BUILD_PATH = path.resolve(__dirname, '../client/build');

app.use(express.json());
app.use(express.static(BUILD_PATH));

app.get(`${V1_ROUTE}/health`, (_req, res) => res.send('ok'));

app.use(`${V1_ROUTE}/cars`, carRouter);

app.get('/*', (_req, res) => {
  res.sendFile(path.resolve(BUILD_PATH, './index.html'));
});

module.exports = app;
