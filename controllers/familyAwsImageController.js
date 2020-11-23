const { insertFamilyImageModelAWS } = require("../models/familyAwsImageModel");
exports.addFamilyImageControllerAWS =async (req, res) => {
  insertFamilyImageModelAWS(req, (image) => {
    res.status(201).send({ image });
  });
};