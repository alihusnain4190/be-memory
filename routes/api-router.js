const apiRouter = require("express").Router();
const familyImage = require("./familyImage");
const fImageRoute = require("./image-routes");
 console.log('kasd');
apiRouter.use("/f_imgs", familyImage);
apiRouter.use("/image", fImageRoute);
module.exports = apiRouter;
