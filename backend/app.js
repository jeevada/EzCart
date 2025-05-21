const express = require("express");
const app = express();

app.use(express.json())  // accept the json data request otherwise it will refuse to accept the json data in request
const products = require('./routes/product')

app.use('/api/v1', products)

module.exports = app;