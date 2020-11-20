const { date } = require("faker");

const ENV = process.env.NODE_ENV || "development";
const devData = require("./devData/index");
const testData = require("./testData/index");

const data = { development: devData, test: testData };
module.exports = data[ENV];
