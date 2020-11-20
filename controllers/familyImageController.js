const { getAllFamilyImageModel } = require("../models/familyImageModels");
exports.getAllFamilyImage = (req, res, err) => {
  getAllFamilyImageModel().then((f_img) => {
    res.status(200).send({ f_img });
  });
};
