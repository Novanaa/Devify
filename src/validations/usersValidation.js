import Joi from "joi";

const usersValidation = Joi.object({
  name: Joi.string().max(15).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
<<<<<<< HEAD
  age: Joi.number().min(3),
=======
  age: Joi.number().min(12),
>>>>>>> c260240d42322e7052668a116485c3331b82fe55
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
