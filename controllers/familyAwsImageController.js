const {
  insertFamilyImageModelAWS,
  removeFamilyImageModelAWS,
} = require("../models/familyAwsImageModel");
exports.addFamilyImageControllerAWS = async (req, res) => {

  insertFamilyImageModelAWS(req, (image) => {
    res.status(201).send({ image });
  });
};
exports.deleteFamilyImageControllerAWS = async (req, res) => {
  const {
    params: { f_id },
  } = req;
  await removeFamilyImageModelAWS(f_id);

  res.status(204).send("nope");
};
