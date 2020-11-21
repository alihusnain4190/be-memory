exports.withErrorHandling = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res);
    } catch (err) {
      next(err);
    }
  };
};
exports.invalidRoute = (req, res) => {
  res.status(404).send({ msg: "Route Not Found" });
};
exports.methodNotAllowed = (req, res) => {
  res.status(405).send({ msg: "Method Not Allowed" });
};
exports.handleErrorSQL = (err, req, res, next) => {
  const sqlError = ["42703", "22P02"];

  if (sqlError.includes(err.code)) {
    
    res.status(400).send({ msg: "Bad Request" });
  }
  next(err);
};

exports.handleCustomErrors = (err, req, res, next) => {
  if (err.status) res.status(err.status).send({ msg: err.msg });
  else next(err);
};
