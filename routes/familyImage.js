const familyImage = require("express").Router();
const { getAllFamilyImage } = require("../controllers/familyImageController");
familyImage.route("/").get(getAllFamilyImage);

module.exports=familyImage;