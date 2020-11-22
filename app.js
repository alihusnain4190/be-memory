const express = require("express");
const app = express();
const apiRouter = require("./routes/api-router");

const {
  handleErrorSQL,
  handleCustomErrors,
  invalidRoute,
  handle500,
} = require("./errors/");
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);
app.all("/*", invalidRoute);

app.use(handleCustomErrors);
app.use(handleErrorSQL);
app.use(handle500);
module.exports = app;
