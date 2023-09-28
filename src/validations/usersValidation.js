import Joi from "joi";

const usersValidation = Joi.object({
  name: Joi.string().max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string().max(16).required(),
  age: Joi.number().max(3),
  gender: Joi.string().max(100),
  picture: Joi.string().max(100),
  address: Joi.object({
    country: Joi.string().max(100),
    city: Joi.string().max(100),
  }),
});

export default usersValidation;
