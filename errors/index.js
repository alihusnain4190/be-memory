exports.withErrorHandling = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res);
    } catch (err) {
      next(err);
    }
  };
};
exports.handleErrorSQL = (err, req, res, next) => {
  const sqlError = ["42703"];
 
  if (sqlError.includes(err.code)) {
    res.status(400).send({ msg: "Bad Request" });
  }
  next(err);
};
