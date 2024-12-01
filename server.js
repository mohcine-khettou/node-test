const express = require("express");
const app = express();
require("dotenv").config();
const insuranceRouter = require("./insurance-route");
app.use("/", insuranceRouter);

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log("app is listening on port 5000");
});
