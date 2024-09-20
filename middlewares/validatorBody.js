import HttpError from "../utils/httpError.js";

export const validatorBody = (schema) => {
  return (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(HttpError(400, error.details[0].message));
    }
    next();
  };
};
