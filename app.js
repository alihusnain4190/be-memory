const app = require("express")();
const apiRouter = require("./routes/api-router");
const {handleErrorSQL} = require("./errors/");
app.use("/api", apiRouter);
app.use(handleErrorSQL);
module.exports = app;
