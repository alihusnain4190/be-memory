const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes/api-router");
const {
  handleErrorSQL,
  handleCustomErrors,
  invalidRoute,
  handle500,
} = require("./errors/");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.use("/api", apiRouter);
app.all("/*", invalidRoute);

app.use(handleCustomErrors);
app.use(handleErrorSQL);
app.use(handle500);
module.exports = app;

module.exports = app;
