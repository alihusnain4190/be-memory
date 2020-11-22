const familyImage = require("express").Router();
const { withErrorHandling, methodNotAllowed } = require("../errors/index");
const {
  getAllFamilyImage,
  getFamilyImageControllerByID,
  addFamilyImageController,
  deleteFamilyImageControllerByID,
  updateFamilyImageControllerByID,
} = require("../controllers/familyImageController");

familyImage
  .route("/")
  .get(withErrorHandling(getAllFamilyImage))
  .post(withErrorHandling(addFamilyImageController))
  .all(methodNotAllowed);

familyImage
  .route("/:f_id")
  .get(withErrorHandling(getFamilyImageControllerByID))
  .delete(withErrorHandling(deleteFamilyImageControllerByID))
  .patch(withErrorHandling(updateFamilyImageControllerByID))
  .all(methodNotAllowed);
module.exports = familyImage;
