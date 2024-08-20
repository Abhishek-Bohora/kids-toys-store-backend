import { validationResult } from "express-validator";
import { ApiError } from "../utils/ApiError.js";

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.path]: err.msg }));

  console.log(extractedErrors[0]);
  console.log(extractedErrors[1]);
  console.log(extractedErrors[2]);
  throw new ApiError(422, "Received data is not valid", extractedErrors);
};
