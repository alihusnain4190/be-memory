const app = require("express")();
const apiRouter = require("./routes/api-router");
app.use('/api',apiRouter);
module.exports = app;
