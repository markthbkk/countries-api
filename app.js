const express = require('express');
const bodyParser = require('body-parser');
const countriesRouter = require('./src/v1/routes/countriesRoutes');
const app = express();
const cors = require('cors');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(`${__dirname}/src/v1/public`));
app.use('/', countriesRouter);

module.exports = app;
