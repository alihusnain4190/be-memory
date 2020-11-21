const {
  getAllFamilyImageModel,
  fetchFamilyImageModelByID,
  insertFamilyImageController,
} = require("../models/familyImageModels");
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
exports.getFamilyImageControllerByID = async (req, res) => {
  const { f_id } = req.params;
  const f_img = await fetchFamilyImageModelByID(f_id);
  res.status(200).send({ f_img });
};
exports.addFamilyImageController = async (req, res) => {
  const body = req.body;
  // console.log(body);
  const f_img = await insertFamilyImageController(body);
  res.status(201).send({ f_img });
};
