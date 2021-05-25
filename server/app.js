const express = require('express');

const app = express();

app.use(express.json());

const V1_ROUTE = '/api/v1';

app.get(V1_ROUTE + '/health', (req, res) => {
  res.send('ok')
})

module.exports = app;
