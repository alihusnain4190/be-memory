const familyImage = require("express").Router();
const { withErrorHandling, methodNotAllowed } = require("../errors/index");
const { getAllFamilyImage } = require("../controllers/familyImageController");
familyImage
  .route("/")
  .get(withErrorHandling(getAllFamilyImage))
  .all(methodNotAllowed);

module.exports = familyImage;
