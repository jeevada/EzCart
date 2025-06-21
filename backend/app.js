const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/error");
const products = require('./routes/product');
const auth = require('./routes/auth');
const cookieParser = require("cookie-parser");
const qs = require('qs');


app.use(express.json());  // accept the json data request otherwise it will refuse to accept the json data in request
app.use(cookieParser());

// Parse nested query parameters like ?price[lt]=100 → { price: { lt: 100 } }
// Use qs to parse nested query params like ?price[lt]=100
app.set("query parser", function (str) {
  return qs.parse(str);
});

app.use('/api/v1', products);
app.use('/api/v1', auth);
// Global error handler
app.use(errorMiddleware);

module.exports = app;