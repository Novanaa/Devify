import Joi from "joi";

const productsValidation = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required().default(5),
  category: Joi.string().required().max(100),
  location: Joi.string().max(100),
  rating: Joi.number().default(0),
  stock: Joi.number().default(1),
  image: Joi.string(),
});

export default productsValidation;
