const familyImage = require("express").Router();
const { withErrorHandling, methodNotAllowed } = require("../errors/index");
const {
  getAllFamilyImage,
  getFamilyImageControllerByID,
  addFamilyImageController,
} = require("../controllers/familyImageController");

familyImage
  .route("/")
  .get(withErrorHandling(getAllFamilyImage))
  .post(withErrorHandling(addFamilyImageController))
  .all(methodNotAllowed);

familyImage
  .route("/:f_id")
  .get(withErrorHandling(getFamilyImageControllerByID))
  .all(methodNotAllowed);
module.exports = familyImage;
