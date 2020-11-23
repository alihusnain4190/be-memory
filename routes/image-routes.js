const fImageRoute = require("express").Router();
const {
  addFamilyImageControllerAWS,
} = require("../controllers/familyAwsImageController");

const { withErrorHandling } = require("../errors/index");
fImageRoute.route("/").post(withErrorHandling(addFamilyImageControllerAWS));
module.exports = fImageRoute;
