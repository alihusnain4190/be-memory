const app = require("express")();
const apiRouter = require("./routes/api-router");
const {
  handleErrorSQL,
  handleCustomErrors,
  invalidRoute,
} = require("./errors/");
app.use("/api", apiRouter);
app.all("/*", invalidRoute);
app.use(handleErrorSQL);

app.use(handleCustomErrors);
module.exports = app;
