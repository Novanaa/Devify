import Joi from "joi";

const usersValidation = Joi.object({
  name: Joi.string().max(15).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
  age: Joi.number().min(3),
  gender: Joi.string().max(100),
  picture: Joi.string().max(200),
  image: Joi.string().optional(),
  address: Joi.object({
    country: Joi.string().max(100),
    city: Joi.string().max(100),
  }),
  refresh_token: Joi.string().allow(null),
});

export default usersValidation;
