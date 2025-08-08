const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/error");
const products = require('./routes/product');
const auth = require('./routes/auth');
const order = require('./routes/order');
const cookieParser = require("cookie-parser");
const qs = require('qs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path:path.join(__dirname, "config/config.env")});

const payment = require('./routes/payment');

app.use('/uploads', express.static(path.join(__dirname,'uploads')))
app.use(express.json());  // accept the json data request otherwise it will refuse to accept the json data in request
app.use(cookieParser());

// Parse nested query parameters like ?price[lt]=100 → { price: { lt: 100 } }
// Use qs to parse nested query params like ?price[lt]=100
app.set("query parser", function (str) {
  return qs.parse(str);
});

app.use('/api/v1', products);
app.use('/api/v1', auth);
app.use('/api/v1', order);
app.use('/api/v1', payment);


if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, '../frontend/dist/index.html')));
  })
}

// Global error handler
app.use(errorMiddleware);

module.exports = app;