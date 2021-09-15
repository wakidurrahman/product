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
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
