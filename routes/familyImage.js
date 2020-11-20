const familyImage = require("express").Router();
const { withErrorHandling } = require("../errors/index");
const { getAllFamilyImage } = require("../controllers/familyImageController");
familyImage.route("/").get(withErrorHandling(getAllFamilyImage));

module.exports = familyImage;
