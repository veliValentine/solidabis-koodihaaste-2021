const express = require('express');
const carRouter = require('./controllers/carRouter');
const { V1_ROUTE } = require('./controllers/controllerHelpers');

const app = express();

app.use(express.json());
app.use(express.static('./client/build'));

app.get(`${V1_ROUTE}/health`, (_req, res) => res.send('ok'));

app.use(`${V1_ROUTE}/cars`, carRouter);

app.get('/*', (_req, res) => {
  res.sendFile('./clinet/build/index.html');
});

module.exports = app;
