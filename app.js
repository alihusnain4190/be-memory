const express = require("express");
const app = express();
const apiRouter = require("./routes/api-router");
const {
  handleErrorSQL,
  handleCustomErrors,
  invalidRoute,
  handle500,
} = require("./errors/");
app.use(express.json());
app.use("/api", apiRouter);
app.all("/*", invalidRoute);
app.use(handleErrorSQL);
app.use(handle500);
app.use(handleCustomErrors);
module.exports = app;
