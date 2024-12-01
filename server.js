const express = require("express");
const app = express();
const router = express.Router();
const insuranceRouter = require("./insurance-route");
app.use("/", insuranceRouter);

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
