import Joi from "joi";

export const participantSchema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  birthday: Joi.date().iso().required(),
  source: Joi.string().required(),
  eventId: Joi.string().required(),
});
