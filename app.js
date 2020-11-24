const express = require("express");
const app = express();
const apiRouter = require("./routes/api-router");

const {
  handleErrorSQL,
  handleCustomErrors,
  invalidRoute,
  handle500,
} = require("./errors/");
var cors = require("cors");
app.use(express.static("public"));
app.use(cors());
app.use(express.json());  
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
})

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.use("/api", apiRouter);
app.all("/*", invalidRoute);

app.use(handleCustomErrors);
app.use(handleErrorSQL);
app.use(handle500);
module.exports = app;

// const express = require("express");
// const cors = require("cors");
// const app = express();
// const AWS = require("aws-sdk");
// const fs = require("fs");
// const fileType = require("file-type");
// const multiparty = require("multiparty");
// require("dotenv").config();

// app.use(cors());
// const s3 = new AWS.S3();

// app.get("/products/:id", function (req, res, next) {
//   res.json({ msg: "This is CORS-enabled for all origins!" });
// });

// app.get("/api/image", (req, res) => {
//   res.status(200).send({ messege: "hello ali" });
// });

// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// });

// app.delete("/api/image", (req, res) => {
//   var params = { Bucket: process.env.S3_BUCKET, Key: "1606058751577.png" };
//   s3.deleteObject(params, function (err, data) {
//     console.log(data);
//     console.log(err);
//     return res.status(200).send({ data });
//   });
// });

// const uploadFile = (buffer, name, type) => {
//   const params = {
//     ACL: "public-read",
//     Body: buffer,
//     Bucket: process.env.S3_BUCKET,
//     ContentType: type.mime,
//     Key: `${name}.${type.ext}`,
//   };
//   console.log("ali");
//   return s3.upload(params).promise();
// };
// app.post("/api/image", (request, response) => {
//   console.log(request);
//   const form = new multiparty.Form();
//   form.parse(request, async (error, fields, files) => {
//     if (error) {
//       return response.status(500).send(error);
//     }
//     try {
//       const path = files.file[0].path;
//       const buffer = fs.readFileSync(path);

//       const type = await fileType.fromBuffer(buffer);
//       const fileName = `${Date.now().toString()}`;
//       const data = await uploadFile(buffer, fileName, type);
// console.log(data);
//       return response.status(200).send(data);
//     } catch (err) {
//       console.log(err);
//       return response.status(500).send(err);
//     }
//   });
// });

module.exports = app;
// app.listen(8080, () => {
//   console.log("Server up and running...");
// });
