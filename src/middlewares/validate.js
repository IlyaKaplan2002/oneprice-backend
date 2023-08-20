import throwError from "../helpers/throwError.js";
import ctrlWrapper from "./ctrlWrapper.js";

const validate = (schema) =>
  ctrlWrapper((req, res, next) => {
    const result = schema.validate(req.body);
    if (result.error) {
      throwError(result.error.message, 400);
    }

    next();
  });

export default validate;
