/**
 * 3rd party modules from npm.
 */

const express = require("express");

// Database connection
const connectDB = require("./src/config/db-config");

/**
 * Create Express server.
 */
const app = express();

// Database Connect instantiate
connectDB();

/**
 * route handlers files.
 */
// Product 
const productRouter = require('./src/productRoutes');
app.use('/api/v1/product', productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
