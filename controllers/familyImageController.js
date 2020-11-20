const { getAllFamilyImageModel } = require("../models/familyImageModels");
exports.getAllFamilyImage = async (req, res) => {
  const f_img = await getAllFamilyImageModel(req.query);
  res.status(200).send({ f_img });
};
