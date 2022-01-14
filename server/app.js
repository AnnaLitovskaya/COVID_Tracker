/* eslint-disable no-console, no-unused-vars */

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./api/router');

const app = express();

app.use(morgan('dev'));
app.use('/public', express.static('./public'));

app.use(express.json()); // body parser for sending objects thru express *has to come before routes
// app.use(express.urlencoded({ extended: true })); // not sure what this does
app.use('/api', router);

app.get('/', (req, res, next) => {
  try {
    res
      .status(200)
      .sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).send({ error: err.message });
});

module.exports = { app };
