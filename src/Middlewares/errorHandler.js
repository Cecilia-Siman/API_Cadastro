class ErrorHandler {
  error(error, req, res, next) {
    if (error.code === "Not Found") {
      res.status(404).send(error.message);
    }
    if (error.code === "Not Valid") {
      res.status(412).send(error.message);
    }
  }
}

export default new ErrorHandler();
