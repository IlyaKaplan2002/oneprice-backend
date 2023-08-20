import Joi from "joi";

export const SuppliersFormResult = Joi.object({
  name: Joi.string().required(),
  codeEDRPO: Joi.string().required(),
  place: Joi.string().required(),
  registration: Joi.string().required(),
  individualNumberPdv: Joi.string().required(),
  activityType: Joi.string().required(),
  salesMarks: Joi.string().required(),
  website: Joi.string().required(),
  services: Joi.string().required(),
  pib: Joi.string().required(),
  role: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  comments: Joi.string(),
});
