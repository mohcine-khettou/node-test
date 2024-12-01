const express = require("express");
const app = express();
require("dotenv").config();
const insuranceRouter = require("./insurance-route");
app.use("/", insuranceRouter);

module.exports = app;
