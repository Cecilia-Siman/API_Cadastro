class SchemaValidator {
  validateBodySchema(schema) {
    return (req, res, next) => {
      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) {
        return res
          .status(422)
          .send(error.details.map((detail) => detail.message));
      }
      next();
    };
  }

  validateParamsSchema(schema) {
    return (req, res, next) => {
      const { error } = schema.validate(req.params, { abortEarly: false });
      if (error) {
        return res
          .status(422)
          .send(error.details.map((detail) => detail.message));
      }
      next();
    };
  }
}

export default new SchemaValidator();
