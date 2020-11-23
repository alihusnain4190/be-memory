const fImageRoute = require("express").Router();
const {
  addFamilyImageControllerAWS,
  deleteFamilyImageControllerAWS,
} = require("../controllers/familyAwsImageController");

const { withErrorHandling } = require("../errors/index");
fImageRoute.route("/").post(withErrorHandling(addFamilyImageControllerAWS));
fImageRoute
  .route("/:f_id")
  .delete(withErrorHandling(deleteFamilyImageControllerAWS));
module.exports = fImageRoute;
