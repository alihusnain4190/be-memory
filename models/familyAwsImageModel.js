const AWS = require("aws-sdk");
const fs = require("fs");
const fileType = require("file-type");
const multiparty = require("multiparty");
require("dotenv").config();

const s3 = new AWS.S3();

// app.get("/products/:id", function (req, res, next) {
//   res.json({ msg: "This is CORS-enabled for all origins!" });
// });

// app.get("/api/image", (req, res) => {
//   res.status(200).send({ messege: "hello ali" });
// });

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: "public-read",
    Body: buffer,
    Bucket: process.env.S3_BUCKET,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`,
  };
  return s3.upload(params).promise();
};

exports.insertFamilyImageModelAWS = async (req, cb) => {
  const form = new multiparty.Form();
  form.parse(req, async (error, fields, files) => {
    try {
      const path = files.file[0].path;
      const buffer = fs.readFileSync(path);
      const type = await fileType.fromBuffer(buffer);
      const fileName = Date.now().toString();
      const data = await uploadFile(buffer, fileName, type);
      cb(data);
    } catch {
      console.log(error);
    }
  });
};

exports.removeFamilyImageModelAWS = async (image_id) => {
  return s3.deleteObject(
    {
      Bucket: process.env.S3_BUCKET,
      Key: image_id,
    },
    function (err, data) {
      return data;
    }
  );
};