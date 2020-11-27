const apiRouter = require("express").Router();
const familyImage = require("./familyImage");
const fImageRoute = require("./image-routes");
const familyTodo = require("./familyTodo");
apiRouter.use("/f_imgs", familyImage);
apiRouter.use("/image", fImageRoute);
apiRouter.use("/f_todo", familyTodo);
module.exports = apiRouter;
