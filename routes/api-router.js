const apiRouter = require("express").Router();
const familyImage = require("./familyImage");
apiRouter.use("/f_imgs", familyImage);
module.exports = apiRouter;
