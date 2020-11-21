const { getAllFamilyImageModel } = require("../models/familyImageModels");
const { checkOrderQuery } = require("./utils");
exports.getAllFamilyImage = async (req, res) => {
  const { order } = req.query;
  if (!checkOrderQuery(order)) {
    return Promise.reject({
      status: 400,
      msg: "Bad Request: Invalid order query",
    });
  }
  const f_img = await getAllFamilyImageModel(req.query);
  res.status(200).send({ f_img });
};
